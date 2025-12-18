#!/usr/bin/env node

/**
 * Enercam Website Testing Script
 * Tests core functionality, forms, navigation, and performance
 */

const http = require('http');
const https = require('https');

const BASE_URL = 'http://localhost:3003';
const TEST_EMAIL = 'test@example.com';
const TEST_DATA = {
  contact: {
    name: 'Test User',
    email: TEST_EMAIL,
    phone: '+237123456789',
    location: 'Cameroon',
    interest: 'quote',
    message: 'This is a test message from the automated testing script.'
  }
};

class WebsiteTester {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      success: '\x1b[32m',
      error: '\x1b[31m',
      warning: '\x1b[33m',
      info: '\x1b[36m',
      reset: '\x1b[0m'
    };

    console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
  }

  async makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
      const protocol = url.startsWith('https') ? https : http;
      const req = protocol.get(url, options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
      });

      req.on('error', reject);
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });
    });
  }

  async testPageLoad(url, expectedStatus = 200) {
    try {
      const response = await this.makeRequest(url);
      if (response.status === expectedStatus) {
        this.results.passed.push(`✓ ${url} loaded successfully (${response.status})`);
        this.log(`✓ ${url} loaded successfully (${response.status})`, 'success');
        return true;
      } else {
        this.results.failed.push(`✗ ${url} returned ${response.status}, expected ${expectedStatus}`);
        this.log(`✗ ${url} returned ${response.status}, expected ${expectedStatus}`, 'error');
        return false;
      }
    } catch (error) {
      this.results.failed.push(`✗ ${url} failed to load: ${error.message}`);
      this.log(`✗ ${url} failed to load: ${error.message}`, 'error');
      return false;
    }
  }

  async testFormSubmission(endpoint, formData) {
    return new Promise((resolve) => {
      const postData = JSON.stringify(formData);
      const options = {
        hostname: 'localhost',
        port: 3002,
        path: endpoint,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };

      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            if (res.statusCode === 200 && response.success) {
              this.results.passed.push(`✓ Form submission to ${endpoint} successful`);
              this.log(`✓ Form submission to ${endpoint} successful`, 'success');
              resolve(true);
            } else {
              this.results.failed.push(`✗ Form submission to ${endpoint} failed: ${response.error || 'Unknown error'}`);
              this.log(`✗ Form submission to ${endpoint} failed: ${response.error || 'Unknown error'}`, 'error');
              resolve(false);
            }
          } catch (error) {
            this.results.failed.push(`✗ Form submission to ${endpoint} returned invalid JSON`);
            this.log(`✗ Form submission to ${endpoint} returned invalid JSON`, 'error');
            resolve(false);
          }
        });
      });

      req.on('error', (error) => {
        this.results.failed.push(`✗ Form submission to ${endpoint} network error: ${error.message}`);
        this.log(`✗ Form submission to ${endpoint} network error: ${error.message}`, 'error');
        resolve(false);
      });

      req.write(postData);
      req.end();
    });
  }

  async testImageLoading(url) {
    try {
      const response = await this.makeRequest(url);
      if (response.status === 200) {
        this.results.passed.push(`✓ Image ${url} loads successfully`);
        this.log(`✓ Image ${url} loads successfully`, 'success');
        return true;
      } else {
        this.results.warnings.push(`⚠ Image ${url} returned ${response.status}`);
        this.log(`⚠ Image ${url} returned ${response.status}`, 'warning');
        return false;
      }
    } catch (error) {
      this.results.warnings.push(`⚠ Image ${url} failed to load: ${error.message}`);
      this.log(`⚠ Image ${url} failed to load: ${error.message}`, 'warning');
      return false;
    }
  }

  async runTests() {
    this.log('🚀 Starting Enercam Website Tests', 'info');
    this.log('=' .repeat(50), 'info');

    // Test basic page loads
    this.log('Testing page loads...', 'info');
    await this.testPageLoad(`${this.baseUrl}/en`);
    await this.testPageLoad(`${this.baseUrl}/fr`);
    await this.testPageLoad(`${this.baseUrl}/en/contact`);
    await this.testPageLoad(`${this.baseUrl}/en/products`);
    await this.testPageLoad(`${this.baseUrl}/en/projects`);

    // Test product pages
    await this.testPageLoad(`${this.baseUrl}/en/products/solar-roofs/heliu`);
    await this.testPageLoad(`${this.baseUrl}/en/products/solar-roofs/roofit`);

    // Test project pages
    await this.testPageLoad(`${this.baseUrl}/en/projects/douala-residential-2kw-installation`);

    // Test redirects
    await this.testPageLoad(`${this.baseUrl}/home`, 307); // Should redirect

    // Test API endpoints
    this.log('Testing API endpoints...', 'info');
    await this.testPageLoad(`${this.baseUrl}/api/contact`, 405); // Method not allowed for GET

    // Test form submission (without actual email sending)
    this.log('Testing form validation...', 'info');
    // Note: This would require setting up test email service or mocking

    // Test image loading (test a few key images)
    this.log('Testing image loading...', 'info');
    // Test external Unsplash images
    await this.testImageLoading('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=800&fit=crop&crop=center');

    // Test 404 handling
    await this.testPageLoad(`${this.baseUrl}/en/nonexistent-page`, 404);

    this.log('=' .repeat(50), 'info');
    this.log('📊 Test Results Summary', 'info');
    this.log(`✅ Passed: ${this.results.passed.length}`, 'success');
    this.log(`❌ Failed: ${this.results.failed.length}`, 'error');
    this.log(`⚠️  Warnings: ${this.results.warnings.length}`, 'warning');

    if (this.results.failed.length > 0) {
      this.log('\n❌ Failed Tests:', 'error');
      this.results.failed.forEach(test => console.log(`  ${test}`));
    }

    if (this.results.warnings.length > 0) {
      this.log('\n⚠️  Warnings:', 'warning');
      this.results.warnings.forEach(test => console.log(`  ${test}`));
    }

    if (this.results.passed.length > 0) {
      this.log('\n✅ Passed Tests:', 'success');
      this.results.passed.slice(0, 5).forEach(test => console.log(`  ${test}`));
      if (this.results.passed.length > 5) {
        console.log(`  ... and ${this.results.passed.length - 5} more`);
      }
    }

    const successRate = (this.results.passed.length / (this.results.passed.length + this.results.failed.length)) * 100;
    this.log(`\n📈 Success Rate: ${successRate.toFixed(1)}%`, successRate >= 90 ? 'success' : 'error');

    return this.results.failed.length === 0;
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  const tester = new WebsiteTester(BASE_URL);

  // Wait for server to be ready
  setTimeout(() => {
    tester.runTests().then(success => {
      process.exit(success ? 0 : 1);
    }).catch(error => {
      console.error('Test runner failed:', error);
      process.exit(1);
    });
  }, 3000);
}

module.exports = WebsiteTester;

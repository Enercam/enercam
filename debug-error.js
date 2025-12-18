const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3004,
  path: '/',
  method: 'GET',
  headers: {
    'User-Agent': 'Node.js Test Script'
  }
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers:`, res.headers);

  if (res.statusCode === 307 && res.headers.location) {
    console.log(`Following redirect to: ${res.headers.location}`);
    // Follow redirect
    const redirectOptions = {
      hostname: 'localhost',
      port: 3004,
      path: res.headers.location,
      method: 'GET',
      headers: {
        'User-Agent': 'Node.js Test Script'
      }
    };

    const redirectReq = http.request(redirectOptions, (redirectRes) => {
      console.log(`Redirect Status: ${redirectRes.statusCode}`);

      let data = '';
      redirectRes.on('data', (chunk) => {
        data += chunk;
      });

      redirectRes.on('end', () => {
        if (redirectRes.statusCode === 500) {
          console.log('Error response:');
          console.log(data.substring(0, 1000)); // First 1000 chars of error
        } else {
          console.log('Response received successfully');
          console.log(data.substring(0, 500)); // First 500 chars
        }
      });
    });

    redirectReq.on('error', (error) => {
      console.error('Redirect request failed:', error.message);
    });

    redirectReq.end();
    return;
  }

  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    if (res.statusCode === 500) {
      console.log('Error response:');
      console.log(data.substring(0, 1000)); // First 1000 chars of error
    } else {
      console.log('Response received successfully');
      console.log(data.substring(0, 500)); // First 500 chars
    }
  });
});

req.on('error', (error) => {
  console.error('Request failed:', error.message);
});

req.end();

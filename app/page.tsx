import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to English version for now
  redirect('/en');
}

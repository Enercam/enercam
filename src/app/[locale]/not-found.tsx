import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Link } from '@/navigation';

export default function NotFound() {
  const t = useTranslations('NotFoundPage');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('title')}</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        {t('description')}
      </p>
      <Link href="/">
        <Button size="lg">{t('homeButton')}</Button>
      </Link>
    </div>
  );
}

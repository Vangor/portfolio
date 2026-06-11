import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-4 px-6 py-8 text-[13px] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
          <span>© 2026 Konstantin Vanichkin</span>
          <span>{t('footer.tagline')}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-foreground transition-colors hover:border-foreground">
            {t('footer.top')}
          </a>
        </div>
      </div>
    </footer>
  );
};

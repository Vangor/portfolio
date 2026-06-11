import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <>
      <a href="#experience" className="transition-colors hover:text-foreground">
        {t('nav.experience')}
      </a>
      <a href="#projects" className="transition-colors hover:text-foreground">
        {t('nav.projects')}
      </a>
      <a href="#skills" className="transition-colors hover:text-foreground">
        {t('nav.skills')}
      </a>
      <a href="#contact" className="transition-colors hover:text-foreground">
        {t('nav.contact')}
      </a>
    </>
  );
};

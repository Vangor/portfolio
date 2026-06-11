import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';

const ConsultationButton = ({ buttonType, code }: { buttonType: string; code?: string }) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="outline"
      size="lg"
      asChild
      className="flex items-center justify-center min-w-[160px] font-medium"
    >
      <a
        href={buttonType === 'cwallet' && code ? code : 'mailto:hello@4etverg.com'}
        className="flex items-center justify-center"
      >
        <Mail className="mr-2 h-4 w-4" />
        {t('consultation.cta')}
      </a>
    </Button>
  );
};

export default ConsultationButton;

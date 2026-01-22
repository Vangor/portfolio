import { Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { CWalletButton } from './Consultation.styled';
import { useTranslation } from 'react-i18next';

const ConsultationButton = ({ buttonType, code }: { buttonType: string; code?: string }) => {
  const { t } = useTranslation();

  if (buttonType === 'cwallet') {
    return (
      <CWalletButton
        data-code={code}
        data-button-type="button"
        data-button-style="primary"
        data-button-text={t('consultation.payButton')}
      >
        {t('consultation.payButton')}
      </CWalletButton>
    );
  }

  return (
    <Button
      variant="outline"
      size="lg"
      asChild
      className="flex items-center justify-center min-w-[160px] font-medium"
    >
      <a href="mailto:contact@vanichk.in" className="flex items-center justify-center">
        <Mail className="mr-2 h-4 w-4" />
        {t('consultation.contactForCustom')}
      </a>
    </Button>
  );
};

export default ConsultationButton;

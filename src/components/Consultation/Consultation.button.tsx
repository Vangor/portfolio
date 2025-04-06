import { Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CWalletButton } from './Consultation.styled';
import { useTranslations } from 'next-intl';

const ConsultationButton = ({ buttonType, code }: { buttonType: string; code?: string }) => {
  const t = useTranslations('consultation');

  if (buttonType === 'cwallet') {
    return (
      <CWalletButton
        data-code={code}
        data-button-type="button"
        data-button-style="primary"
        data-button-text={t('payButton')}
      >
        {t('payButton')}
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
      <Link href="mailto:konstantin@vanichk.in" className="flex items-center justify-center">
        <Mail className="mr-2 h-4 w-4" />
        {t('contactForCustom')}
      </Link>
    </Button>
  );
};

export default ConsultationButton;

import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
       
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Partners</h1>
        <p className="text-gray-600">{t('home.description')}</p>
      </div>
    </div>
  );
};

export default Partners;


import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">{t('notFound.title')}</h2>
        <p className="text-gray-600">{t('notFound.description')}</p>
      </div>
    </div>
  );
};

export default NotFound;


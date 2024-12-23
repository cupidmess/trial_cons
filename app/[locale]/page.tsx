import Image from "next/image";
import Page from "./users/LandingPage/page"
import initTranslations from "../i18n"
import { I18nextProvider } from 'react-i18next'
import i18n from'i18next' ; 
import TranslationProvider from '../components/TranslationProvider'
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}

export default async function Home({params}: { params: { locale?: string } }) {
  console.log('Params:', params); 
  const resolvedParams = await params; // If `params` is a Promise
  console.log('Resolved Params:', resolvedParams);
  const locale = resolvedParams?.locale || 'en' 
  const {t, resources} = await initTranslations(locale, ['landing']); 

  return (
    <div>
      <TranslationProvider resources={resources} locale={locale} namespaces={['landing']}>
      <Page/>
      </TranslationProvider>
    </div>
  );
}

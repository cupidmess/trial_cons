
import Page from "./users/LandingPage/page"
import initTranslations from "../i18n"
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
  const {resources} = await initTranslations(locale, ['landing']); 

  return (
    <div>
      <TranslationProvider resources={resources} locale={locale} namespaces={['landing']}>
      <Page/>
      </TranslationProvider>
    </div>
  );
}

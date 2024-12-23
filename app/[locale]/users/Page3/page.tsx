import React from 'react'
import sty1 from "./page.module.css"
// import Nav2 from '@/app/components/Nav2/Nav2'
import Pg4 from '@/app/components/Pg4/Pg4';
import { I18nextProvider } from 'react-i18next'
import i18n from'i18next' ; 
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { useTranslation } from 'react-i18next'
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}

export default async function page  ({params}: { params: { locale?: string } }){
  console.log('Params:', params); 
  const resolvedParams = await params; // If `params` is a Promise
  console.log('Resolved Params:', resolvedParams);
  const locale = resolvedParams?.locale || 'en' 
  const {t, resources} = await initTranslations(locale, ['landing']); 

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg4/>
      </TranslationsProvider>
    </div>
  )
}



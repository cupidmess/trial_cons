import React from 'react'
import sty1 from "./page.module.css"
// import Nav2 from '@/app/components/Nav2/Nav2'
import Pg3 from '@/app/components/PG3/Pg3'
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
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
  const {resources} = await initTranslations(locale, ['landing']); 

  return (
    <div className={sty1.body}>
      <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
        <Pg3/>
      </TranslationsProvider>
    </div>
  )
}



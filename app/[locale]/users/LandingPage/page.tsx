import React from 'react'
import Nav from '@/app/components/Nav/Nav'
import style from "./page.module.css"
import NavMid from '@/app/components/NavMid/NavMid'
import LP2 from '@/app/components/LP2/LP2'
import LP3 from '@/app/components/LP3/LP3'
import LP4 from '@/app/components/LP4/LP4'
import LP5 from '@/app/components/LP5/LP5'
import LP6 from '@/app/components/LP6/LP6'
import LP7 from '@/app/components/LP7/LP7'
import LP8 from '@/app/components/LP8/LP8'
import LP9 from '@/app/components/LP9/LP9'
import LP10 from '@/app/components/LP10/LP10'
import LP11 from '@/app/components/LP11/LP11'
import LP12 from '@/app/components/LP12/LP12'
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/TranslationProvider';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}
export default async function page ({ params }: { params: Promise<{ locale?: string }> }) {
  const resolvedParams = await params; // Await the params to resolve
  console.log('Resolved Params:', resolvedParams);

  const locale = resolvedParams?.locale || 'en'; // Fallback to 'en' if locale is undefined
  const { resources } = await initTranslations(locale, ['landing']); // Load translations
  return (
    <div className={style.mainbod}>
    <TranslationsProvider resources={resources} locale={locale} namespaces={['landing']}>
    <div className={style.body}>
      <Nav/>
      <NavMid/>
      </div>
      <div className={style.content}>
      <LP2/>
      <LP3/>
      <LP4/>
      <LP5/>
      <LP6/>
      <LP7/>
      <LP8/>
      <LP9/>
      <LP10/>
      <LP11/>
      </div>
      <div className={style.footpg}>
      <LP12/>
      </div>
      </TranslationsProvider>
    </div>
  )
}



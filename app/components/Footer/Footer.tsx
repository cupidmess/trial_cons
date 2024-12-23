'use client' ; 
import React from 'react'
import Image from 'next/image';
import lin from "./Facebook.svg"
import st12 from "./Footer.module.css"
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const {t} = useTranslation();
  return (
    <div className = {st12.main12}>
      <div className = {st12.bot12}>
        <div className = {st12.bott}>
      <div className = {st12.bot1}>
      <div className = {st12.bottext12}>Consennse GmbH  </div>
      <div className = {st12.bots1}>
      Ringwilerstrasse 48620 Wetzikon ZH Switzerland
      </div>
      <div className = {st12.bots2}>info@consennse.com</div>
      <div className = {st12.img12} > <Image src ={lin} alt = "linkedin" height={35} className ={st12.img123}/></div>
      </div>
      <div className = {st12.bottombox2}>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>{t('81')}</div>
        <div className = {st12.bots22}>{t('82')}</div>
      </div>
      <div className={st12.bot22}>
        <div className = {st12.bots21}>{t('83')}</div>
        <div className = {st12.bots22}>{t('84')}</div>
      </div>
      <div className={st12.bot2}>
        <div className = {st12.bots21}>{t('85')}</div>
        <div className = {st12.bots22}>{t('86')}</div>
      </div>
      <div className={st12.bot23}>
        <div className = {st12.bots21}>{t('87')}</div>
        <div className = {st12.bots22}>{t('88')}k</div>
      </div>
      </div>
      </div>
      <div className = {st12.botline}></div>
      <footer className={st12.foot1}>
        <div className = {st12.footdiv1}>
        2024 © Consennse - {t('89')}
        </div>
        <div className = {st12.footdiv2}>{t('90')}</div>
        </footer>
      </div>
    </div>
  )
}

export default Footer

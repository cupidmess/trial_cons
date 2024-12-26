'use client';
import React from 'react'
import st6 from "./LP6.module.css"
import { FaChevronRight } from 'react-icons/fa6'
import Image from 'next/image'
import grm1 from "./grm1.svg"
import { useTranslation } from 'react-i18next'
const LP6 = () => {
  const{t} = useTranslation();
  return (
    <div>
      <div className={st6.body6}>
      <div className={st6.leftwa}>
        <div className = {st6.left6}>
          <div className= {st6.lt1}>{t('35')}</div>
          <div className = {st6.lt2}>{t('36')}</div>
          <div className = {st6.sline}></div>
          <div className = {st6.lt3}>{t('37')}</div>
        </div>
       
        <div className={st6.but1}><button className={st6.but12}>{t('38')} <FaChevronRight style={{margin: '14px', fontSize : '12px'}}/> </button></div> </div>
        <div className = {st6.right6}>
          <div className = {st6.rgrid1}>
          <div className = {st6.right6content}>
           <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('39')}</div>
           <div className = {st6.ctxt2}>{t('40')}</div>
          </div>
          <div className = {st6.right6content}>
           <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('41')}</div>
           <div className = {st6.ctxt2}>{t('42')}</div>
          </div>
          <div className = {st6.right6content}>
           <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('43')}</div>
           <div className = {st6.ctxt2}>{t('44')}</div>
          </div>
          </div>
          <div className ={st6.rgrid2}>
          <div className = {st6.right6content1}>
          <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('45')}</div>
           <div className = {st6.ctxt2}>{t('46')}</div>
          </div>
          <div className = {st6.right6content1}>
          <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('47')}</div>
           <div className = {st6.ctxt2}>{t('48')}</div>
          </div><div className = {st6.right6content1}>
          <Image src = {grm1} alt = "icon" height={50}/>
           <div className = {st6.ctxt1}>{t('49')}</div>
           <div className = {st6.ctxt2}>{t('50')}</div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LP6

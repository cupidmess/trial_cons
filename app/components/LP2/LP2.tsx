'use client';
import React from 'react'
import st from "./LP2.module.css"
import Image from 'next/image'
import group from "./group.svg";
import img2 from "./img2.svg"; 
import shake from "./shake.svg"; 
import { useTranslation } from 'react-i18next';
const LP2 = () => {
  const {t} = useTranslation(); 
  return (
    <div>
      <div className = {st.main}>
     <div className={st.left}> 
      <div className={st.Text}>     
     <div className = {st.T1}>
     {t('7')} </div> 
     <div className={st.T2}>
     {t('8')}
     </div>
     <div className={st.img1}> <Image src = {img2} alt="group"  width={680} /></div>
     </div>
     </div>
     <div className={st.right} >
      <div className={st.rtop}>
        <div className= {st.line}></div>
        <div className={st.rt1}>
          <div className={st.rlt1}> 10+</div>
          <div className={st.rst1}>{t('9')}</div>
        </div>
        <div className={st.sline}></div>
        <div className={st.rt1}>
          <div className={st.rlt1}> 100+</div>
          <div className={st.rst1}>{t('10')}</div>
        </div>
        <div className={st.sline}></div>
        <div className={st.rt1}>
          <div className={st.rlt1}> 150+</div>
          <div className={st.rst1}>{t('11')}</div>
        </div>
      </div>
      <div className={st.rbottom}>
        <div className = {st.rbi1}> <Image src = {shake} alt ="shake" height={275} /> </div>
        <div className = {st.rbi2}> <Image src = {group} alt = "statistics" height={275} /></div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default LP2

'use client';
import React from 'react'
import st7 from "./LP7.module.css"
import Image from 'next/image'
import rext from "./Rext2.svg"
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa'
const LP7 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className = {st7.main7}>
      <div className = {st7.left7}>
      <div className = {st7.left7top}>
      {t('51')}
      </div>
      <div className = {st7.left7txt}>{t('52')}</div>
      <div className = {st7.left7txt1}> {t('53')}</div>
       <div className = {st7.left7txt2}>
      {t('54')}
       </div> 
      <div className = {st7.left7txt2}>
      {t('55')}</div>
      <button className = {st7.leftbut}>{t('56')} <FaChevronRight style={{margin: '14px', fontSize : '12px'}}/> </button>
      </div>
      <div className = {st7.right7}>
        <div className = {st7.rightbox}>
          hi here is the purple box         </div>
          <div className = {st7.imgbox}>
          <Image src = {rext} alt = 'collegues' className={st7.brimg}>
          </Image>
        </div>

      </div>
      </div>
    </div>
  )
}

export default LP7

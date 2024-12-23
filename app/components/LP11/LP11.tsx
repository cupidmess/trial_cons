'use client';
import React from 'react'
import st11 from "./LP11.module.css";
import Image from 'next/image';
import img11 from "./img11.png"
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
const LP11 = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className ={st11.main11}>
      <div className = {st11.right11}>
        <div className = {st11.mcimg}>
          <Image src = {img11} alt ="robot" style={{ borderRadius: '7px' }}/>
        </div>
        </div>
        <div className = {st11.left11}> 
        <div className = {st11.righttop11}>
        {t('75')}
        </div>
        <div className = {st11.righttit11}>{t('76')}</div>
        <div className = {st11.rightmc11}>{t('77')}</div>
        <div className = {st11.but11}><button className = {st11.rightbut11}>{t('78')}<FaChevronRight style={{margin: '14px', fontSize : '12px'}}/> </button></div>
        </div>
        </div>
    </div>
  )
}

export default LP11

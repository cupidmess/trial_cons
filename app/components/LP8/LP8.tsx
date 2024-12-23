'use client';
import React from 'react'
import st8 from "./LP8.module.css"
import Image from 'next/image'
import rectx from "./rectx.svg"
import { useTranslation } from 'react-i18next';
const LP8 = () => {
  const {t} = useTranslation(); 
  return (
    <div>
      <div className = {st8.main8}>
        <div className={st8.left8}>
        <div className = {st8.tit8}>
        {t('80')}
        </div>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('57')}
          </div>
          <div className = {st8.mc18}>
          {t('58')}
          </div>
        </div>
        <div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('59')}
          </div>
          <div className = {st8.mc18}>
          {t('60')}
          </div>
        </div><div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('61')}
          </div>
          <div className = {st8.mc18}>
          {t('62')}
          </div>
        </div><div className= {st8.maincontent}>
          <div className = {st8.mc1}>
          {t('63')}
          </div>
          <div className = {st8.mc18}>
          {t('64')}
          </div>
        </div>
        </div>
        <div className = {st8.right8}>
        <div className = {st8.rightbox8}>
          hi here is the purple box         </div>
          <div className = {st8.imgbox8}>
          <Image src = {rectx} alt = 'sure' width={700}>
          </Image>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LP8

"use client"; 
import React from 'react'
import styles from "./Nav2.module.css"
import Image from 'next/image'
import Name from "./Name.svg"
import { FaCircle } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

import { useTranslation } from 'react-i18next';
import { useState } from 'react'
const Nav2 = () => {
  const {t} = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); };
  return (
    <div>
       <div className={styles.top}>
      <div className={styles.img}>
      <Image src = {Name} alt ="logo" height={27}  /></div>
      <div className={styles.right}>
      <div className={styles.home}>
      Home <div className={styles.ic}><FaCircle/></div></div>
      <div className={styles.serv}>Services </div>
      <div className={styles.sup}>Support </div> 
      <div className={styles.sol}>{t('5')}</div>
      <div className={styles.con}> {t('6')}</div>
      </div>
      <div className={styles.but}><button className={styles.drop}> English </button> <div className={styles.ic2} onClick={toggleDropdown}> <FaChevronDown style={{ transform: 'scale(0.8)'}}/> </div>
      {isOpen && (
        <ul className={styles.DropDown}>
          <li><a href="#">Deutsch</a></li>
        </ul>
      )}
      </div>
      </div>
    </div>
  )
}

export default Nav2

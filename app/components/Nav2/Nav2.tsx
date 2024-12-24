"use client"; 
import React, { useState } from 'react';
import styles from './Nav2.module.css';
import Image from 'next/image';
import Name from './Name.svg';
import { FaCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Nav2 = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);  // Close dropdown after language selection
  };
  

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.img}>
          <Image src={Name} alt="logo" height={27} className = {styles.broimg} />
        </div>
        <div className={styles.right}>
          <Link href="/">
            <div className={styles.home}>
              Home <div className={styles.ic}><FaCircle /></div>
            </div>
          </Link>
          <Link href="/users/Page3">
            <div className={styles.serv}>Services</div>
          </Link>
          <Link href="/users/Page4">
            <div className={styles.sup}>Support</div>
          </Link>

          <div className={styles.sol}>{t('5')}</div>
          <Link href="/users/Page1">
            <div className={styles.con}>{t('6')}</div>
          </Link>
        </div>
        <div className={styles.but}>
          <button className={styles.drop}>
            {i18n.language === 'en' ? 'English' : 'Deutsch'}
          </button>
          <div className={styles.ic2} onClick={toggleDropdown}>
            <FaChevronDown style={{ transform: 'scale(0.8)' }} />
          </div>
          {isOpen && (
            <ul className={styles.DropDown}>
              {i18n.language === 'en' ? (
                <li onClick={() => handleLanguageChange('de')}>Deutsch</li>
              ) : (
                <li onClick={() => handleLanguageChange('en')}>English</li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav2;

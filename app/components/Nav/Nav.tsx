"use client"; 
import Link from 'next/link';
import React, { useState } from 'react';
import styles from "./Nav.module.css";
import Image from 'next/image';
import Name from "./Name.svg";
import { FaCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import NavMid from '../NavMid/NavMid';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Track current language

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language in i18next
    setLanguage(lang); // Update the state to track the selected language
    setIsOpen(false); // Close the dropdown after selection
  };
  

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.img}>
          <Image src={Name} alt="logo" height={27} />
        </div>
        <div className={styles.right}>
          <Link href='/'>
            <div className={styles.home}>
              Home <div className={styles.ic}><FaCircle /></div>
            </div>
          </Link>
          <Link href='/users/Page3'>
            <div className={styles.serv}>Services</div>
          </Link>
          <Link href='/users/Page4'>
            <div className={styles.sup}>Support</div>
          </Link>
          <div className={styles.sol}>{t('5')}</div>
          <Link href='/users/Page1'>
            <div className={styles.con}>{t('6')}</div>
          </Link>
        </div>
        <div className={styles.but}>
          <button className={styles.drop}>
            {language === 'en' ? 'English' : 'Deutsch'} {/* Display current language */}
          </button>
          <div className={styles.ic2} onClick={toggleDropdown}>
            <FaChevronDown style={{ transform: 'scale(0.8)' }} />
          </div>
          {isOpen && (
            <ul className={styles.DropDown}>
              {language === 'en' ? (
                <li onClick={() => changeLanguage('de')}>Deutsch</li> // Show Deutsch if current language is English
              ) : (
                <li onClick={() => changeLanguage('en')}>English</li> // Show English if current language is Deutsch
              )}
            </ul>
          )}
        </div>
      </div>
      <NavMid />
    </div>
  );
};

export default Nav;

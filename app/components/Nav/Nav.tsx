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
import { FaBars } from 'react-icons/fa';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.img}>
          <Image src={Name} alt="logo" height={27} className={styles.broimg} />
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
          <button className={styles.drop} onClick={toggleDropdown}>
            {language === 'en' ? 'English' : 'Deutsch'} {/* Display current language */}
            <div className={styles.ic2} >
            <FaChevronDown style={{ transform: 'scale(0.8)' }} />
          </div>
          </button>
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
        <div className={styles.menu}>
        <div className={styles.menuIcon}> <FaBars className={styles.menustyle}onClick={toggleMenu}/>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* Menu Overlay */}
      {menuOpen && (
      <div
        className={`${styles.menuOverlay} ${
          menuOpen ? styles.slideDown : styles.slideUp
        }`}
      >
          <div className={styles.closeBar} onClick={toggleMenu}>
            &times;
          </div>
          <ul className={styles.menuList}>
            <li>Home</li>
            <Link href='/users/Page3'>
            <li>Services</li> </Link>
            <Link href='/users/Page4'>
            <li>Support</li> </Link>
            <li>{t('5')}</li>
            <Link href='/users/Page1'></Link>
            <li>{t('6')}</li>
          </ul>
        </div>
      )}

      {/* Background Blur */}
      {menuOpen && <div className={styles.blurBackground}></div>}
        </div>
      </div>
      <NavMid />
    </div>
  );
};

export default Nav;

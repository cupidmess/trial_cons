"use client"; 
import React, { useState } from 'react';
import styles from './Nav2.module.css';
import Image from 'next/image';
import Name from './Name.svg';
import { FaCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
const Nav2 = () => {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // Track the active link
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const handleLinkClick = (linkName: string) => {
  setActiveLink(linkName); // Update the active link
};
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
      <Link href='/'>
        <div
          className={`${styles.home} ${activeLink === 'home' ? styles.active : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          Home 
        </div>
      </Link>
      <Link href='/users/Page3'>
        <div
          className={`${styles.serv} ${activeLink === 'services' ? styles.active : ''}`}
          onClick={() => handleLinkClick('services')}
        >
          Services
        </div>
      </Link>
      <Link href='/users/Page4'>
        <div
          className={`${styles.sup} ${activeLink === 'support' ? styles.active : ''}`}
          onClick={() => handleLinkClick('support')}
        >
          Support
        </div>
      </Link>
      <div
        className={`${styles.sol} ${activeLink === 'solutions' ? styles.active : ''}`}
        onClick={() => handleLinkClick('solutions')}
      >
        {t('5')}
      </div>
      <Link href='/users/Page1'>
        <div
          className={`${styles.con} ${activeLink === 'contact' ? styles.active : ''}`}
          onClick={() => handleLinkClick('contact')}
        >
          {t('6')}
        </div>
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
          <Link href='/'>
            <li>Home</li> </Link>
            <Link href='/users/Page3'>
            <li>Services</li> </Link>
            <Link href='/users/Page4'>
            <li>Support</li> </Link>
            <li>{t('5')}</li>
            <Link href='/users/Page1'>
            <li>{t('6')}</li>
            </Link>
          </ul>
        </div>
      )}

      {/* Background Blur */}
      {menuOpen && <div className={styles.blurBackground}></div>}
        </div>
      </div>
    </div>
  );
};

export default Nav2;

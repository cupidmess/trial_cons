'use client';
import React from 'react'
import Nav2 from '../Nav2/Nav2';
import pattern from "./Pattern.svg"
import Image from 'next/image';
import comp from "./comp6.jpeg"
import style from "./Pg2.module.css"
import Frame from "./Frame.svg"
import g1 from "./g1.svg"
import g2 from "./g2.svg"
import g3 from "./g3.svg"
import { useState } from 'react';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next'
const Pg2 = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    company: '',
    email: '',
    phone: '',
    sub: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/form/", { // Replace with your API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setPopupVisible(true);
      } else {
        console.error("Failed to submit form:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  
    // Add API call or other actions
  };
  const closePopup = () => {
    setPopupVisible(false); // Hide the popup
  };
  const {t} = useTranslation(); 
  return (
    <div>
      <div>
      <Image src = {pattern} alt = "pattern" className = {style.pat} /> 
      <Nav2/>
      </div>
      <div className = {style.maincon}>
        <div className = {style.maintop}>{t('91')}</div>
        <div className = {style.form}>
        <form onSubmit={handleSubmit}>
          <div className = {style.leftf}>
            <div className = {style.l1}> 
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                {t('92')}
              </div>
              <div className = {style.fnameinp}>
                <input type="text" name="fname" id = "fname" className={style.finput1} placeholder={t('94')} onChange={handleChange} value={formData.fname} required></input>
              </div>
            </div>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                {t('93')}
              </div>
              <div className = {style.fnameinp}>
                <input type="text" id="lname" name="lname" onChange={handleChange} value={formData.lname}className={style.finput1} placeholder={t('95')} required></input>
              </div>
            </div>
            </div>
            <div className = {style.l2}>
              <div className = {style.comp}>{t('96')}
              <div className = {style.op}>{t('97')}</div>
              </div>
              <div className = {style.compi}>
              <input type="text" id ="company" name = "company" onChange={handleChange} value={formData.company} className={style.finput1} placeholder={t('98')} ></input>
              </div>
            </div>
            <div className = {style.l3}>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                {t('99')}
              </div>
              <div className = {style.fnameinp}>
                <input id = "email" name="email" type="email" onChange={handleChange} value={formData.email} className={style.finput1} placeholder={t('101')} required></input>
              </div>
            </div>
            <div className = {style.l6}>
            <div className = {style.fname1}>
              <div className = {style.fnametxt}>
                {t('100')}
              </div>
              <div className = {style.fnameinp}>
                <input type="tel"   pattern="[0-9]{10}"  name="phone" id ="phone" className={style.finput1} placeholder={t('102')} onChange={handleChange} value={formData.phone} required ></input>
              </div>
            </div>
            </div>
            </div>
            <div className = {style.l4}>
            <div className = {style.comp}>{t('103')}
              </div>
              <div className = {style.compi}>
              <input type="text" name ="sub" id = "sub" className={style.finput1} placeholder={t('104')} onChange={handleChange} value={formData.sub} required></input>
              </div>
            </div>
            <div className = {style.l5}>
            <div className = {style.comp}>{t('105')}
              </div>
              <div className = {style.compi2}>
              <input type="text" name = "message" id = "message" className={style.finput2} placeholder={t('106')}onChange={handleChange} value={formData.message} required></input>
              </div>
            </div>
            <div className={style.but5}>
              <button type="submit" className = {style.lbutt1}>{t('107')}</button>
            </div>
          </div>
          </form>
          {isPopupVisible && (
        <div className={style.popupss}
          style={{
            display: "flex", 
            flexDirection : "column",
            alignItems : "center",
            borderRadius : "10px", 
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            paddingLeft: "4rem",
            paddingRight : "4rem"
          }}
        >
          
          <Image src = {Frame} alt = "tick" height={50}/> 
          <h2 style = {{
            fontSize: "17px", 
            fontWeight : "600",
            marginTop : "0.8rem",
          }}>{t('110')}</h2>
          <p style = {{fontSize: "12px"}}>{t('111')}</p>
          {/* <button onClick={closePopup}>Close</button> */}
        </div>
      )}

      {/* Background Overlay */}
      {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={closePopup}
        ></div>
      )}
          <div className = {style.rightf}>
            <div className = {style.rightt1}>
              <div className = {style.rightbox1}>
              </div>
              <div className = {style.rightimg}>
                <Image src = {comp} alt = "girl" className={style.img1}/>
              </div>
            </div>
            <div className = {style.right2}>
              <div className = {style.righttxt}>
                <div className = {style.righttxt1}>
                  <div className = {style.rimg}><Image src = {g3} alt = "phone" height={35} className={style.rimg1}/></div>
                  <div className = {style.rt1}>+41 79 441 00 17</div>
                </div>
                <div className = {style.righttxt2}>
                  <div className = {style.rimg}><Image src = {g2} alt = "linkedin" height={35} className={style.rimg1}/></div>
                  <div className = {style.rt2}>https://www.linkedin.com/company/consennse</div>
                </div>
              </div>
              <div className = {style.righttxt3}>
                  <div className = {style.rimg}><Image src = {g1} alt = "mail" height={35}className={style.rimg1}/></div>
                  <div className = {style.rt1}>info@consennse.com</div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Pg2
/* add ID to form*/
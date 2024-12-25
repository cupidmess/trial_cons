'use client'
import React from 'react'
import Nav2 from '../Nav2/Nav2'
import Image from 'next/image'
import F1 from "./Group 1597885749-2.svg"
import F2 from "./Frame2.svg"
import F3 from "./Frame3.svg"
import F4 from "./Frame4.svg"
import F5 from "./Frame5.svg"
import Foot from "../Footer/Footer"
import style from "./Pg4.module.css"
import g1 from "./Frame.svg"; 
import { useTranslation } from 'react-i18next'
const Pg4 = () => {
  const {t} = useTranslation();
  
  return (
    <div className={style.mainish}>
    <div className={style.mainbod}>
      <Nav2/>
      <div className = {style.maincon}>
      <div className = {style.top}>
        <div className = {style.left}>
          <div className = {style.ltop}>
          {t('119')}
          </div>
          <div className={style.lbox}></div>
          <div className = {style.lmid}>
          {t('120')}
          </div>
        </div>
        <div className = {style.right}>
          <Image src = {F4} alt = "worker"/>
        </div>
      </div>
      <div className = {style.bottom}>
        <div className = {style.botup}>
        <div className = {style.bottop}>TAILORED TO YOUR NEEDS</div>
        <div className = {style.botmid}>{t('121')}</div>
        <div className = {style.botbox}>
        </div>
        <div className={style.botbot}>{t('122')}</div>
</div>
<div className = {style.boxess}>
<div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F5} alt = "new" height={50}/>
      <div className = {style.head}>CRM Consulting
Basic
</div>
<div className={style.down}>{t('123')}</div>
<div className = {style.donlin}></div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('124')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('125')}</div>
    </div>
    <button className = {style.butt1}>{t('144')}</button>
    </div>
</div>
<div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F2} alt = "new"/>
      <div className = {style.head}>CRM Consulting 
SLA
Silver

</div>
<div className={style.down}>{t('126A')}</div>
<div className = {style.donlin2}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('126')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('127')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('128')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('129')}</div>
    </div>
    <button className = {style.butt2}>{t('144')}</button>
    </div>
</div><div className = {style.botnext3}>
    <div className = {style.first3}>
      <Image src = {F1} alt = "new" height={47}/>
      <div className = {style.head3}>CRM Consulting 
SLA
Gold

</div>
<div className={style.down3}>{t('130')}</div>
<div className = {style.donlin3}></div>
<div className = {style.but1}>

</div>
<div className={style.main3}>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('131')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('132')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('133')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('134')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('135')}</div>
    </div>
    <div className  = {style.l3}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('136')}</div>
    </div>
    <button className = {style.butt3}>{t('144')}</button>
    </div>
</div><div className = {style.botnext}>
    <div className = {style.first}>
      <Image src = {F3} alt = "new" height={47}/>
      <div className = {style.head}>CRM Consulting 
SLA
Platinum

</div>
<div className={style.down}>{t('137')}</div>
<div className = {style.donlin4}></div>
<div className = {style.but1}>

</div>
<div className={style.main}>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('138')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('139')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('140')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('142')}</div>
    </div>
    <div className  = {style.l1}>
      <Image src ={g1} alt ="tick" height={30}/>
        <div className = {style.tick1}>{t('143')}</div>
    </div>
    <button className = {style.butt4}>{t('144')}</button>
    </div>
</div>
</div>

<div className = {style.st}>*Guaranteed response time for emergencies</div>
      </div>
      </div>
      </div>
      <Foot/>


    </div>
  )
}

export default Pg4

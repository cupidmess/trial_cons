'use client'; 
import React from 'react'
import style from "./Pg6.module.css"
import Nav2 from '../Nav2/Nav2'
import Image from 'next/image';
import page from "./Frame 1249186730-2.svg"
import head from "./Frame 1249186730.svg"
import img18 from "./image 18.svg"
import magnif from './Frame 1249186730-3.svg'
import coin from './Frame 1249186730-4.svg'
import img5 from "./Frame 1249186730-5.svg"
import img6 from "./Frame 1249186730-6.svg"
import img7 from "./Frame 1249186730-7.svg"
import img8 from "./Frame 1249186730-8.svg"
import img9 from "./Frame 1249186730-9.svg"
import img10 from "./Frame 1249186730-10.svg"
import img11 from "./Frame 1249186730-11.svg"
import stress from "./f0454ac29027a934d95f4ba9475dcc45.jpeg"
import works from "./Rectangle 34625456-2.svg";
import Foot from "../Footer/Footer"
import union from "./Union.svg"
import shiny from "./shiny-circles-lit-tablet 1.svg"
import { useTranslation } from 'react-i18next';
const Pg6 = () => {
  const {t} = useTranslation(); 
  return (
    <div>
      <Nav2/>
      <div className={style.mainbody}>
      <div className = {style.page1}>
        <Image src = {img18} alt = "logo" height={70}/>
        <div className={style.top1}>Turnkey marketing solution</div>
        <div className={style.line1}></div>
            <div className={style.topcont}>The Swiss version of Propertybase has been
    pre-configured to meet the needs of Swiss real estate agents.At the same time, the Propertybase Swiss Editionoffers enough flexibility to accommodate the individualcustomization requirements of each client.</div>
    <div className={style.topboxes}>
      <div className={style.topbox1}>
        <div className={style.box1img}><Image src = {works} alt = "workspace"/></div>
        <div className={style.box1right}>
          <div className={style.box1tit}>Real Estate Marketing with Precision and Excellence</div>
          <div className={style.box1line}></div>
          <div className={style.box1main}>As a comprehensive, powerful, yet simple solution for real estate marketing, Propertybase SE is quick to implement. Predefined processes facilitate compliance with standards and improve data quality. The addition of “SWISS EDITION” represents Swiss values such as quality, reliability, and precision.</div>
        </div>
      </div>
      <div className={style.topbox2}>
        <div className={style.box2right}>
          <div className={style.box2tit}>Simplifies the Marketer’s Daily Work</div>
          <div className={style.box2line}></div>
          <div className={style.box2main}>In the fast-paced world of real estate, efficiency and seamless communication are key to success. Managing inquiries, following up with leads, and staying organized can often feel overwhelming. That’s why streamlining your daily tasks is essential—not just to save time but to provide the exceptional service your clients expect.
</div>
        </div>
        <div className={style.box2img}><Image src = {stress} alt = "stress" height={400} className={style.stress}/></div>
      </div>
      </div>
      </div>
      <div className={style.page2}>
        <div className = {style.top2}>
          <div className={style.boxes2}>
          <div className={style.behindbox}>  </div>
            <div className={style.box21}> 
              <div className={style.lbox2}>
                <div className = {style.fbox}>
                  <div className={style.fboxtop}>
                    <div>
                    <Image src ={head} alt = "headphones" height={50}/></div>
                    <div className={style.htxt}>AT YOUR SERVICE AROUND THE CLOCK</div>
                  </div>
                  <div className = {style.fboxl}></div>
                  <div className={style.fboxtit}>Automated Delivery of Exposés</div>
                  <div className={style.fboxmaincon}>
                  Inquiries from real estate portals and your website are automatically captured, and the property brochure is immediately sent to the interested party via a personalized email. An intelligent capture logic ensures that a contact is not recorded multiple times.
                  </div>
                </div>
              </div>
          
            </div>
            <div className={style.behindbox2}></div>
            <div className={style.box22}>
              <div className={style.lbox2}>
                <div className = {style.fbox2}>
                  <div className={style.fboxtop2}>
                    <div>
                    <Image src ={page} alt = "writing" height={50}/></div>
                    <div className={style.htxt2}>NO MORE PENDING INQUIRIES</div>
                  </div>
                  <div className = {style.fboxl2}></div>
                  <div className={style.fboxtit2}>Fully automated Follow-up and Rejection Process</div>
                  <div className={style.fboxmaincon2}>
                  Don’t waste time on “window shoppers” or struggle with unsuccessful attempts to reach prospects by phone. Decide how often and at what intervals follow-up emails should be sent.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes22}>
          <div className={style.behindbox21}></div>
            <div className={style.box211}>
              <div className={style.lbox21}>
                <div className = {style.fbox21}>
                  <div className={style.fboxtop21}>
                    <div>
                    <Image src ={magnif} alt = "magnifying" height={50}/></div>
                    <div className={style.htxt21}>NEW MANDATE – GENERATE PROSPECTS</div>
                  </div>
                  <div className = {style.fboxl21}></div>
                  <div className={style.fboxtit21}>Exposé Delivery to the Waiting List</div>
                  <div className={style.fboxmaincon21}>
                  Take advantage of the time lead. Why wait until the marketing materials are finalized? Publish the property on your website or portals right away. Prospects are added to the waiting list and can be served with the brochure at the push of a button.
                  </div>
                </div>
              </div>
            </div>
            <div className={style.behindbox22}></div>
            <div className={style.box222}>
              <div className={style.lbox22}>
                <div className = {style.fbox22}>
                  <div className={style.fboxtop22}>
                    <div>
                    <Image src ={coin} alt = "coinstack" height={50}/></div>
                    <div className={style.htxt22}>MAKE USE OF YOUR ADDRESS DATABASE</div>
                  </div>
                  <div className = {style.fboxl22}></div>
                  <div className={style.fboxtit22}>E-Mail Campaigns</div>
                  <div className={style.fboxmaincon22}>
                  With the integrated campaign module, you can inform potential prospects in your address database about a new mandate. At the push of a button, without filling out a form, they can request the exposé. The automated dispatch and follow-up process takes care of the rest.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.maintop2}>
          <div className={style.leftimg2}>
          <div className={style.unionimg}>
            <Image src = {union} alt = "union" height={300} className={style.unimg}/>
          </div>
          <div className={style.shiny}>
            <Image src = {shiny} alt = "shinycircles" height={340}/>
          </div>
          </div>
          <div className={style.right2}>
            <div className = {style.right2tit}>Overview of the Core Modules</div>
            <div className={style.right2line}></div>
            <div className = {style.right2maincon}>Our core modules form the foundation of streamlined real estate workflows. They combine essential tools to simplify daily tasks, enhance organization, and provide insights that drive success. Focus on what matters most—delivering exceptional service and closing more deals.</div>
          </div>
        </div>
      </div>
      <div className = {style.page3}>
      <div className={style.cards3}>
        <div className={style.topcards}>
        <div className={style.boxes3}>
          <div className={style.behindbox3}>  </div>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img5} alt = "image" height={50}/></div>
                    <div className={style.htxt3}>POWERFUL CRM THAT KEEPS YOU IN CONTROL</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}>Contact and Prospect Management</div>
                  <div className={style.fboxmaincon3}>
                  Categorize your contacts as owners, prospects, or other business contacts. Using topic lists, you gain a comprehensive view of related records such as properties owned, property inquiries, and activities.
                  </div>
                </div>
              </div>
            </div>
            <div className={style.behindbox32}></div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img6} alt = "image" height={50}/></div>
                    <div className={style.htxt32}>RESIDENTIAL PROPERTIES, INVESTMENT PROPERTIES, LAND, PROJECTS</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}>Property Management</div>
                  <div className={style.fboxmaincon32}>
                  Propertybase SE provides a suitable page layout for each property type. This ensures that irrelevant data (e.g., lot size for an apartment) is not displayed in the first place. With the help of topic lists, you get a comprehensive view of related records such as owners, prospects, and activities.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes3}>
          <div className={style.behindbox3}>  </div>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img7} alt = "image" height={50}/></div>
                    <div className={style.htxt3}>PROPERTY MARKETING</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}>Contact and Prospect Management</div>
                  <div className={style.fboxmaincon3}>
                  Categorize your contacts as owners, prospects, or other business contacts. Using topic lists, you gain a comprehensive view of related records such as properties owned, property inquiries, and activities.
                  </div>
                </div>
              </div>
            </div>
            <div className={style.behindbox32}></div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img8} alt = "image" height={50}/></div>
                    <div className={style.htxt32}>RESIDENTIAL PROPERTIES, INVESTMENT PROPERTIES, LAND, PROJECTS</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}>Property Management</div>
                  <div className={style.fboxmaincon32}>
                  Propertybase SE provides a suitable page layout for each property type. This ensures that irrelevant data (e.g., lot size for an apartment) is not displayed in the first place. With the help of topic lists, you get a comprehensive view of related records such as owners, prospects, and activities.
                  </div>
                </div>
              </div>
            </div>
          </div><div className={style.boxes3}>
          <div className={style.behindbox3}>  </div>
            <div className={style.box3}> 
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={img9} alt = "image" height={50}/></div>
                    <div className={style.htxt3}>POWERFUL CRM THAT KEEPS YOU IN CONTROL</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit3}>Contact and Prospect Management</div>
                  <div className={style.fboxmaincon3}>
                  Categorize your contacts as owners, prospects, or other business contacts. Using topic lists, you gain a comprehensive view of related records such as properties owned, property inquiries, and activities.
                  </div>
                </div>
              </div>
            </div>
            <div className={style.behindbox32}></div>
            <div className={style.box32}>
              <div className={style.lbox32}>
                <div className = {style.fbox32}>
                  <div className={style.fboxtop32}>
                    <div>
                    <Image src ={img10} alt = "image" height={50}/></div>
                    <div className={style.htxt32}>RESIDENTIAL PROPERTIES, INVESTMENT PROPERTIES, LAND, PROJECTS</div>
                  </div>
                  <div className = {style.fboxl32}></div>
                  <div className={style.fboxtit32}>Property Management</div>
                  <div className={style.fboxmaincon32}>
                  Propertybase SE provides a suitable page layout for each property type. This ensures that irrelevant data (e.g., lot size for an apartment) is not displayed in the first place. With the help of topic lists, you get a comprehensive view of related records such as owners, prospects, and activities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <Foot/>
    </div>
  )
}

export default Pg6

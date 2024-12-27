import React from 'react'
import Nav from "@/app/components/Nav/Nav"
import Image from 'next/image'
import Footer from '../Footer/Footer'
import style from "./Pg7.module.css"
import image from "./Rectangle 34625456-3.svg"
import hourglass from "./anxiety-induced-by-hourglass 1.svg"
import logo from "./image 17.svg"
import img10 from "./image 10.svg"
import img11 from "./image 11.svg"
import img12 from "./image 12.svg"
import img13 from "./image 13.svg"
import img14 from "./image 15.svg"
import img15 from "./Image-4.svg"
import frame from "./Frame-2.svg"
import { FaChevronRight } from 'react-icons/fa'
const Page7 = () => {
  return (
    <div className = {style.bigbody}>
      <Nav/>
      <div className={style.main}>
      <div className = {style.page1}>
        <div className = {style.h1}>Exposé Automation without Compromise</div>
        <div className = {style.line1}></div>
        <div className = {style.sub1}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolor numquam laudantium temporibus quia deserunt distinctio voluptatum quas ex reiciendis molestias veniam nemo quis iure ad! Iure deserunt a cumque! </div>
        <div className = {style.box1}>
          <div className = {style.img1}> <Image src = {image} alt = "img" className={style.img} /> </div>
          <div className = {style.right1}>
            <Image src = {logo} alt = "logo" className={style.logo1}/>
            <div className = {style.content1}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo minima suscipit, adipisci deleniti repellendus quae doloribus iusto, rerum minus a eveniet animi iure quibusdam magni alias corrupti facere tenetur.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa vitae, quia ea rem, atque, nihil beatae ut facere quasi veniam quo soluta odio provident pariatur illum dolorem quas labore perferendis!
             </div>
          </div>
        </div>
        <div className = {style.box2}>
          <div className = {style.l2}>
            <div className = {style.tit2}>Reduce your Time to Market</div>
            <div className = {style.line2}></div>
            <div className = {style.subtxt2}>Now you can automate your sales docs and direct mail creation without compromise, saving time AND money! </div>
          </div>
          <div className = {style.right2}
> <Image src = {hourglass}  alt = "hourglass" className = {style.hour}/>
  </div>        </div>
      </div>
      <div className = {style.page2}>
        <div className={style.top2}>Create beautiful PDFs & print products – fully automated</div>
        <div className = {style.boxes2}>
        <div className = {style.behindbox1}></div>
        <div className = {style.box21}>
          <div className ={style.imgb2}>
            <Image src = {img10} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          PDF Automation
          </div>
          <div className={style.txt21}>Make an exceptional first impression with auto generated PDFs.</div>
          <div className = {style.botbutt2}></div>
        </div>
        <div className = {style.behindbox21}></div>
        <div className = {style.behindbox2}></div>
        <div className = {style.box22}>
          <div className ={style.imgb2}>
            <Image src = {img11} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          Direct Mail Automation
          </div>
          <div className={style.txt21}>Set yourself apart from the competition with direct mail - auto generated and hassle free.</div>
          <div className = {style.botbutt2}></div>
        </div>
        <div className = {style.behindbox22}></div>
        <div className = {style.behindbox3}></div>
        <div className = {style.box23}>
          <div className ={style.imgb2}>
            <Image src = {img12} alt = "papers" className = {style.image10}/>
          </div>
          <div className = {style.bar2}>
          Print Automation
          </div>
          <div className={style.txt21}>Go the extra mile. Show your property in the form of auto generated brochures and books.</div>
          <div className = {style.botbutt2}></div>
        </div>
        <div className = {style.behindbox23}></div>
        </div>
        <div className = {style.botbox2}>
          <div className = {style.butbox21}>
            
            <div>
          <div className = {style.buttit21}>90%</div>
          <div className = {style.buttit212}>Time saved</div>
          </div>
          <div className = {style.line}></div>
          </div>
          <div className = {style.butbox21}>
            <div>
          <div className = {style.buttit21}>80%</div>
          <div className = {style.buttit212}>Cost reduction</div>
          </div>
          <div className = {style.line}></div>
          </div>
          <div className = {style.butbox21}>
            <div>
          <div className = {style.buttit21}>100%</div>
          <div className = {style.buttit212}>Happier Clients</div>
          </div>
          </div>
        </div>
      </div>
      <div className = {style.page3}>
        <div className = {style.box31}>
          <div className = {style.left31}>
            <div className = {style.lefttit3}>Custom templates tailored to your needs</div>
            <div className = {style.line3}></div>
            <div className={style.stxt3}>Thanks to custom design templates you can create digital PDFs or printed brochures all by yourself. You won&apos;t need any help from graphic designers or agencies. This reduces your time to market and lowers your overhead.</div>
          </div>
          <div className = {style.right31}>
            <Image src = {img13} alt = "website" className = {style.img131}/>
          </div>
        </div>
        <div className = {style.box32}>
          <div className = {style.right31}>
            <Image src = {img14} alt = "website" className = {style.img131}/>
          </div>
          <div className = {style.left31}>
            <div className = {style.lefttit3}>Easy-to-use editor</div>
            <div className = {style.line3}></div>
            <div className={style.stxt3}>Personalising your PDFs or your brochures adding a personal touch? Easy. With our web based editor you can quickly crop or add new photos and edit your copy.

</div>
          </div>
        </div>
        <div className = {style.subsection3}>
          <div className = {style.left32}>
            <div className = {style.tit32}>Why choose EXPOSE</div>
            <div className = {style.line32}></div>
            <div className = {style.stxt32}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem  ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
             </div>
             <div className = {style.right32}>
              <Image src = {img15} alt = "girl" className = {style.img153}/>
             </div>
        </div>
      </div>
      <div className = {style.page4}>
      <div className = {style.bot4}>
          <div className = {style.boxes4}>
            <div className = {style.boxtop4}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo12" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Custom templates
                  </div>
                </div>
                <div className = {style.cont4}>
                  <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae aliquam inventore sed libero nostrum illum porro quos magnam voluptatem non, at sit. Voluptatibus eum enim, corrupti dolore accusamus praesentium perferendis?
                  </div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Easy-to-use editor
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ducimus quaerat ipsa ex sit neque facere unde blanditiis repellendus. Ut minima cum nemo laborum exercitationem, esse maiores culpa doloribus aliquid.
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
            <div className = {style.boxtop42}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo14" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Data integration
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex placeat aliquid, dolorem sit quia earum. Sed doloremque aperiam dignissimos libero cum incidunt nobis, tempore repellat nisi, animi architecto alias rerum?</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame} alt = "logo15" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  PDFs, brochures and direct mail
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contit4}></div>
                  <div className = {style.contxt4}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolore eos quod doloribus deserunt quibusdam autem soluta quaerat, obcaecati molestias neque omnis aliquid odit architecto quia perferendis corporis ut vel.
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>Ready for the next step?</div>
          <div className = {style.con5}>We are happy to provide you with more information or arrange a consultation.</div>
          <button className = {style.but5}>Get Started <FaChevronRight className={style.iconlast}/> </button>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page7

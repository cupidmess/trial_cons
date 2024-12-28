'use client'; 
import React from 'react'
import style from "./Pg8.module.css"
import Nav from "@/app/components/Nav/Nav"
import Foot from "@/app/components/Footer/Footer"
import Image from 'next/image'
import img23 from "./image 23.svg"
import frame5 from "./Frame 1249186731.svg"
import frame6 from "./Frame 1249186731-2.svg"
import frame7 from "./Frame 1249186731-3.svg"
import frame1 from "./Frame 1249186730-17.svg"
import frame2 from "./Frame 1249186730-18.svg"
import frame3 from "./Frame 1249186730-19.svg"
import frame4 from "./Frame 1249186730-20.svg"
import imageback from "./Image-5.svg"
import img19 from "./image 19.svg"
import img21 from "./image 21.svg"
import rect from "./Rectangle 34625466.svg"
import image10 from "./image 20.svg"
import img22 from "./image 22.svg"
import rect2 from "./Rectangle 34625456-4.svg"
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa';
const Pg8 = () => {
  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => setHoveredBox(index);
  const handleMouseLeave = () => setHoveredBox(null);
  return (
    <div className={style.mainish}>
      <Nav/>
      <div className = {style.main}>
      <div className = {style.page1}>
        <div className = {style.logo1}>
        <Image src = {img19} alt = "logo" className={style.logo}/>
        </div>
      <div className = {style.tit1}> The cloud has no opening hours</div>
      <div className = {style.lin1}></div>
        <div className = {style.subtxt1}>Meet your customers’ expectations even better.
        Today, customers expect digital service around the clock.
        Comprehensive self-service and short response times are just as essential as the ability to provide feedback with a single click.
        </div>
        <div className = {style.box1}>
          <div className = {style.l1}>
            <Image src = {rect2} alt = "rectangle" className={style.rect2}/>
          </div>
          <div className = {style.r1}>
            <div className={style.titr1}>
            Transforming the way you work
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>Web Office provides optimal support for your digital transformation.
            By integrating a wide range of digital services, it optimizes processes, reduces the workload on your employees, and positions your company as a future-oriented, digitally driven organization.
            </div>
          </div>
        </div>
        <div className = {style.tit2}>About WEB OFFICE for Propertybase</div>
      <div className = {style.lin2}></div>
      <div className = {style.box2}>
          <div className = {style.r1}>
            <div className={style.titr1}>
            Your digital department in the cloud
            </div>
            <div className = {style.rl1}></div>
              <div className = {style.stxt1}>Web Office provides optimal support for your digital transformation. A variety of digital services are transferred to the Web Office. 
              This eases the workload on your employees and positions your company as a digital and therefore progressive organization.
            </div>
          </div>
          <div className = {style.l1}> 
          <Image src = {rect} alt = "rectangle" className  = {style.rect1}/>
          </div>
        </div>
      </div>
      <div className={style.page2}>
        <div className = {style.top2}>
          <div className={style.boxes2}>
          <div
        className={`${style.behindbox} ${hoveredBox === 1 ? style.hovered : ''}`}
      ></div>
              <div
        className={style.box21}
        onMouseEnter={() => handleMouseEnter(1)} // Hover on box 1
        onMouseLeave={handleMouseLeave} // Hover ends
      >
              <div className={style.lbox2}>
                <div className = {style.fbox}>
                  <div className={style.fboxtop}>
                    <div>
                    <Image src ={frame1} alt = "headphones" height={50}/></div>
                    <div className={style.htxt}>RELIABLE, EFFICIENT, AND TIRELESS</div>
                  </div>
                  <div className = {style.fboxl}></div>
                  <div className={style.fboxtit}>Digital Employee</div>
                  <div className={style.fboxmaincon}>
                  Unlike human employees, digital employees in Web Office are tireless, working around the clock without errors or downtime. They require no recruitment, onboarding, or personal management. Additionally, they are highly flexible, scalable, and demand neither salary increases nor further training. In challenging times, they remain loyal to the company, never switch to competitors, and eliminate the risk of knowledge loss or the leakage of sensitive business information. An ideal complement for your modern enterprise.
                  </div>
                </div>
              </div>
          
            </div>
            <div
        className={`${style.behindbox2} ${hoveredBox === 2 ? style.hovered1 : ''}`}
      > </div>
            <div
        className={style.box22}
        onMouseEnter={() => handleMouseEnter(2)} // Hover on box 1
        onMouseLeave={handleMouseLeave} // Hover ends
      >
              <div className={style.lbox2}>
                <div className = {style.fbox2}>
                  <div className={style.fboxtop2}>
                    <div>
                    <Image src ={frame2} alt = "writing" height={50}/></div>
                    <div className={style.htxt2}>BENEFITS FOR THE HUMAN EMPLOYEE</div>
                  </div>
                  <div className = {style.fboxl2}></div>
                  <div className={style.fboxtit2}>More Time for What Matters</div>
                  <div className={style.fboxmaincon2}>
                  Thanks to the relief provided by Web Office, your employees gain valuable time to focus on what truly matters: acquiring new mandates and providing optimal support to your clients throughout the entire mandate phase. Prospective clients in the decision-making stage can be guided to closure through additional viewings and well-prepared consultations. This boosts both efficiency and customer satisfaction equally.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.boxes22}>
          <div
        className={`${style.behindbox21} ${hoveredBox === 3 ? style.hovered2 : ''}`}
      > </div>
          <div
        className={style.box211}
        onMouseEnter={() => handleMouseEnter(3)} // Hover on box 1
        onMouseLeave={handleMouseLeave} // Hover ends
      >
              <div className={style.lbox21}>
                <div className = {style.fbox21}>
                  <div className={style.fboxtop21}>
                    <div>
                    <Image src ={frame3} alt = "magnifying" height={50}/></div>
                    <div className={style.htxt21}>HYBRID CUSTOMER SERVICE</div>
                  </div>
                  <div className = {style.fboxl21}></div>
                  <div className={style.fboxtit21}>The Symbiosis of Digital and Analog</div>
                  <div className={style.fboxmaincon21}>
                  Each type of employee—digital and human—has unique strengths that, when combined, create an unbeatable team. Digital employees provide 24/7 reliability, are pandemic-resistant, flexibly scalable, and cost-efficient. On the other hand, human employees bring valuable qualities such as interaction, personality, expertise, intuition, and instinct. Together, they create the perfect balance to ensure the long-term success of your business.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page3}>
        <div className={style.tit3}>Overview of the Modules</div>
        <div className={style.lin3}></div>
        <div className = {style.stit3}>Meet your customers&apos; expectations even better.
        Today, customers expect digital service around the clock.
        Comprehensive self-service and short response times are just as essential as the ability to provide feedback with a single click.
      </div>
      <div className = {style.boxes3}>
        <div className = {style.box31}>
          <div className={style.l1}>
            <Image src = {image10} alt ="webpage" className = {style.img10}/>
          </div>
          <div className = {style.rigtbox3}>
          <div
        className={style.behindbox3}
      ></div>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={frame4} alt = "headphones" height={50}/></div>
                    <div className={style.htxt3}>Feedback Favorite</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>Scope of Application</div>
                  <div className={style.fboxmaincon31}>
                  Clients expect their real estate agent to provide clear insights into the status of prospective buyers—especially the reasons for declines. However, traditional follow-ups via phone or email are time-consuming and taxing. This creates a dilemma: the agent must balance providing the client with the requested information while focusing resources on prospects who are close to scheduling a viewing or making a decision.
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  With Feedback Favorite, prospective buyers can communicate their reasons for declining directly from an email. This provides the agent with valuable feedback on each property automatically. The feedback helps the agent fine-tune their marketing strategy and provide the client with well-informed updates.
                  </div>
                  <div className={style.fboxtit31}>Behind the Scenes</div>
                  <div className={style.fboxmaincon31}>
                  The reasons for declines are transmitted to Propertybase in real-time, and the favorite is automatically closed. This ensures the process is efficient and seamlessly integrated into the agent&apos;s daily workflow.
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className = {style.box31r}>
          <div className = {style.rigtbox3}>
          <div
        className={style.behindbox3}
      ></div>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={frame4} alt = "headphones" height={50}/></div>
                    <div className={style.htxt3}>Feedback Closing</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>Scope of Application</div>
                  <div className={style.fboxmaincon31}>
                  The sale or purchase of a property is an emotional journey for both buyers and sellers. To fulfill their role as a mediator professionally and comprehensively, continuous improvement is crucial for real estate agents. Feedback from both parties after a successful transaction provides valuable insights that can help optimize processes and strengthen client relationships.
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  With Feedback Closing, both sellers and buyers can provide ratings for the various stages of the mediation process. This gives the agent key insights to refine their workflows and improve personal interactions with clients and prospects.
                  </div>
                  <div className={style.fboxtit31}>Behind the Scenes</div>
                  <div className={style.fboxmaincon31}>
                  The feedback from both parties is recorded as a star rating directly on the transaction. This standardized and easy-to-read format makes the results easy to analyze and supports the agent&apos;s continuous professional development.
                  </div>
                </div>
              </div>
          </div>
          </div>
          <div className={style.l1}>
            <Image src = {img21} alt ="webpage" className = {style.img10}/>
          </div>
        </div>
        <div className = {style.box31}>
          <div className={style.l1}>
            <Image src = {img22} alt ="webpage" className = {style.img22}/>
          </div>
          <div className = {style.rigtbox3}>
          <div
        className={style.behindbox3}
      ></div>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={frame4} alt = "headphones" height={50}/></div>
                    <div className={style.htxt3}>Campaign To Favorite</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>Scope of Application</div>
                  <div className={style.fboxmaincon31}>
                  The sale or purchase of a property is an emotional journey for both buyers and sellers. To fulfill their role as a mediator professionally and comprehensively, continuous improvement is crucial for real estate agents. Feedback from both parties after a successful transaction provides valuable insights that can help optimize processes and strengthen client relationships.
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  With Feedback Closing, both sellers and buyers can provide ratings for the various stages of the mediation process. This gives the agent key insights to refine their workflows and improve personal interactions with clients and prospects.
                  </div>
                  <div className={style.fboxtit31}>Behind the Scenes</div>
                  <div className={style.fboxmaincon31}>
                  The feedback from both parties is recorded as a star rating directly on the transaction. This standardized and easy-to-read format makes the results easy to analyze and supports the agent&apos;s continuous professional development.
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
        <div className = {style.box31r}>
          <div className = {style.rigtbox3}>
          <div
        className={style.behindbox3}
      ></div>
              <div
        className={style.box312}>
              <div className={style.lbox3}>
                <div className = {style.fbox3}>
                  <div className={style.fboxtop3}>
                    <div>
                    <Image src ={frame4} alt = "headphones" height={50}/></div>
                    <div className={style.htxt3}>Subscription Settings</div>
                  </div>
                  <div className = {style.fboxl3}></div>
                  <div className={style.fboxtit31}>Scope of Application</div>
                  <div className={style.fboxmaincon31}>
                  The flood of newsletters and untargeted messages is becoming increasingly burdensome for many clients. This makes it all the more important for real estate agents to send targeted and relevant information. Otherwise, they risk clients unsubscribing from their communication and no longer receiving updates.
                  </div>
                  <div className={style.fboxtit31}>Practical Application</div>
                  <div className={style.fboxmaincon31}>
                  With Subscription Settings, clients can individually choose the type of information they wish to receive from their agent. While some clients prefer to receive only relevant property offers, others appreciate additional insights, such as updates about the real estate agency or market trends. This ensures that communication is tailored to each client&apos;s specific needs.
                  </div>
                  <div className={style.fboxtit31}>Behind the Scenes</div>
                  <div className={style.fboxmaincon31}>
                  Clients&apos; preferences - including their consent to the privacy policy and the timestamp of this consent - are stored directly on their contact record. This ensures that the data remains organized and traceable at all times, enabling professional and legally compliant communication.
                  </div>
                </div>
              </div>
          </div>
          </div>
          <div className={style.l1}>
            <Image src = {img21} alt ="webpage" className = {style.img10}/>
          </div>
        </div>
      </div>
      </div>
      <div className = {style.page4}>
        <div className = {style.tit4}>In Preparation</div>
        <div className = {style.line4}></div>
          <div className = {style.stxt4}>We are continuously expanding WEB OFFICE and are currently working on the following modules:
          </div>
          <div className = {style.bot4}>
          <div className = {style.boxes4}>
            <div className = {style.boxtop4}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame5} alt = "logo12" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Search Profile
                  </div>
                </div>
                <div className = {style.cont4}>
                  <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Creation and management of search profiles via self-service
                  </div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
              <div className = {style.box42}>
                <div className = {style.titb4}>
                  <Image src = {frame6} alt = "logo13" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Auto Matching
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Using AI, the inquiries and search profiles of a prospective client are continuously analyzed. Based on this analysis, an email with suitable property suggestions is automatically sent, enabling targeted and personalized engagement with the client.
                  </div></div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
            <div className = {style.boxtop42}>
              <div className = {style.box41}>
                <div className = {style.titb4}>
                  <Image src = {frame7} alt = "logo14" className={style.img41}/>
                  <div className = {style.ttxt4}>
                  Feedback Favorite PRO
                  </div>
                </div>
                <div className = {style.cont4}>
                <div className={style.maincont4}>
                  <div className = {style.contxt4}>
                  Enhanced functionality of Feedback Favorite: Prospective clients can not only provide their feedback but also directly view the provided documents and take the next steps, such as scheduling a viewing or submitting a decline. This intuitive feature streamlines interactions and accelerates the process for all parties involved.</div>
                  </div>
                  <div className = {style.fakebutton}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page5}>
        <div className={style.top5}>
          <div className = {style.lefttop5}>
            <div className={style.lefttit5}>Why choose WEB OFFICE</div>
            <div className={style.lefttst5}>WEB OFFICE is the ideal solution to enhance efficiency, flexibility, and quality in your business sustainably.</div>
          </div>
          <div className = {style.rightimg}>
          <Image src = {imageback} alt = "background-girl" className = {style.backimg}/>
          </div>
        </div>
        <div className = {style.bottom5}>
          <div className = {style.botleft5}>
            <div className = {style.box51}>
              <div className = {style.behindbox51}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Real-Time Self-Service for Clients: </div>
                <div className = {style.mainstit5}>Instant access to information and features anytime, anywhere.</div>
              </div>
            </div>
            <div className = {style.box51}>
              <div className = {style.behindbox51}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Available 24/7: </div>
                <div className = {style.mainstit5}>Continuous support without interruptions.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox51}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Scalability at the Push of a Button: </div>
                <div className = {style.mainstit5}>Easily and quickly adjust capacity to meet current demands.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox51}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Supports Business Growth:  </div>
                <div className = {style.mainstit5}>Facilitates expansion through efficient digital processes.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox51}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>More Time for What Matters:  </div>
                <div className = {style.mainstit5}>Frees up advisors for focused client care and strategic tasks..</div>
              </div>
            </div>
          </div>
          <div className = {style.botleft5}>
            <div className = {style.box51}>
              <div className = {style.behindbox52}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Standardized Processes:  </div>
                <div className = {style.mainstit5}>Ensures consistent quality by adhering to predefined standards.</div>
              </div>
            </div>
            <div className = {style.box51}>
              <div className = {style.behindbox52}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Solves Staffing Challenges:  </div>
                <div className = {style.mainstit5}>Reduces personnel shortages and prevents employee overload.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox52}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Enhanced Client Information:  </div>
                <div className = {style.mainstit5}>Provides precise and up-to-date data to improve client satisfaction.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox52}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Provides precise and up-to-date data to improve client satisfaction. </div>
                <div className = {style.mainstit5}>Maintains reliable operations regardless of external disruption.</div>
              </div>
            </div> <div className = {style.box51}>
              <div className = {style.behindbox52}></div>
              <div className = {style.mainbox51}>
                <div className = {style.mbtit5}>Cost Efficiency:  </div>
                <div className = {style.mainstit5}>Saves resources through automated and digital workflows.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className = {style.page6}>
        <div className = {style.box6}>
        <div className = {style.tit6}>These companies have already hired digital employees.</div>
        <div className = {style.line6}></div>
        <Image src = {img23} alt = "companies" className = {style.img23}/>
        </div> 
        <div className = {style.lastpage}>
          <div className = {style.lasttit}>Ready for the next step?</div>
          <div className = {style.con5}>We are happy to provide you with more information or arrange a consultation.</div>
          <button className = {style.but5}>Get Started <FaChevronRight className={style.iconlast}/> </button>
        </div>
      </div>
      </div>
      <footer>
      <Foot/>
      </footer>
    </div>
  )
}

export default Pg8

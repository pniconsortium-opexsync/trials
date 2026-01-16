"use client";   
import Link from "next/link"
import { useState } from "react";
import styles from './home.module.css';
import pniconsortiumlogo from '../public/PNI Consortium logo.svg';


export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.mainbody}>

      <div className={styles.navbartop}>
        <div className={styles.navbar}>
          <div className={styles.navlogo}>
            <img src={pniconsortiumlogo.src} alt="" />
          </div>

          <div className={styles.navoptions}>
            <ul>
              <Link href="/"><li>Home</li></Link>
              <Link href="/services"><li>Services</li></Link>
              <Link href="/practiceareas"><li>Practice Areas</li></Link>
              <Link href="/blogs"><li>Blogs</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
            </ul>

            {/* MENU ICON — toggle mobile nav */}
            <div 
              className={styles.menuicon} 
              onClick={() => setOpen(!open)}
            >
              <img src="/images/home/Menu Icon.svg" alt="" />
            </div>
          </div>

          <div className={styles.getquote}>
            <div className={styles.getquotebutton}>
              <Link href="https://wa.me/+919400095966" target="_blank"><h3>Get Quote</h3></Link>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR — show only when "open" is true */}
      <div className={`${styles.mobnavbar} ${open ? styles.show : ""}`}>
        <ul>
          <Link href="/"><li>Home</li></Link>
              <Link href="/services"><li>Services</li></Link>
              <Link href="/practiceareas"><li>Practice Areas</li></Link>
              <Link href="/blogs"><li>Blogs</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </div>

{/* REST IS MY CODE REST IS MY CODE REST IS MY CODE */}

      <div className={styles.banner}>
        {/* <img src={pniconsortiumbanner} alt="pniconsortium-image" /> */}
        {/* <div className={styles.bannercontent}> */}
        <h3>Strategic Legal <br />
          Counsel & Expert <br />
          Tax Planning for Every <br /> Business Need</h3>
        <p>Comprehensive legal and tax solutions built to protect, <br />
          optimize, and grow your business.</p>
        {/* </div> */}
        <Link href="https://wa.me/+919400095966" target="_blank"> <div className={styles.bannerbutton}><h4>Schedule Consultation</h4></div></Link>
      </div>
      <div className={styles.empovering}>
        <div className={styles.abouttop}>
          <img src="/images/home/PNI Logo Icon.svg" alt="pniconsortiumlogo" />
          <h4>PNI CONSORTIUM</h4>
        </div>
        <h5>Empowering Clients <br className={styles.brone} /> Through <br className={styles.brtwo} /> Law and Tax Expertise </h5>
        <h6 id={styles.since}>Since 1984</h6>
        <p id={styles.founded}>Founded on 25 October 1984, PNI Consortium is a <br className={styles.brone}/> 
        leading Law and Taxation Corporate Firm based <br />
          in Aluva, Ernakulam. We provide complete legal, financial, and tax solutions—including auditing, litigation, <br className={styles.brtwo} /> 
          taxation, financial accounting, tax planning, and settlements—to support individuals and businesses.</p>
        <div className={styles.pnides}>
          <div className={styles.pnidesp}>
            <div className={styles.pnidespp}>
              <h2>P</h2>
            </div>
            <h1>LEGAL FIRM</h1>
            <h4>P N Damodaran & Associates</h4>
            <p>Experts in litigation, corporate legal <br className={styles.brtwo} /> 
              services, regulatory  compliance, 
              and sector-specific advisory.</p>
          </div>
          <div className={styles.pnidesn}>
            <div className={styles.pnidesnn}>
              <h2>N</h2>
            </div>
            <h1>ACCOUNTING FIRM</h1>
            <h4>Namboothiri & Associates</h4>
            <p>Specialists in bookkeeping, financial 
              reporting, tax <br className={styles.brone} /> consulting, and <br className={styles.brtwo} /> 
              business advisory.</p>
          </div>
          <div className={styles.pnidesi}>
            <div className={styles.pnidesii}>
              <h2>I</h2>
            </div>
            <h1>CHARTED ACCOUNTANTS</h1>
            <h4>Indumathy & Co</h4>
            <p>Leaders in statutory/internal audits, <br className={styles.brtwo} /> 
              assurance services, <br className={styles.brone} /> and strategic tax 
              <br className={styles.brtwo} />  and financial planning.</p>
          </div>

        </div>

        <div className={styles.achives}>
          <div className={styles.achivesone}>
            <img src="/images/home/Star Icon.svg" alt="" />
            <h4>40+</h4>
            <h6>Years of Expertise</h6>
          </div>
          <div className={styles.achivesone}>
            <img src="/images/home/UpArrow Icon.svg" alt="" />
            <h4>5000+</h4>
            <h6>Successful Clients</h6>
          </div>
          <div className={styles.achivesmob}>
           <div className={styles.achivesmobone}>
            <img src="/images/home/Star Icon.svg" alt="" />
            <h4>40+</h4>
            <h6>Years of Expertise</h6>
          </div>
          <div className={styles.achivesmobone}>
            <img src="/images/home/UpArrow Icon.svg" alt="" />
            <h4 id={styles.five}>5000+</h4>
            <h6>Successful Clients</h6>
          </div>
          </div>
          <div className={styles.achivesone}>
            <img src="/images/home/Side Up Arrow Icon.svg" alt="" />
            <h4>98+</h4>
            <h6>Client Retention rate</h6>
          </div>
          <div className={styles.achivesone}>
            <img src="/images/home/Smiley Icon.svg" alt="" />
            <h4>100%</h4>
            <h6>Client Satisfaction </h6>
          </div>
          <div className={styles.achivesmob}>
           <div className={styles.achivesmobone}>
            <img src="/images/home/Side Up Arrow Icon.svg" alt="" />
            <h4>98+</h4>
            <h6>Success Rate</h6>
          </div>
          <div className={styles.achivesmoboneid}>
            <img src="/images/home/Smiley Icon.svg" alt="" />
            <h4>100%</h4>
            <h6>Confidentiality</h6>
          </div>
          </div>
        </div>
        <p id={styles.together}>Together as PNI, we integrate legal, accounting, and audit expertise to deliver:</p>

        <div className={styles.togetherone}>
          <img src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Seamless, coordinated professional services</h6>

          <img id={styles.togethericonone} src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Holistic, efficient, and compliant business solutions</h6>
        </div>
        <div className={styles.togethertwo}>
          <img src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Strategic insights from multidisciplinary specialists</h6>

          <img id={styles.togethericontwo} src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>A single, trusted platform for all legal and financial needs</h6>
        </div>

        {/* TOGETHER ONE ONE  */}

        <div className={styles.togetheroneone}>
          <img src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Seamless, coordinated professional services</h6>

          <img id={styles.togethericononeone} src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Holistic, efficient, and compliant business solutions</h6>
        </div>
        <div className={styles.togethertwotwo}>
          <img src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>Strategic insights from multidisciplinary specialists</h6>

          <img id={styles.togethericontwotwo} src="/images/home/Tick Icon.svg" alt="tickicon" />
          <h6>A single, trusted platform for all legal and financial needs</h6>
        </div>

        

        <div className={styles.boarderline}></div>

        <p id={styles.standsfor}>PNI Consortium stands for trust, professionalism, and decades of  <br className={styles.brone} /> combined expertise, <br className={styles.brtwo} /> 
          supporting clients with clarity, compliance, <br className={styles.brone} /> and confidence.</p>


        <div className={styles.pro}>
          <img src="/images/home/Rectangle 12.png" />
          <div className={styles.propara}>
            <h4>Our Professional Legal,  <br />
              Accounting & CA Services</h4>
            <p>We provide streamlined legal support including <br className={styles.brone} /> dispute <br className={styles.brtwo} />  
              resolution, arbitration, corporate law, contracts, and tax litigations. <br className={styles.brtwo} /> 
              Our accounting services cover GST, bookkeeping,  <br className={styles.brtwo} /> 
              taxation, and business registrations for companies, <br className={styles.brtwo} /> 
              partnerships, and sole proprietorships. We also offer<br className={styles.brtwo} /> 
              professional CA services such as audits, tax planning, <br className={styles.brtwo} /> 
              consultancy, and asset certification—ensuring complete <br className={styles.brtwo} /> 
              compliance and reliable financial guidance.</p>
            <div className={styles.proparabtn}>
              <Link href="/services"><h3>View All Services</h3></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.attorneys}>
        <h1>Resource persons</h1>
        <div className={styles.attorneyswrapper}>
          <div className={styles.attorneyswrap}>
            <div className={styles.imageplacerone}>
              {/* <img src="/images/home/P N D Namboothiri.png" alt="" /> */}
            </div>
            <h3>P N D Namboothiri</h3>
            <h5>Head - Legal Division</h5>
            <h6>B. Com, LLM. </h6>
          </div>
          <div className={styles.attorneyswrap}>
            <div className={styles.imageplacertwo}>
              {/* <img src="/images/home/P N D Namboothiri.png" alt="" /> */}
            </div>
            <h3>T Lalithambika</h3>
            <h5>Head - Audit & Accounting Division</h5>
            <h6>B. Com., B.G.L., Tax Practitioner. </h6>
          </div>
          <div className={styles.attorneyswrap}>
            <div className={styles.imageplacerthree}>
              {/* <img src="/images/home/P N D Namboothiri.png" alt="" /> */}
            </div>
            <h3>Hrithwik D Namboothiri</h3>
            <h5>Advocate, Associate - Legal Division</h5>
            <h6>High Court of Kerala - Empanelled Arbitrator</h6>
            <h6>B. Com., LLB (Hons.), LLM (Sco.), 
PGD - GST</h6>
          </div>
        </div>
      </div>
<div className={styles.choose}>
  <h1>Why Choose Us?</h1>
  <div className={styles.chooseabout}>
    <img src="/images/home/Gold Star Icon.svg" alt="" />
    <p>Proven success across 40 years of legal and financial excellence.</p>
  </div>
  <div className={styles.chooseabout}>
    <img src="/images/home/Red Stop Icon.svg" alt="" />
    <p>Transparent pricing – no hidden charges.</p>
  </div>
  <div className={styles.chooseabout}>
    <img src="/images/home/Hammer Icon.svg" alt="" />
    <p>A comprehensive approach integrating both law and taxation.</p>
  </div>
  <div className={styles.chooseabout}>
    <img src="/images/home/Blue Tick Icon.svg" alt="" />
    <p>Team of certified attorneys, auditors, and tax professionals.</p>
  </div>
  <div className={styles.chooseabout}>
    <img src="/images/home/Thumps Up Icon.svg" alt="" />
    <p>Dedicated client support for lasting relationships.</p>
  </div>
  <div className={styles.chooseaboutone}>
   
    <ul>
      <li>Proven success across 40 years of legal and financial excellence.</li>
      <li>Transparent pricing – no hidden charges.</li>
      <li>A comprehensive approach integrating both law and taxation.</li>
      <li>Team of certified attorneys, auditors, and tax professionals.</li>
      <li>Dedicated client support for lasting relationships.</li>
    </ul>
  </div>

</div>

<div className={styles.footer}>
  <h1>PNI Consortium</h1>
  <div className={styles.footerwrapper}>
    <div className={styles.footerwraptwo}>
      <h2>Mission & Vision</h2>
      <p>To be the leading provider of <br />
       financial and legal services, <br />
        empowering businesses with <br />
         innovative solutions and strategic <br />
          expertise for sustainable growth.</p>
    </div>
    <div className={styles.footerwrapthree}>
     <h1>Quick Links</h1>
     <ul>
      <Link href="/"><li>Home</li></Link>
              <Link href="/services"><li>Services</li></Link>
              <Link href="/practiceareas"><li>Practice Areas</li></Link>
              <Link href="/blogs"><li>Blogs</li></Link>
              <Link href="/contact"><li>Contact</li></Link>
     </ul>
    </div>
    <div className={styles.footerwrapone}>
      <h1>Address</h1>
       <div className={styles.address}>
        <img src="/images/home/Maps Icon.svg" alt="" />
        <p>Palleri Mana Building, <br /> 
Ernakulam Road, Aluva - 1</p>
       </div>
      {/* ADDRESS CHANGED FROM HERE, ADDRESS CHANGED FROM HERE */}

        <div className={styles.numberchange}>
        <img src="/images/home/Phone Icon.svg" alt="" />
         <Link href="https://wa.me/+919400095966" target="_blank"><p>+91 94000 95966</p></Link>
       </div>
       <div className={styles.numberchange}>
        <img src="/images/home/Phone Icon.svg" alt="" />
         <Link href="https://wa.me/+919447396577" target="_blank"><p>+91 94473 96577</p></Link>
       </div>
       <div className={styles.numberchange}>
        <img src="/images/home/Phone Icon.svg" alt="" />
         <Link href="https://wa.me/+919447510042" target="_blank"><p>+91  94475 10042</p></Link>
       </div>

       


        <div className={styles.addressemail}>
       
       <div className={styles.emailchange} >
         <img src="/images/home/Email Icon.svg" alt="" />
         <a href="mailto:adv.hrithwikdn@gmail.com"><p>adv.hrithwikdn@gmail.com</p></a>
         
       </div>
       <div className={styles.emailchange} >
         <img src="/images/home/Email Icon.svg" alt="" />
         <a href="mailto:Namboothiri_pnd@yahoo.co.in"><p>Namboothiri_pnd@yahoo.co.in</p></a>
         
       </div>
       </div>

       {/* ADDRESS CHANGED FROM HERE, ADDRESS UNTIL  HERE */}

       
       <h2>Follow Us</h2>
       <div className={styles.footericons}>
       <img src="/images/home/Facebook Logo.svg" alt="" />
       <img src="/images/home/Twitter Logo.svg" alt="" />
       <img src="/images/home/Linkedin Logo.svg" alt="" />
       <img src="/images/home/Instagram Logo.svg" alt="" />
       </div>
    </div>
  </div>
  <div className={styles.boarderlineone}></div>

  <h6>© 2025 PNI Consortium Inc. All rights reserved.</h6>
</div>

    </div>

  );
}
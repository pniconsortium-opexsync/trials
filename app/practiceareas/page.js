"use client"
import styles from './practiceareas.module.css'
import Link from "next/link"
import { useState } from 'react';



export default function Page(){

    const [open, setOpen] = useState(false);

    return(
        <div className={styles.mainbody}>

<div className={styles.navbartop}>
        <div className={styles.navbar}>
          <div className={styles.navlogo}>
            <img src="/images/service/PNI Consortium logo.svg" alt="" />
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
        <h3>Practice Areas</h3>
        <p>Diverse legal specialties offering expert guidance across corporate, commercial, litigation, tax, intellectual property, and regulatory matters.</p>
        {/* </div> */}
       
      </div>

    

   <div className={styles.practice}>
    <div className={styles.gridcontainer}>
    <div className={styles.card}>
        <img src="/images/practice/1.png" alt="" />
        <h5>Corporate & Commercial</h5>
        <p>Provides legal support for forming, managing, and operating businesses, including contracts, mergers, acquisitions, governance, regulatory compliance, and general commercial transactions to ensure smooth business operations.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/2.png" alt="" />
        <h5>Arbitration</h5>
        <p>A private dispute-resolution method where an impartial arbitrator hears both sides and issues a binding decision, offering faster, confidential, and cost-effective alternatives to traditional litigation processes.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/3.png" alt="" />
        <h5>Tax litigation </h5>
        <p>Handles disputes between taxpayers and tax authorities over assessments, penalties, or interpretations of tax laws, representing clients before tribunals, courts, and appellate bodies for accurate resolution.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/4.png" alt="" />
        <h5>Litigation</h5>
        <p>Involves representing clients in court for civil or criminal disputes, managing pleadings, evidence, trials, and appeals to protect legal rights and pursue favorable judicial outcomes.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/Litigation.jpg" alt="" />
        <h5>Constitutional Litigation</h5>
        <p>Focuses on disputes involving constitutional rights, government actions, public interest issues, and constitutional interpretation, often challenging laws or policies before higher courts for legal protection.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/6.png" alt="" />
        <h5>Auditing and Compliance</h5>
        <p>Ensures businesses follow financial, regulatory, and operational standards through systematic audits, risk assessments, internal controls, and compliance frameworks to prevent violations and improve governance.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/a52Ms9HT.jpg" alt="" />
        <h5>Accounts and Financial Reporting</h5>
        <p>Prepares, analyzes, and presents accurate financial statements, maintaining transparency, supporting decision-making, ensuring statutory compliance, and reflecting the organization s financial health and performance.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/5.png" alt="" />
        <h5>Tax Planning</h5>
        <p>Strategically structures transactions and finances to minimize tax liability legally, enhance savings, ensure compliance, and optimize overall financial efficiency for individuals and businesses.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/istockphoto-1141421616-612x612.jpg" alt="" />
        <h5>Company Retainers</h5>
        <p>Provides ongoing legal or professional support to companies through monthly or annual retainers, covering advisory services, compliance assistance, documentation, and representation as needed.</p>
    </div>
    <div className={styles.card}>
        <img src="/images/practice/7.png" alt="" />
        <h5>Intellectual Property Law</h5>
        <p>Evaluates, protects, and leverages intellectual capital, preserving market position, enabling secure collaboration, ensuring regulatory adherence, and reflecting the organization's commitment to innovation and proprietary rights.</p>
    </div>
    


   </div>
   </div>

    {/* FOOTER STARTS HERE  */}
   
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
    )
};
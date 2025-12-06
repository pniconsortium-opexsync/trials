"use client"
import styles from './service.module.css'
import Link from "next/link"
import { useState } from 'react';




export default function Page() {

  const [open, setOpen] = useState(false);

  return (
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
        <h3>Our Services</h3>
        <p>Comprehensive professional solutions tailored to support business growth, legal compliance, financial management, and strategic decision-making effectively.</p>
        {/* </div> */}
       
      </div>

      <div className={styles.service}>
        <div className={styles.servicewrapper}>
          <div className={styles.servicewrap}>
            <div className={styles.serviceimageplacerone}>
            </div>
            <h4>Legal Services</h4>
            <ul>
              <li>Dispute Resolutions</li>
              <li>Arbitration</li>
              <li>Corporate & Business Law</li>
              <li>Contract & Documentation</li>
              <li>Tax litigations</li>
            </ul>
          </div>
          <div className={styles.servicewrap}>
            <div className={styles.serviceimageplacertwo}>
            </div>
            <h4>Accounting Services</h4>
            <ul>
              <li>GST Services</li>
              <li>Accounting, Book Keeping, Tax Services</li>
              <li>Income Tax Services</li>
              <li>Company corporation services</li>
              <li>Partnership Firm corporation services</li>
              <li>Sole Proprietorship</li>
            </ul>
          </div>
          <div className={styles.servicewrap}>
            <div className={styles.serviceimageplacerthree}>
            </div>
            <h4>CA Services</h4>
            <ul>
              <li>Auditing</li>
              <li>Internal & Statutory Audit</li>
              <li>Stock Audit</li>
              <li>Tax Planning</li>
              <li>Tax Consultancy</li>
              <li>Asset Certification</li>
            </ul>
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
  );
}
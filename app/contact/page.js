"use client"
import styles from './contact.module.css'
import Link from 'next/link'
import { useState } from 'react'


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
        <h3>Contact Us</h3>
        <p className={styles.contactmobile}>Reach our team for consultations, inquiries, appointments, or customized professional assistance across all service lines.</p>
        <p className={styles.contactlaptop}>Get in touch for consultations, inquiries, or support.</p>
        {/* </div> */}
       
      </div>

      <div className={styles.contactdetails}>
        <div className={styles.contactdetailswrapper}>
            <div className={styles.contactdetailswrap}>
                <img src="/images/contact/Maps Icon.svg" alt="" />
                <h3>Visit Our Office</h3>
                <p> Palleri Mana Building, Ernakulam Road, Aluva - 1</p>
            </div>
            <div className={styles.contactdetailswrap}>
                <img src="/images/contact/Phone Icon.svg" alt="" />
                <h3>Call Us</h3>
                <p>+91 94000 95966</p>
                <p id={styles.two}>+91 94473 96577</p>
                <p id={styles.three}>+91 94475 10042</p>
            </div>
            <div className={styles.contactdetailswrap}>
                <img src="/images/contact/Email Icon.svg" alt="" />
                <h3>E-Mail Us</h3>
                 <a href="mailto:adv.hrithwikdn@gmail.com"><p>adv.hrithwikdn@gmail.com</p></a>
                 <a href="mailto:adv.hrithwikdn@gmail.com"><p id={styles.four}>Namboothiri_pnd@yahoo.co.in</p></a>
                <p id={styles.monday}>We will respond within 24 hours</p>
            </div>
            <div className={styles.contactdetailswrap}>
                <img src="/images/contact/Time Icon.svg" alt="" />
                 <h3>Business Hours</h3>
                <p>Mon - Fri</p>
                <p id={styles.time}> 9 : 00 AM - 8 : 00 PM</p>
                <p id={styles.preffer}>Consultation - Preferred Appointments</p>
                
            </div>
        </div>
      </div>
<div className={styles.mapcontainerwrapper}>
   <a
  href="https://www.google.com/maps/place/Namboothiri+and+AssociateS/@10.10448,76.350846,17z"
  target="_blank"
  rel="noopener noreferrer"
  style={{ textDecoration: "none" }}
>
  <div className={styles.mapwrap} style={{ cursor: "pointer" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5068.46705411454!2d76.35084619999999!3d10.104479900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080f11b1c687b1%3A0x425569ea3734c492!2sNamboothiri%20and%20AssociateS!5e1!3m2!1sen!2sin!4v1764919042037!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</a>
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

        </div> //THIS IS MAIN BODY
    )
};
"use client"
import styles from './blogone.module.css'
import Link from 'next/link'
import { useState } from 'react';

export default function Page(){

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





      {/* BLOGS SECTION STARTS HERE */}


<div className={styles.blogs}>
  <div className={styles.blogone}>
  <h4>Expiry of E-Way Bill Alone Cannot Justify Maximum GST Penalty: Kerala High Court in TP Metals Case</h4>
  <p>The Kerala High Court, in a significant judgment delivered by Justice Gopinath P. on 30 July 2024, has held that mere expiry of an e-way bill, without any intention to evade tax, cannot automatically attract the harsh penalties prescribed under Section 129 of the CGST/SGST Acts. Advocates P N Damodaran Namboothiri & Hrithwik D Namboothiri appeared for the petitioner, while Spl. Govt. Pleader Muhammed Rafiq & Jasmine appeared for the State respondents. The ruling came in <b>2025 (143) GSTR 710 (Ker) M/s TP Metals & Roofings v. Assistant Tax Officer & Others</b> (WP(C) No. 26645 of 2021). <br /> <br />
Facts of the Case <br /> <br />
TP Metals & Roofings, a registered GST dealer engaged in the sale of roofing sheets and pipes, transported goods worth over ₹10.46 lakh from Kozhikode to Palakkad under a valid tax invoice and e-way bill. The e-way bill was generated at 10:00 PM on 23.10.2021 and expired at 10:00 PM on 24.10.2021. <br />
The vehicle was intercepted by the GST Mobile Squad at 9:59 AM on 25.10.2021, after the expiry of the e-way bill and beyond the time allowed for extension. Proceedings were initiated under Section 129 of the CGST/SGST Acts, and a tax and penalty amounting to ₹3,76,824 was imposed. <br /> <br />
Issue Before the Court <br /> <br />
The central issue was whether expiry of an e-way bill by itself, in the absence of any finding of tax evasion, justified the imposition of maximum penalty under Section 129, or whether the case warranted only a minor penalty under Section 122(1)(xiv) for procedural lapse. <br /> <br />
Key Findings of the High Court <br /> <br />
The Court made several important observations: <br /> <br />
•	Technical violation admitted: The Court accepted that there was a technical violation, as the e-way bill had expired and was not extended in time. <br />
•	No intent to evade tax: Crucially, the Court noted that there was no finding by the authorities that the petitioner intended to evade tax. <br />
•	Section 129 is not automatic in all cases: While Section 129 begins with a non-obstante clause, it must be read harmoniously with Sections 122 and 126 of the CGST/SGST Acts. <br />
•	Penalty must be proportionate: The Court held that imposing maximum penalty for a mere procedural lapse would be arbitrary, disproportionate, and violative of Article 14 of the Constitution. <br /> <br />
Reliance on Judicial Precedents <br /> <br />
The Court relied on and reaffirmed principles laid down in: <br /> <br />
•	Hindustan Steel Ltd. v. State of Orissa – penalty is not automatic for technical or venial breaches. <br />
•	Podaran Foods India Pvt. Ltd. v. State of Kerala – detention is justified only when there is a possibility of tax evasion. <br />
•	Satyam Shivam Papers Pvt. Ltd. v. Assistant Commissioner (Telangana High Court), affirmed by the Supreme Court. <br />
•	Sanskruthi Motors v. Joint Commissioner, upheld by the Kerala High Court Division Bench. <br /> <br />
Final Decision <br /> <br />
The High Court: <br /> <br />
•	Quashed the order imposing tax and penalty under Section 129. <br />
•	Held that Section 129 penalties can be imposed only when there is intent to evade tax, repeated violations, or serious discrepancies. <br />
•	Directed that only a penalty of ₹10,000 under Section 122(1)(xiv) (for transport without proper documents) could be imposed. <br />
•	Ordered release of the bank guarantee furnished by the petitioner upon payment of the reduced penalty. <br /> <br />
Legal Significance of the Judgment <br /> <br />
This judgment is a major relief for businesses and transporters facing detention and heavy penalties for minor procedural lapses under GST. It clearly establishes that: <br /> <br />
•	Expiry of an e-way bill is not, by itself, proof of tax evasion. <br />
•	GST authorities must apply judicial discretion and proportionality. <br />
•	Section 129 is meant to curb evasion, not to punish bonafide transactions with harsh penalties. <br /> <br />
Conclusion <br /> <br />
The TP Metals judgment reinforces the principle that GST enforcement must be fair, reasonable, and aligned with the object of preventing tax evasion, not mechanical or punitive. It provides strong legal backing for challenging excessive penalties imposed solely on technical grounds and serves as an important precedent in GST litigation.
</p>
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

        </div> //THIS IS MAIN BODY
    )
}
    

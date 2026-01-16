"use client"
import styles from './blogtwo.module.css'
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
  <h4>GST Adjudication under Scrutiny: Kerala High Court Quashes Order for Violation of Natural Justice.</h4>
  <p>Personal hearing cannot be illusory, and vague show cause notices cannot sustain penal GST adjudication <br /> <br />
Ridha Polymers v. State of Kerala & Ors. <br /> <br />
WP(C) No. 17324 of 2025 | 2025 KER 83772 (2025 KHC Online 2272) <br /><br />
Decision dated: 5 November 2025 <br /> <br />
Coram: Justice Ziyad Rahman A.A. <br /> <br />

Background of the Case <br /> <br />
M/s. Ridha Polymers, a registered dealer under the CGST/KSGST Acts, challenged an Order-in-Original (Ext. P5) passed under Section 74 of the CGST/KSGST Act, 2017 for the assessment year 2017–18. The impugned order rejected the petitioner’s claim for input tax credit (ITC) and was passed pursuant to a show cause notice dated 05.08.2024. <br />
 <br />

The petitioner contended that although a detailed written reply had been submitted to the show cause notice, the objections raised therein were summarily rejected. Aggrieved by the rejection of ITC and the manner in which the proceedings were conducted, the petitioner approached the High Court under Article 226 of the Constitution of India. Sri. A. Kumar, Senior Advocate as instructed by Sri. P. N. Damodaran Namboodiri, Advocate appears for the petitioner while Govt. Pleader Sri. Arun Ajai Sankar appears for the State. <br /> <br />
<b>Core Issues Raised</b>
<br /> <br /> 
The writ petition primarily raised two substantial procedural infirmities: <br /> <br />
1.	Denial of Effective Personal Hearing – The petitioner alleged that when its authorised representative appeared for personal hearing, he was directed to make submissions before a clerk/subordinate officer instead of the adjudicating authority, and that no meaningful hearing was conducted by the State Tax Officer. <br /> <br /> 
2.	Vagueness of the Show Cause Notice – It was contended that the show cause notice invoking Section 74 was vague and did not disclose specific reasons or detailed allegations justifying denial of ITC, thereby disabling the petitioner from effectively defending the proceedings. <br /> <br /> <br />
<b>Department Argument</b> <br /> <br /> 
The State Tax Officer, in the counter affidavit, admitted that the authorised representative was initially directed to appear before an Assistant State Tax Officer for verification of documents. However, it was asserted that thereafter the petitioner was duly heard by the adjudicating authority and that no violation of natural justice had occurred. <br /> <br /> 

<b>Findings of the High Court</b> <br /><br />
After hearing both sides, the Court closely examined the affidavit sworn by the authorised representative of the petitioner, a Cost Accountant, detailing the events during the personal hearing. The Court observed that: <br /> <br />
•	When a professional swears an affidavit explaining what transpired during adjudication proceedings, such statements cannot be lightly ignored, especially when the department itself admits that the representative was first sent to a subordinate officer. <br />
•	Even assuming document verification was required, the procedure adopted created a serious doubt as to whether an effective and meaningful hearing was actually afforded by the adjudicating authority. <br /> <br /> <br />
On the issue of the show cause notice, the Court found merit in the petitioner’s contention that: <br /> <br />
•	While the impugned order (Ext. P5) contained detailed allegations, the show cause notice (Ext. P2) lacked sufficient particulars justifying invocation of Section 74. <br />
•	Absence of clear and specific allegations at the show cause stage amounts to procedural unfairness, as it deprives the assessee of a proper opportunity to meet the case against it. <br /> <br />
<b>Decision</b> <br /> <br />
In view of the above, the High Court held that there was a violation of the principles of natural justice on two counts: <br /> <br />
•	Failure to afford a proper personal hearing, and <br />
•	Issuance of a vague and deficient show cause notice. <br /> <br /> <br />
Accordingly, the Court: <br /> <br />
•	Quashed the Order-in-Original (Ext. P5); <br />
•	Directed the 3rd respondent State Tax Officer to reconsider the matter afresh; <br />
•	Mandated that the petitioner be given a proper opportunity of personal hearing; <br />
•	Permitted the petitioner to produce additional documents in support of its claim; and <br />
•	Directed that a fresh order be passed within three months from the date of receipt of the judgment. <br /> <br />

Significance of the Judgment <br /> <br />
This judgment reiterates a consistent line of authority from the Kerala High Court that GST adjudication proceedings must strictly adhere to the principles of natural justice. The decision underscores that: <br /> <br />
•	Personal hearing cannot be reduced to a mere formality; <br />
•	Delegation of hearing to clerical or subordinate staff is impermissible; <br />
•	Show cause notices invoking penal provisions such as Section 74 must clearly spell out the factual and legal basis of allegations. <br /> <br />
For GST practitioners and assessees alike, the ruling serves as a reminder that procedural safeguards remain integral even in tax administration. <br /> <br />
Appearance of Counsel <br /> <br />
For the Petitioner: <br />
•	Sri. A. Kumar, Senior Advocate <br />
•	Sri. P. N. Damodaran Namboodiri, Advocate <br />
•	Sri. Hrithwik D. Namboothiri, Advocate <br /> <br />
For the Respondents: <br />
•	Sri. Arun Ajay Shankar, Government Pleader <br />
•	Smt. Preetha S. Nair, Advocate (For 4th respondent) <br /> <br />
________________________________________
Citation: 2025:KER:83772
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
    

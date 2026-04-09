import React from 'react'
import styles from './ContactForm.module.css' 
import contactImage from '../../assets/Service 24_7-pana 1.svg'
import Button from '../button/button'
import contactForm from './ContactForm.module.css'
import { MdCall, MdMessage } from 'react-icons/md'


const ContactForm = () => {

const handleCall =()=>{
  console.log("Call button clicked");
}

const handleChat =()=>{
  console.log("Chat button clicked");
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(e)
  console.log("Form submitted");
}



  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_Btn}> 
          <Button onClick={handleChat} text="VIA SUPPORT CHAT" icon= {<MdMessage />} />
          <Button onClick={handleCall} text="VIA CALL" icon = {<MdCall />} />
        </div>

        <div className={styles.secondary_Btn}>
          <Button 
          isSecondary_Btn = {true}
          text="VIA EMAIL FORM"
          icon= {<MdMessage />} />
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows={8}/>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Button text="SUBMIT" icon= {<MdMessage />} />
          </div>

        </form>

      </div>
    <div className={styles.contactImage}><img src={contactImage} alt="Contact" /></div>
    </section>
  )
} 

export default ContactForm

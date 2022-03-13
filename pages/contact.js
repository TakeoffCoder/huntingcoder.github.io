/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
      })
    alert(" Thanks for contacting us");
    setname('')
    setemail('')
    setphone('')
    setdesc('')
  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }
  return <div className={styles.container}>
    <h1>Contact Us</h1>
    <div className={styles.body}>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input  type="text" value={name} onChange={handleChange} className="name" id="name" name='name' aria-describedby="emailHelp" required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input  type="email" value={email} onChange={handleChange} className="email" id="email" name='email' aria-describedby="emailHelp " required />
          <div id="emailHelp" className={styles.formtext}>We`ll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone Number</label>
          <input className={styles.input} type="phone" value={phone} onChange={handleChange} className="phone" id="phone" name='phone' required />
        </div>

        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Elaborate your concern</label>
          <textarea className={styles.input} value={desc} onChange={handleChange} className="form-control" placeholder="Write your concern here" name='desc' id="desc" required />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  </div>;
};

export default Contact;
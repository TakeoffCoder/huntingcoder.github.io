import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return <div className={styles.container}>
    <h1 className={styles.center}> About Hunting Coder </h1>
    <h2>Introducton</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed molestiae aliquam, earum, magnam molestias adipisci tempore labore maiores aperiam, provident consequuntur aspernatur amet hic esse. Veritatis, optio laborum aspernatur vel consequatur asperiores qui temporibus distinctio magnam atque culpa ducimus mollitia quas assumenda.</p>
    <h2>Services offered</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima sapiente voluptatem fuga enim recusandae. Excepturi iste error alias mollitia?</p>
   <p>We offer the following Services</p>
   <ul>
     <li>Service 1</li>
     <li>Service 2</li>
     <li>Service 3</li>
     <li>Service 4</li>
     <li>Service 5</li>
     <li>Service 6</li>
     <li>Service 7</li>
   </ul>
    <h2>Contact us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In perspiciatis, quisquam illo fugit unde porro.</p>
  </div>;
};

export default About;
import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:jayrajsharma9948@email.com">jayrajsharma9948@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jayraj-sharma-0b643b277">linkedin.com/JAYRAJ SHARMA</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/instagram.png")} alt="Github icon" />
          <a href="https://www.instagram.com/jayraj.code">Instagram.com/jayraj.code</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/jayraj1750">github.com/jayraj1750</a>
        </li>
      </ul>
    </footer>
  );
};

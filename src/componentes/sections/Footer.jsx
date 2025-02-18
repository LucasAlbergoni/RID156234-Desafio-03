import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

function Footer() {
  return (
    <container id="Footer" className={styles.footer}>
      <div>
        <ul>
          <li>
            Meu Contato:
            <br />
            (43) 9 96686972
          </li>
          <li>
            Email:
            <br />
            lucas.albergoni@gmail.com
          </li>
        </ul>
      </div>
      <aside>
        <ul>
          <li>
            <a href="https://github.com/LucasAlbergoni" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lucasalbergoni/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=1-190&t=nU4K6B1EHDFP9p5W-0"
              target="_blank"
            >
              <FaFigma size={30} />
            </a>
          </li>
        </ul>
      </aside>
    </container>
  );
}

export default Footer;

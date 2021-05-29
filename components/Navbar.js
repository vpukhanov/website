import {
  faMicroblog,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.container}>
      <div>
        <a href="/" className={styles.navLink}>
          <h1 className="text-title">Vyacheslav Pukhanov</h1>
        </a>
      </div>
      <div className={styles.rightSide}>
        <a
          href="https://blog.pukhanov.ru"
          title="Blog"
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faMicroblog} />
          <span className="visible-hidden">Blog</span>
        </a>
        <a
          href="https://github.com/vpukhanov"
          title="Github"
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faGithub} />
          <span className="visible-hidden">Github</span>
        </a>
        <a
          href="https://instagram.com/vpukhanov"
          title="Instagram"
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faInstagram} />
          <span className="visible-hidden">Instagram</span>
        </a>
      </div>
    </nav>
  );
}

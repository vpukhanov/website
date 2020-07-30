import {
  faMicroblog,
  faGithub,
  faTwitter,
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
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faMicroblog} />
          <span className="visible-hidden">Blog</span>
        </a>
        <a
          href="https://github.com/vpukhanov"
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faGithub} />
          <span className="visible-hidden">Github</span>
        </a>
        <a
          href="https://twitter.com/vpukhanov"
          target="_blank"
          rel="noopener"
          className={[styles.navIcon, styles.navLink].join(" ")}
        >
          <FontAwesomeIcon icon={faTwitter} />
          <span className="visible-hidden">Twitter</span>
        </a>
        <a
          href="https://instagram.com/vpukhanov"
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

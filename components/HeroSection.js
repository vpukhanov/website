import Image from "next/image";

import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/avatar.jpg"
          width={196}
          height={196}
          placeholder="blur"
          alt="Vyacheslav Pukhanov"
        />
      </div>
      <div className={styles.textContainer}>
        <p className="text-title">
          Hey there, I'm&nbsp;Vyacheslav&nbsp;Pukhanov&nbsp;👋🏻
        </p>
        <p className="text-title">
          I'm a professional web developer (mainly frontend) and a hobbyist
          mobile developer
        </p>
        <p className="text-title">
          I have also contributed to{" "}
          <a
            href="https://github.com/microsoft/TypeScript"
            target="_blank"
            rel="noopener"
          >
            TypeScript
          </a>
        </p>
      </div>
    </section>
  );
}

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p className="text-title">
        I'm always up for a dicussion,{" "}
        <a href="mailto:vyacheslav@pukhanov.ru">drop me a line</a>
      </p>
    </footer>
  );
}

import Image from 'next/image'

import styles from '../styles/HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='/avatar.jpg'
          width={128}
          height={128}
          placeholder='blur'
          alt='Vyacheslav Pukhanov'
        />
      </div>
      <div className={styles.textContainer}>
        <p className='text-title'>
          Hey there, I'm&nbsp;Vyacheslav&nbsp;Pukhanov&nbsp;👋🏻
        </p>
        <p className='text-title'>
          I'm a senior frontend engineer and a hobbyist iOS developer
        </p>
      </div>
    </section>
  )
}

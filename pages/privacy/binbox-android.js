import Head from 'next/head'
import CommonHead from '../../components/CommonHead'

export default function BinboxAppPrivacyPolicy() {
  return (
    <div className='app-container'>
      <Head>
        <title>Binbox App Privacy Policy | Vyacheslav Pukhanov</title>
        <meta name='description' content='Privacy Policy for Binbox Android' />
        <CommonHead />
      </Head>
      <section className='privacy-en'>
        <h1 className='text-title'>Privacy Policy</h1>
        <p className='text-body'>
          Vyacheslav Pukhanov built the Binbox app as an Ad Supported app. This
          SERVICE is provided by Vyacheslav Pukhanov at no cost and is intended
          for use as is. This page is used to inform visitors regarding my
          policies with the collection, use, and disclosure of Personal
          Information if anyone decided to use my Service. If you choose to use
          my Service, then you agree to the collection and use of information in
          relation to this policy. The Personal Information that I collect is
          used for providing and improving the Service. I will not use or share
          your information with anyone except as described in this Privacy
          Policy.
        </p>
        <h2 className='text-subtitle'>Information Collection and Use</h2>
        <p className='text-body'>
          For a better experience, while using our Service, I may require you to
          provide us with certain personally identifiable information. The app
          does use third party services that may collect information used to
          identify you. Links to privacy policies of third party service
          providers used by the app:
        </p>
        <ul>
          <li>
            <a
              href='https://www.google.com/policies/privacy/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a
              href='https://support.google.com/admob/answer/6128543?hl=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              AdMob
            </a>
          </li>
          <li>
            <a
              href='https://firebase.google.com/policies/analytics'
              target='_blank'
              rel='noopener noreferrer'
            >
              Google Analytics for Firebase
            </a>
          </li>
          <li>
            <a
              href='https://firebase.google.com/support/privacy/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Firebase Crashlytics
            </a>
          </li>
        </ul>
        <h2 className='text-subtitle'>
          I have more questions, how do I reach out to you?
        </h2>
        <p className='text-body'>
          You can{' '}
          <a href='mailto:vyacheslav@pukhanov.ru'>contact me by email</a>, or
          reach out to me on Twitter{' '}
          <a href='https://twitter.com/vpukhanov'>@vpukhanov</a>.
        </p>
        <p className='text-body text-sublime'>
          <em>Last update: September 26, 2021</em>
        </p>
      </section>
    </div>
  )
}

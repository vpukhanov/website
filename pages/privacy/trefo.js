import Head from 'next/head'
import CommonHead from '../../components/CommonHead'

export default function TrefoAppPrivacyPolicy() {
  return (
    <div className='app-container'>
      <Head>
        <title>Trefo Privacy Policy | Vyacheslav Pukhanov</title>
        <meta name='description' content='Privacy Policy for Trefo app' />
        <CommonHead />
      </Head>
      <section className='privacy-en' style={{ maxWidth: 600 }}>
        <h1 className='text-title'>Privacy Policy</h1>
        <h2 className='text-subtitle'>✅ Privacy First</h2>
        <ul className='text-body'>
          <li>All of your personal info stays on your device</li>
          <li>The app works completely offline</li>
        </ul>
        <h2 className='text-subtitle'>🤖 TelemetryDeck</h2>
        <p className='text-body'>
          Trefo uses TelemetryDeck to understand how users use the app so that
          we can improve commonly used functionality, make it easier to use and
          discover. TelemetryDeck does not have access to any personal user
          information and uses anonymous identifiers not linked to your
          identity.
        </p>
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
          <em>Last update: January 3, 2022</em>
        </p>
      </section>
    </div>
  )
}

import Head from 'next/head'
import CommonHead from '../../components/CommonHead'

export default function BinboxAppPrivacyPolicy() {
  return (
    <div className='app-container'>
      <Head>
        <title>Binbox App Privacy Policy | Vyacheslav Pukhanov</title>
        <meta name='description' content='Privacy Policy for Binbox' />
        <CommonHead />
      </Head>
      <section className='privacy-en'>
        <h1 className='text-title'>Privacy Policy</h1>
        <h2 className='text-subtitle'>What data do you collect?</h2>
        <p className='text-body'>
          When you create a new inbox inside the app, it is created on the
          Binbox server and is stored there. We never read or access the
          information in your inbox for any reason other than delivering it to
          your device when you open your inbox.
        </p>
        <h2 className='text-subtitle'>Does anyone else access my inbox?</h2>
        <p className='text-body'>
          When a new inbox is created, new email and password are generated on
          the Binbox server. After your device receives the password, it is
          removed from the server within a short period of time. Only the
          securely hashed version of the password is preserved on the server for
          the purposes of authentication.
        </p>
        <p className='text-body'>
          This means that accessing your inbox should not be possible, unless
          someone gets access to your device or somehow extracts the password
          from your device.
        </p>
        <h2 className='text-subtitle'>
          What data do you use to link my device to my inboxes?
        </h2>
        <p className='text-body'>
          We actually do not link users with inboxes at all. When you create a
          new inbox, its generated credentials are stored on your device (and
          potentially iCloud) and they're the only thing used to access the
          inbox. No additional data is used to link users to inboxes.
        </p>
        <h2 className='text-subtitle'>
          How do I remove my data from your service?
        </h2>
        <p className='text-body'>
          If you want to delete the contents of your inbox, simply delete that
          inbox from your device. Its contents will then be removed from the
          server during regular maintenance. This inbox could not be accessed by
          any users while it's pending deletion.
        </p>
        <h2 className='text-subtitle'>How do you track my subscriptions?</h2>
        <p>
          Subscriptions are tracked using a unique identifier not linked to your
          identity. The events of subscribing, renewal or cancelling the
          subscription are processed by RevenueCat for the purposes of analytics
          only.
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
          <em>Last update: April 14, 2021</em>
        </p>
      </section>
    </div>
  )
}

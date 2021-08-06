import Head from "next/head";
import CommonHead from "../../components/CommonHead";

export default function UnidueAppPrivacyPolicy() {
  return (
    <div className="app-container">
      <Head>
        <title>Unidue Privacy Policy | Vyacheslav Pukhanov</title>
        <meta
          name="description"
          content="Privacy Policy for the Stops: Yaroslavl's Transport app"
        />
        <CommonHead />
      </Head>
      <section className="privacy-en" style={{ maxWidth: 600 }}>
        <h1 className="text-title">✅ Privacy First</h1>
        <ul className="text-body">
          <li>All of your info stays on your device</li>
          <li>The app works completely offline</li>
          <li>
            If you have iCloud sync enabled, synchronisation is handled by
            Apple's iCloud itself, with no direct developer access
          </li>
        </ul>
        <h2>🐱 RevenueCat</h2>
        <p className="text-body">
          Unidue uses RevenueCat to verify App Store receipts, process in-app
          purchases, and restore previous purchases. RevenueCat does not have
          access to any personal user information.
        </p>
      </section>
    </div>
  );
}

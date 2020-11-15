import GoogleFonts from "next-google-fonts";
import Head from "next/head";
import CommonHead from "../../components/CommonHead";

export default function UnidueAppPrivacyPolicy() {
  return (
    <div className="app-container">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
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
      </section>
    </div>
  );
}

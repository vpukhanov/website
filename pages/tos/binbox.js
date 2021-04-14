import GoogleFonts from "next-google-fonts";
import Head from "next/head";
import CommonHead from "../../components/CommonHead";

export default function BinboxAppTermsOfService() {
  return (
    <div className="app-container">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      <Head>
        <title>Binbox App Terms of Service | Vyacheslav Pukhanov</title>
        <meta name="description" content="Terms of Service for Binbox" />
        <CommonHead />
      </Head>
      <section className="privacy-en">
        <h1 className="text-title">Terms of Service</h1>
        <p className="text-body">
          The Binbox app is a copyrighted work belonging to Vyacheslav Pukhanov
          (the Developer). Certain features of the App may be subject to
          additional guidelines, terms, or rules, which will be posted on this
          page in connection with such features.
        </p>
        <p className="text-body">
          These Terms of Use describe the legally binding terms and conditions
          that oversee your use of the App. BY USING THE APP, YOU ARE BEING
          COMPLIANT THAT THESE TERMS and you represent that you have the
          authority and capacity to enter into these Terms. YOU SHOULD BE AT
          LEAST 18 YEARS OF AGE TO ACCESS THE APP. IF YOU DISAGREE WITH ANY OF
          THE PROVISIONS OF THESE TERMS, DO NOT USE THE APP.
        </p>
        <h2 className="text-subtitle">Access to the App</h2>
        <p className="text-body">
          <b>Subject to these Terms.</b> Developer grants you a
          non-transferable, non-exclusive, revocable, limited license to access
          the App solely for your own personal, noncommercial use.
        </p>
        <p className="text-body">
          <b>Certain Restrictions.</b> The rights approved to you in these Terms
          are subject to the following restrictions: (a) you shall not sell,
          rent, lease, transfer, assign, distribute, host, or otherwise
          commercially exploit the App; (b) you shall not change, make
          derivative works of, disassemble, reverse compile or reverse engineer
          any part of the App; (c) you shall not access the App in order to
          build a similar or competitive website; and (d) except as expressly
          stated herein, no part of the App may be copied, reproduced,
          distributed, republished, downloaded, displayed, posted or transmitted
          in any form or by any means unless otherwise indicated, any future
          release, update, or other addition to functionality of the App shall
          be subject to these Terms. All copyright and other proprietary notices
          on the App must be retained on all copies thereof.
        </p>
        <p className="text-body">
          Developer reserves the right to change, suspend, or cease the App with
          or without notice to you. You approved that Developer will not be held
          liable to you or any third-party for any change, interruption, or
          termination of the App or any part.
        </p>
        <p className="text-body">
          <b>No Support or Maintenance.</b> You agree that Developer will have
          no obligation to provide you with any support in connection with the
          Site.
        </p>
        <h2 className="text-subtitle">Disclaimers</h2>
        <p className="text-body">
          The App is provided on an “as-is” and “as available” basis, and
          Developer expressly disclaims any and all warranties and conditions of
          any kind, whether expressed, implied, or statutory, including all
          warranties or conditions of merchantability, fitness for a particular
          purpose, title, quiet enjoyment, accuracy, or non-infringement. We
          make not guarantee that the App will meet your requirements, will be
          available on an uninterrupted, timely, secure, or error-free basis, or
          will be accurate, reliable, free of viruses or other harmful code,
          complete, legal, or safe. If applicable law requires any warranties
          with respect to the site, all such warranties are limited in duration
          to ninety (90) days from the date of first use.
        </p>
        <p className="text-body">
          Some jurisdictions do not allow the exclusion of implied warranties,
          so the above exclusion may not apply to you. Some jurisdictions do not
          allow limitations on how long an implied warranty lasts, so the above
          limitation may not apply to you.
        </p>
        <h2 className="text-subtitle">Limitation on Liability</h2>
        <p className="text-body">
          To the maximum extent permitted by law, in no event shall the
          developer be liable to you or any third-party for any lost profits,
          lost data, costs of procurement of substitute products, or any
          indirect, consequential, exemplary, incidental, special or punitive
          damages arising from or relating to these terms or your use of, or
          incapability to use the App even if the Developer has been advised of
          the possibility of such damages. Access to and use of the App is at
          your own discretion and risk, and you will be solely responsible for
          any damage to your device or computer system, or loss of data
          resulting therefrom.
        </p>
        <p className="text-body">
          To the maximum extent permitted by law, notwithstanding anything to
          the contrary contained herein, our liability to you for any damages
          arising from or related to this agreement, will at all times be
          limited to a maximum of fifty U.S. dollars (u.s. $50). The existence
          of more than one claim will not enlarge this limit.
        </p>
        <p className="text-body">
          Some jurisdictions do not allow the limitation or exclusion of
          liability for incidental or consequential damages, so the above
          limitation or exclusion may not apply to you.
        </p>
        <p className="text-body text-sublime">
          <em>Last update: April 14, 2021</em>
        </p>
      </section>
    </div>
  );
}

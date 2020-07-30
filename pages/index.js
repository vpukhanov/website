import GoogleFonts from "next-google-fonts";
import Head from "next/head";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PersonalProjects from "../components/PersonalProjects";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="app-container">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      <Head>
        <title>Vyacheslav Pukhanov</title>
        <meta name="charset" content="utf-8" />
        <meta
          name="description"
          content="Vyacheslav Pukhanov is a professinal web developer and a hobbyist mobile developer based in Yaroslavl, Russia"
        />
        <link rel="icon" href={"/favicon.ico"} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"/apple-touch-icon.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"/favicon-16x16.png"}
        />
        <link rel="manifest" href={"/site.webmanifest"} />
        <link rel="mask-icon" href={"/safari-pinned-tab.svg"} color="#070798" />
        <meta name="msapplication-TileColor" content="#070798" />
        <meta name="theme-color" content="#070798" />
      </Head>

      <Navbar />
      <main>
        <HeroSection />
        <WorkExperience />
        <Education />
        <PersonalProjects />
      </main>
      <Footer />
    </div>
  );
}

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

import GoogleFonts from "next-google-fonts";
import Head from "next/head";

import CommonHead from "../components/CommonHead";
import Education from "../components/Education";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import PersonalProjects from "../components/PersonalProjects";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="app-container">
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      <Head>
        <title>Vyacheslav Pukhanov</title>
        <meta
          name="description"
          content="Vyacheslav Pukhanov is a professinal web developer and a hobbyist mobile developer based in Yaroslavl, Russia"
        />
        <CommonHead />
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

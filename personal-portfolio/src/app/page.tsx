'use client'
import Image from "next/image";
import Header from "@/components/Header_Footer/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ContactUs />
      <Footer />
      {/* <h1 className="text-5xl">Hello Hassan</h1> */}
    </>
  );
}

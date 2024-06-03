'use client'
import Image from "next/image";
import Header from "@/components/Header_Footer/Header";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <h1 className="text-5xl">Hello Hassan</h1>
    </>
  );
}

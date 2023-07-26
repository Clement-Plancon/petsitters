"use client";
import "./Style/globals.scss";
import Layout from "./Components/Laoyout";
import Hero from "./Components/Hero";
import RehassuranceBar from "./Components/RehassuranceBar";
import Presentation from "./Components/Presentation";
import ModesPetSitting from "./Components/ModesPetSitting";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <RehassuranceBar />
        <Presentation />
        <ModesPetSitting />
      </Layout>
    </>
  );
}

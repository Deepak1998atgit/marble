import Image from "next/image";
import Navbar from "./components/navabar";
import HeroBanner from "./components/hero";
import SalamHero from "./components/bussiness";
import NexivoWidget from "./components/NexivoWidget";
export default function Home() {
  return (
    <>
     <Navbar/>
     <HeroBanner/>
     <NexivoWidget/>
    </>
  );
}

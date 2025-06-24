"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Sobre from "./home/Sobre";
import Projetos from "./home/Projetos";
import Agencia from "./home/Agencia";
import Header from "./home/Header";
import BackTo from "../components/backto/BackTo";

export default function Home() {
  return (
    <section className="">
      <Header />
      <Sobre />
      <Projetos />
      <Agencia />
      <BackTo />
    </section>
  );
}

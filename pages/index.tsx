import Features from "@/components/Features";
import Intro from "@/components/Intro";
import Customers from "@/components/Customers";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Handoff from "@/components/Handoff";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <AboutUs />
      <Customers />
      <Handoff />
      <Subscribe />
      <Footer />
    </>
  );
}

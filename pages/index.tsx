import Features from "@/components/Features";
import Intro from "@/components/Intro";
import Customers from "@/components/Customers";
import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Features />
      <AboutUs />
      <Customers />
      <Subscribe />
    </>
  );
}

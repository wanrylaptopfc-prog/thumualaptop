import Hero from "@/components/Hero";
import LaptopSlider from "@/components/LaptopSlider";
import PriceTable from "@/components/PriceTable";
import PriceFactors from "@/components/PriceFactors";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Categories from "@/components/Categories";
import Policies from "@/components/Policies";
import SellingTips from "@/components/SellingTips";
import FAQ from "@/components/FAQ";
import ServiceArea from "@/components/ServiceArea";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <LaptopSlider />
      <PriceTable />
      <PriceFactors />
      <Process />
      <ContactForm />
      <Categories />
      <Policies />
      <SellingTips />
      <FAQ />
      <ServiceArea />
      <ContactCTA />
      <Footer />
    </>
  );
}

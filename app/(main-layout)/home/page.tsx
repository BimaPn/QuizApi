import HeroSection from "@/components/home/HeroSection";
import QuizzesSlider from "@/components/ui/QuizzesSlider";
import Categories from "@/components/home/Categories";
import Entertainments from "@/components/home/Entertainments";
import Science from "@/components/home/Entertainments";
import Mathematics from "@/components/home/Entertainments";
import Sports from "@/components/home/Entertainments";

const page = () => {
  return (
  <>
    <HeroSection />
    <Categories />
    <Entertainments />
    <Science />
    <Sports />
    <Mathematics />
  </>
  )
}

export default page

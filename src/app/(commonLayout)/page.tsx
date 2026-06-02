import { Button } from "@/components/ui/button";
import Banners from "@/components/ui/home/banners";
import BestSeller from "@/components/ui/home/bestSeller";
import BlogSection from "@/components/ui/home/blogSection";
import Footer from "@/components/ui/home/footer";
import HomePageServices from "@/components/ui/home/services";
import CustomSlider from "@/components/ui/home/swiper";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <CustomSlider></CustomSlider>
      <HomePageServices></HomePageServices>
      <BestSeller></BestSeller>
      <Banners></Banners>
      <BlogSection></BlogSection>
      <Footer></Footer>
    </div>
  );
}

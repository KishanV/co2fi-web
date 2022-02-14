import React from "react";
import { FAQs } from "../components/molecules/faqs";
import { Footer } from "../components/molecules/footer";
import { KeyPointes } from "../components/molecules/key-points";
import { MainHero } from "../components/molecules/main-hero";
import { NavigationBar } from "../components/molecules/navigation-bar";

export default function Page() {
  return (
    <>
      <NavigationBar />
      <MainHero />
      <KeyPointes />
      <FAQs />
      <Footer />
    </>
  );
}

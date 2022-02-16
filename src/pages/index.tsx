import React from "react";
import { AccToken } from "../components/molecules/acc-token";
import { FAQs } from "../components/molecules/faqs";
import { Footer } from "../components/molecules/footer";
import { KeyPointes } from "../components/molecules/key-points";
import { LearnMore } from "../components/molecules/learn-more";
import { MainHero } from "../components/molecules/main-hero";
import { NavigationBar } from "../components/molecules/navigation-bar";
import { Tokens } from "../components/molecules/tokens";

export default function Page() {
  return (
    <>
      <NavigationBar />
      <LearnMore />
      <MainHero />
      <KeyPointes />
      <AccToken />
      <Tokens />
      <Footer />
    </>
  );
}

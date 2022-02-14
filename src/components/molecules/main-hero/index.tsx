import { Button } from "../../atoms/button";
import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";

export const MainHero = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden">
      <ContentLimiter className="relative z-10">
        <div className="flex flex-col w-100% xl:w-70% lg:w-80% mb-300 lg:mb-350 md:mb-400 gap-6 pl-60 pr-60">
          <div className="text-white text-48 mt-100">
            CO2 Finance Network Of Clean Sustainable Token
          </div>
          <div className="text-white text-18 relative">
            <div className="w-100% md:w-70%">
              CO2 Network is an institution-grade liquidity network facilitating
              professional DeFi for financial institutions and individuals to
              earn yields on their Ethereum-based digital assets.
            </div>
          </div>
          <Button className="h-40 w-fit mt-50">Contact Us</Button>
        </div>
      </ContentLimiter>
      <img
        className="absolute bottom-0 w-160% xl:100% lg:w-130%"
        src="/main-hero.svg"
      />
    </ContentHolder>
  );
};

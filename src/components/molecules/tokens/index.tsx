import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";
import keyPointsStyles from "../key-points/index.module.scss";
import styles from "./index.module.scss";

export const Tokens = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden mt-70">
      <ContentLimiter className="relative z-10 flex justify-center items-center">
        <div className="flex flex-col w-100% gap-1 text-white   mt-70 text-36">
          <div
            className={`text-1 bg-dark-l1 p-25 rounded-20 flex flex-col lg:flex-row gap-6 relative m-2`}
          >
            <div className="flex flex-col gap-5 p-25">
              <div className={"text-green flex-col text-24"}>
                Platform Token
              </div>
              <div className="text-18 text-white">
                CO2Fi operates an evolutionary uni token model, the HCO2 has two
                distinct life periods, a stacking period where yield is accrued
                in the HCO2 Token and a locking period where yield is returned
                through platform fees. This split lifecycle enables the building
                of the platform War Chest which will act as the financial
                reserve in case of a shortfall event (see white paper)
              </div>
              <div>
                <a href="https://xavier-pye.gitbook.io/co2fi.io/5.-tokenomics">
                  <div className="h-full flex-1 flex justify-start items-center text-18 text-white gap-3 text-yellow cursor-pointer">
                    See Tokenomics
                    <img className="h-17 w-17" src="/more-arrow.svg" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-col flex gap-5 md:flex-row">
              <div className="flex  flex-1 flex-col gap-5 bg-black rounded-10 p-25 ">
                <div className={"text-green flex-row flex text-24 "}>
                  <div className="flex-1">HCO2</div>
                  <img src="/tokens/hco2.svg" />
                </div>
                <div className="text-18 text-white mt-50">
                  HCO2 is a limited supply revenue token. Holder’s accrue yield
                  through staking. After the 2 year staking period, holders
                  receive platform fees through locking their tokens.
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

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
            className={`text-1  bg-dark-l1 p-25 rounded-20 flex flex-row gap-6 relative m-2`}
          >
            <div className="flex flex-col gap-5 w-140% p-25">
              <div className={"text-green flex-col text-24"}>
                Platform Token
              </div>
              <div className="text-18 text-white">
                CO2fi operates a dual token model to enable a synergistic
                ecosystem and future innovative products.
              </div>
            </div>
            <div className="flex-row flex gap-5">
              <div className="flex flex-1 flex-col gap-5 bg-black rounded-10 p-25">
                <div className={"text-green flex-row flex text-24"}>
                  <div className="flex-1">Co2Fi</div>
                  <img src="/tokens/co2fi.svg" />
                </div>
                <div className="text-18 text-white">
                  CO2fi operates a dual token model to enable a synergistic
                  ecosystem and future innovative products.
                </div>
              </div>
              <div className="flex  flex-1 flex-col gap-5 bg-black rounded-10 p-25">
                <div className={"text-green flex-row flex text-24"}>
                  <div className="flex-1">HCO2</div>
                  <img src="/tokens/hco2.svg" />
                </div>
                <div className="text-18 text-white">
                  HCO2 is paid out to platform depositors in addition to
                  interest in USDC HCO2 may be stacked in the safety module for
                  APR, and apportion of platform fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

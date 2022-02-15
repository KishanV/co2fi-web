import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";
import keyPointsStyles from "../key-points/index.module.scss";
import styles from "./index.module.scss";
export const AccToken = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden mt-70">
      <ContentLimiter className="relative z-10 flex justify-center items-center">
        <div className="flex flex-col w-80% gap-1 text-white items-center justify-center  mt-70 text-36">
          <div
            className={`${styles.fancyBorder} text-1  bg-black p-44 rounded-20 flex flex-row gap-6 relative m-2`}
          >
            <img className="h-116" src="/acc-token.svg" />
            <div className="flex flex-col gap-5">
              <div className={keyPointsStyles.fancyText + " flex-col text-24"}>
                ACC Token
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className={"flex flex-row text-18 items-center gap-3 "}>
                  <div className="bg-yellow h-8 w-8 rounded-10" />
                  <div>Deliverable</div>
                </div>
                <div className={"flex flex-row text-18 items-center gap-3 "}>
                  <div className="bg-yellow h-8 w-8 rounded-10" />
                  <div>Globla nature based projects</div>
                </div>
                <div className={"flex flex-row text-18 items-center gap-3 "}>
                  <div className="bg-yellow h-8 w-8 rounded-10" />
                  <div>Goldstandard and CLimate Action Reserve</div>
                </div>
                <div className={"flex flex-row text-18 items-center  gap-3 "}>
                  <div className="bg-yellow h-8 w-8 rounded-10" />
                  <div>ACC Token trustee in AirCarbon Exchange</div>
                </div>
                <div className={"flex flex-row text-18 items-center  gap-3 "}>
                  <div className="bg-yellow h-8 w-8 rounded-10" />
                  <div>ACC Token trustee in AirCarbon Exchange</div>
                </div>
              </div>
              <div className="h-full flex-1 flex justify-end items-center ml-20">
                <img className="h-17 w-17" src="/more-arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

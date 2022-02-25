import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";
import keyPointsStyles from "../key-points/index.module.scss";
import styles from "./index.module.scss";
export const AccToken = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden mt-70">
      <ContentLimiter className="relative z-10 flex justify-center items-center">
        <div className="flex flex-col w-100% lg:w-80% gap-1 text-white items-center justify-center  mt-70 text-36">
          <a href="https://maize-butterfly-741.notion.site/What-is-ACC-e8b84590b10e48d7abbbf6fc6c752db4">
            <div
              className={`${styles.fancyBorder} text-1  bg-black p-44 rounded-20 flex flex-col md:flex-row gap-6 relative m-2`}
            >
              <div className="flex  justify-start  items-start">
                <img className="h-100% md:h-116" src="/acc-token.svg" />
              </div>

              <div className="flex flex-col gap-5">
                <div
                  className={
                    keyPointsStyles.fancyText + " flex-col text-24 text-left"
                  }
                >
                  ACC Token
                </div>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                  <div className={"flex flex-row text-18 items-center gap-3"}>
                    <div className="bg-yellow h-8 w-8 rounded-10" />
                    <div className="flex-1">Deliverable*</div>
                  </div>
                  <div className={"flex flex-row text-18 items-center gap-3"}>
                    <div className="bg-yellow h-8 w-8 rounded-10" />
                    <div className="flex-1">Global nature based projects</div>
                  </div>
                  <div className={"flex flex-row text-18 items-center gap-3"}>
                    <div className="bg-yellow h-8 w-8 rounded-10" />
                    <div className="flex-1">
                      Credits sourced from Verra, Gold Standard and Climate
                      Action Reserve
                    </div>
                  </div>
                  <div className={"flex flex-row text-18 items-center  gap-3"}>
                    <div className="bg-yellow h-8 w-8 rounded-10" />
                    <div className="flex-1">
                      ACC Token trustee in AirCarbon Exchange
                    </div>
                  </div>
                  <div className="col-span-1 lg:col-span-2">
                    <span className="text-14 text-gray ">
                      * delivery via AirCarbon, decentralized retirement coming
                      in phase 2
                    </span>
                  </div>
                </div>
                <div className="h-full flex-1 flex justify-end items-center ml-20">
                  <img className="h-17 w-17" src="/more-arrow.svg" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

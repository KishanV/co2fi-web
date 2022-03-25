import { ContentHolder, ContentLimiter } from "../../atoms/content";
import styles from "./index.module.scss";

export const KeyPointes = () => {
  return (
    <ContentHolder className="relative text-white mt-120">
      <ContentLimiter className="relative">
        <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/deliverable-verified-carbon.svg"
            />
            <div className={`${styles.fancyText} text-24 text-center`}>
              DELIVERABLE VERIFIED CARBON
            </div>
            <div className="text-18  text-center">
              ACC Token delivery straight via AirCarbon
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/pricing-oracle.svg"
            />
            <div className={`${styles.fancyText} text-24  text-center`}>
              REAL TIME CARBON PRICING ORACLE
            </div>
            <div className="text-18  text-center">
              Pricing data pulled from DEX
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/fully-collateralize.svg"
            />
            <div className={`${styles.fancyText} text-24  text-center`}>
              FULLY COLLATERALIZE LOANS
            </div>
            <div className="text-18  text-center">
              Minimum risk for depositors
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/continuous-yield.svg"
            />
            <div className={`${styles.fancyText} text-24  text-center`}>
              CONTINUOUS YIELD
            </div>
            <div className="text-18  text-center">
              Deposits accrue USDC yield 24/7
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

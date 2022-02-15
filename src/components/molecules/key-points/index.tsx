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
            <div className={`${styles.fancyText} text-24`}>
              DELIVERABLE VERIFIED CARBON
            </div>
            <div className="text-18">
              ACC Token delivery straight from AirCarbon
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/pricing-oracle.svg"
            />
            <div className={`${styles.fancyText} text-24`}>
              REAL TIME CARBON PRICING ORACLE
            </div>
            <div className="text-18">
              Pricing data pulled from AirCarbon Exchange
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/fully-collateralize.svg"
            />
            <div className={`${styles.fancyText} text-24`}>
              FULLY COLLATERALIZE LOANS
            </div>
            <div className="text-18">
              ACC Token delivery straight from AirCarbon
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-60 w-60"
              src="key-points-icons/deliverable-verified-carbon.svg"
            />
            <div className={`${styles.fancyText} text-24`}>
              CONTINUOUS TEILD
            </div>
            <div className="text-18">Deposits accrue USDC yield 24/7</div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

import { Button } from "../../atoms/button";
import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";
import styles from "./index.module.scss";

export const MainHero = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden">
      <ContentLimiter className="relative z-10">
        <div className="flex flex-col w-100%  gap-1 pl-60 pr-60 text-white font-bold items-center justify-center mt-50 text-36">
          <div className={"text-64"}>
            CO2-Fi<span className={styles.fancyText}>nance</span>
          </div>
          <div>
            <span className={styles.fancyText}>BUY</span> CARBON
          </div>
          <div>
            <span className={styles.fancyText}>BORROW</span> CARBON
          </div>
          <div>
            <span className={styles.fancyText}>LEND</span> CARBON
          </div>
          <div className="flex flex-col gap-6 items-center mt-50 md:flex-row">
            <Button className="h-40 w-fit">Launch App</Button>
            <a href="https://xavier-pye.gitbook.io/co2fi.io/">
              <Button variant="secondary" className="h-40 w-fit">
                Documentation
              </Button>
            </a>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

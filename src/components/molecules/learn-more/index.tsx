import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { DivProps } from "../../utils";

export const LearMore = ({ ...props }: DivProps) => {
  return (
    <ContentHolder className="relative z-0 overflow-hidden">
      <ContentLimiter className="relative z-10">
        <div className="flex flex-col w-100% gap-1 pl-60 pr-60 text-white items-center justify-center  mt-70 text-36 ">
          <div
            className={"text-18 border border-gray bg-dark-l1 p-20 rounded-10"}
          >
            <div className="flex flex-row justify-center items-center">
              <div className="flex-col">
                You can Buy Co2Fi and ACC Token Via Sushi swap on polygone(L2)
                <br />
                <span className="text-14 text-gray">
                  Click to learn more for more step by step instructions
                </span>
              </div>
              <div className="h-full flex-1 flex justify-center items-center ml-20">
                <img className="h-17 w-17" src="/more-arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

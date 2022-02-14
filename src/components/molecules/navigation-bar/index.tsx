import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { Button } from "../../atoms/button";
import { DivProps } from "../../utils";

export const NavigationBar = ({ ...props }: DivProps) => {
  return (
    <ContentHolder>
      <ContentLimiter>
        <div className="flex h-54 w-full mt-46 z-10">
          <div className="flex-shrink flex items-center justify-center">
            <img src="logo.svg" />
          </div>
          <div className="flex-1"></div>
          <div className="flex-shrink flex items-center justify-center font-semibold text-white gap-10">
            <div>About</div>
            <div>FAQs</div>
            <div>White Paper</div>
            <div>Contact</div>
            <div>News</div>
            <Button className="h-40">Launch App</Button>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

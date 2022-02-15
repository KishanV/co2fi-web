import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { Button } from "../../atoms/button";
import { DivProps } from "../../utils";

export const NavigationBar = ({ ...props }: DivProps) => {
  return (
    <ContentHolder>
      <ContentLimiter>
        <div className="flex h-62 w-full mt-46 z-10">
          <div className="flex-shrink flex items-center justify-center">
            <img src="logo.svg" />
          </div>
          <div className="flex-1"></div>
          <div className="flex-shrink text-18 flex items-center justify-center  text-white gap-10">
            <div>Home</div>
            <div>Learn</div>
            <div>Community</div>
            <div>Devlopers</div>
            <Button className="h-40">Launch App</Button>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

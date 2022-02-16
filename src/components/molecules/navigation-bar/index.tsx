import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { Button } from "../../atoms/button";
import { DivProps } from "../../utils";
import { useEffect, useState } from "react";

export const NavigationBar = ({ ...props }: DivProps) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const clientWidth = document.body.clientWidth;
      if (clientWidth > 1022) {
        if (!isOpen) setOpen(false);
      }
      console.log(clientWidth);
    });
  }, []);

  function drawMenu() {
    return (
      <>
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">Learn</div>
        <div className="cursor-pointer">Community</div>
        <div className="cursor-pointer">Developers</div>
      </>
    );
  }

  function drawButton() {
    return (
      <a href="https://co2fi.vercel.app/">
        <Button className="h-40">Launch App</Button>
      </a>
    );
  }

  return (
    <ContentHolder>
      <ContentLimiter>
        <div className="flex h-62 w-full mt-46 z-10 relative">
          <div className="flex-shrink flex items-center justify-center">
            <img src="logo.svg" />
          </div>
          <div className="flex-1"></div>
          <div
            className="flex-shrink pl-20 pr-20 text-18 flex lg:hidden justify-center items-center cursor-pointer"
            onClick={() => {
              setOpen(true);
            }}
          >
            <img className="w-21 h-14" src="/hamburger.svg" />
          </div>
          <div className="flex-shrink text-18 hidden items-center justify-center  text-white gap-10 lg:flex">
            {drawMenu()}
            {drawButton()}
          </div>
          {isOpen && (
            <div className="absolute w-100% bg-dark-l1 rounded-20 border-gray flex flex-row text-white shadow-2xl">
              <div className="flex-1 flex flex-col relative p-20">
                <div className="flex flex-col gap-5 mb-30">{drawMenu()}</div>
                <div className="border-t border-black pt-22">
                  {drawButton()}
                </div>
              </div>
              <div
                className="w-60 flex flex-col justify-start items-center"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <div className="w-60 h-60 flex justify-center items-center cursor-pointer">
                  <img className="h-20 w-20" src="/close.svg" />
                </div>
              </div>
            </div>
          )}
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

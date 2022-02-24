import { ContentHolder, ContentLimiter } from "../../atoms/content";
import { Button } from "../../atoms/button";
import { DivProps } from "../../utils";
import { useEffect, useState } from "react";
import { Modal } from "../../atoms/model";
import { IpfsWarning } from "../../template/ipfs-warning";

export const NavigationBar = ({ ...props }: DivProps) => {
  const [isOpen, setOpen] = useState(false);
  const [isIpfsWaringOpen, setIpfsWaringOpen] = useState(false);

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
        <a href="/">
          <div className="cursor-pointer">Home</div>
        </a>
        <a href="https://maize-butterfly-741.notion.site/Getting-Started-c69b9250f6a64d76871f28e76c03231a">
          <div className="cursor-pointer">Learn</div>
        </a>
        <div className="cursor-pointer">Community</div>
      </>
    );
  }

  function drawButton() {
    return (
      <>
        <Button className="h-40" onClick={() => setIpfsWaringOpen(true)}>
          Launch App
        </Button>
        <IpfsWarning
          onClose={() => setIpfsWaringOpen(false)}
          visible={isIpfsWaringOpen}
        />
      </>
    );
  }

  return (
    <ContentHolder>
      <ContentLimiter>
        <div className="flex h-62 w-full mt-46 z-10 relative">
          <a href="/">
            <div className="flex-shrink flex items-center justify-center">
              <img src="logo.svg" />
            </div>
          </a>
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

import { ContentHolder, ContentLimiter } from "../../atoms/content";

export const Footer = () => {
  return (
    <ContentHolder className="relative text-white bg-black mt-130">
      <ContentLimiter className="relative flex justify-center items-center">
        <div className="flex-1 flex w-100% lg:w-3/5 text-18 text-zinc-400 justify-between mb-50  flex-col md:flex-row gap-20 md:gap-0">
          <div className="flex-shrink flex flex-col items-center justify-center md:justify-start md:items-start">
            <div className="flex-auto">
              <div className="flex-shrink flex mb-10">
                <img src="/logo.svg" />
              </div>
              Copyright © 2021
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center md:justify-start md:items-start">
            <div className="text-24 mb-30 text-white">Company</div>
            <div className="flex flex-row gap-3 text-gray items-center cursor-pointer">
              <img src="/social-icons/discord.svg" /> Discord
            </div>
            <div className="flex flex-row gap-3 text-gray items-center cursor-pointer">
              <img src="/social-icons/tweeter.svg" /> Twitter
            </div>
            <div className="flex flex-row gap-3 text-gray items-center cursor-pointer">
              <img src="/social-icons/telegram.svg" /> Telegram
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center md:justify-start md:items-start">
            <div className="text-24 mb-30 text-white">Community</div>
            <div className="flex flex-row gap-3 text-gray items-center cursor-pointer">
              <img src="/social-icons/tweeter.svg" /> Github
            </div>
            <a href="https://xavier-pye.gitbook.io/co2fi.io/">
              <div className="flex flex-row gap-3 text-gray items-center cursor-pointer">
                <img src="/social-icons/docs.svg" /> Documentation
              </div>
            </a>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

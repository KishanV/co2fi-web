import { ContentHolder, ContentLimiter } from "../../atoms/content";

export const Footer = () => {
  return (
    <ContentHolder className="relative text-white bg-black">
      <img className="w-100% " src="separator-level-2.svg" />
      <ContentLimiter className="relative ">
        <div className="flex-1 flex flex-row text-18 text-zinc-400 justify-between mb-80">
          <div className="flex-shrink flex flex-col">
            <div className="flex-auto">
              <div className="flex-shrink flex  items-center justify-center mb-10">
                <img src="/logo.svg" />
              </div>
              Copyright © 2021
            </div>
            <div className="flex flex-row h-40 flex-shrink">
              <img src="/social-icons/github.svg" />
              <img src="/social-icons/facebook.svg" />
              <img src="/social-icons/instagram.svg" />
              <img src="/social-icons/tweeter.svg" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-24 mb-30 text-white">Company</div>
            <div>About</div>
            <div>Careers</div>
            <div>Latest News</div>
            <div>FAQs</div>
            <div>Roadmap</div>
            <div>Contact Us</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-24 mb-30 text-white">Resources</div>
            <div>Documentation</div>
            <div>Brand Assets</div>
            <div>Brand Guidelines</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-24 mb-30 text-white">Company</div>
            <div>Go to Earn App</div>
            <div>Earn User Guide</div>
            <div>Apply for KYC</div>
            <div>Audit Report</div>
            <div>Network Governance</div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

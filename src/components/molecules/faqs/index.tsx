import { ContentHolder, ContentLimiter } from "../../atoms/content";
export const FAQs = () => {
  return (
    <ContentHolder className="relative text-white bg-dark-l1">
      <img className="w-100% mb-50" src="separator-level-1.svg" />
      <ContentLimiter className="relative mb-50">
        <div className="flex flex-col">
          <div className="text-30 mb-50">FAQs</div>
          <div className="grid grid-cols-1 gap-16 xl:grid-cols-2 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <div className="text-24">Capital.</div>
              <div className="text-14">
                Source deep liquidity for digital assets via permissioned and
                permissionless pools. Alkemi's compliant liquidity pools provide
                a trusted counterparty environment.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-24">Capital.</div>
              <div className="text-14">
                Source deep liquidity for digital assets via permissioned and
                permissionless pools. Alkemi's compliant liquidity pools provide
                a trusted counterparty environment.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-24">Capital.</div>
              <div className="text-14">
                Source deep liquidity for digital assets via permissioned and
                permissionless pools. Alkemi's compliant liquidity pools provide
                a trusted counterparty environment.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-24">Capital.</div>
              <div className="text-14">
                Source deep liquidity for digital assets via permissioned and
                permissionless pools. Alkemi's compliant liquidity pools provide
                a trusted counterparty environment.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-24">Capital.</div>
              <div className="text-14">
                Source deep liquidity for digital assets via permissioned and
                permissionless pools. Alkemi's compliant liquidity pools provide
                a trusted counterparty environment.
              </div>
            </div>
          </div>
        </div>
      </ContentLimiter>
    </ContentHolder>
  );
};

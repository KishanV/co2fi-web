import React, { useState } from "react";
import { Button } from "../../atoms/button";
import { Checkbox } from "../../atoms/check-box";
import { Modal } from "../../atoms/model";
import styles from "./index.module.scss";

const APP_URL = process.env.APP_URL as string;

export const IpfsWarning = (props: {
  visible?: boolean;
  onClose?: () => void;
}) => {
  const [isChecked, setCheck] = useState(false);

  return (
    <>
      <Modal width={"auto"} visible={props.visible}>
        <div
          className={`${styles.Model} text-14 pl-18 w-600 flex flex-col p-10`}
        >
          <div className="h-40 flex flex-row">
            <div className="whitespace-pre flex items-center flex-1">
              Redirect Notice
            </div>
            <div
              onClick={() => props.onClose && props.onClose()}
              className="h-40 w-40 flex-shrink flex justify-center items-center cursor-pointer"
            >
              <img className="h-15 w-15" src="/close.svg" />
            </div>
          </div>
          <div className="flex flex-col pt-40">
            <div className="flex-shrink flex items-center justify-center">
              <img className="h-60" src="logo.svg" />
            </div>
            <div className="text-center mt-30 mb-30">
              By accessing this link you are leaving aave.com and are being
              redirected to a third party, independent website. This redirect
              takes you to a community deployed and maintained instance of the
              open source Aave front end, hosted and served on the distributed,
              peer-to-peer file network known as the Interplanetary File System
              (IPFS).
            </div>
            <div className="flex justify-center flex-row gap-4 mt-30 mb-30">
              <Checkbox
                value={isChecked}
                onChange={(event) => {
                  setCheck(event.target.checked);
                }}
              />
              I acknowledge and agree
            </div>
            <div
              className={`flex justify-center items-center mb-30 ${
                !isChecked
                  ? "opacity-50 pointer-events-none select-none"
                  : "opacity-100 pointer-events-auto"
              }`}
            >
              <Button
                className="h-40"
                onClick={() => {
                  props.onClose && props.onClose();
                  location.href = APP_URL;
                }}
              >
                Continue
              </Button>
            </div>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </Modal>
    </>
  );
};

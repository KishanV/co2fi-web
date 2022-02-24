import { Modal as AntDModal, ModalProps } from "antd";

import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";

export const Modal = (props: ModalProps & { children: React.ReactNode }) => {
  const [count, setCount] = useState<number>(1);
  const [visible, setVisible] = useState<boolean | undefined>(props.visible);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  useEffect(() => {
    if (timer) clearTimeout(timer);
    if (!props.visible) {
      setTimer(
        setTimeout(() => {
          setVisible(false);
          setCount(count + 1);
        }, 300)
      );
    } else {
      setVisible(true);
    }
  }, [props.visible]);
  return (
    <>
      {visible && (
        <AntDModal
          key={count.toString()}
          className={styles.modal}
          bodyStyle={{ padding: "0px" }}
          closable={false}
          footer={false}
          width={"330px"}
          maskStyle={{
            background: "rgba(0, 0, 0, 0.2)",
          }}
          {...props}
        />
      )}
    </>
  );
};

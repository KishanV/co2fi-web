import { DivProps } from "../../utils";
import styles from "./index.module.scss";

export function ContentLimiter(props: DivProps) {
  return (
    <div
      {...props}
      className={`${styles.ContentLimiter} flex flex-col w-full h-auto ${
        props.className || ""
      }`}
    />
  );
}

export function ContentHolder({ ...props }: DivProps) {
  return (
    <div
      style={{
        overflow: "visible",
        overflowX: "clip",
      }}
      {...props}
      className={`flex flex-col w-full h-auto items-center ${
        props.className || ""
      }`}
    />
  );
}

import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { Rule, RuleObject } from "antd/lib/form";

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export const PhoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export const EmailRegEx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export function validateRegex(message: {
  regEx: RegExp;
  onEmpty: string;
  onInvalid: string;
}): Rule[] {
  return [
    {
      required: true,
      validator: async (ok: RuleObject, value: string) => {
        if (!value || !value.trim()) {
          return Promise.reject(new Error(message.onEmpty));
        } else if (value.trim() !== value || isNaN(value as any)) {
          if (!value.match(message.regEx)) {
            return Promise.reject(new Error(message.onInvalid));
          }
        }
      },
    },
  ];
}

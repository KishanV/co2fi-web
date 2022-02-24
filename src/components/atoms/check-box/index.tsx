import { Checkbox as AntDCheckbox, CheckboxProps } from "antd";

export const Checkbox = (
  props: CheckboxProps & React.RefAttributes<HTMLInputElement>
) => {
  return <AntDCheckbox {...props} />;
};

import { ButtonInfo } from "./type";
import { CLASSNAME } from "./classname";
import { ReactNode } from "react";
type Props = {
  props: ButtonInfo;
  children: ReactNode;
};

export default function Button({ props, children }: Props) {
  let style = "";
  if (props.variation === "add") {
    style = CLASSNAME.ADD_BUTTON;
  } else if (props.variation === "delete") {
    style = CLASSNAME.DEL_BUTTON;
  } else if (props.variation === "confirm") {
    style = CLASSNAME.CONFIRM_BUTTON;
  } else if (props.variation === "decline") {
    style = CLASSNAME.DECLINE_BUTTON;
  }

  return (
    <button className={style} type={props.type} onClick={props.click}>
      {children}
    </button>
  );
}

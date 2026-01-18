import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlusIcon(props: any) {
  return (
    <Svg
      width={props.size ? props.size : 43}
      height={props.size ? props.size : 43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2 20.2h39M21.067 41V2"
        stroke={props.color ? props.color : "#F1FFF3"}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default PlusIcon;

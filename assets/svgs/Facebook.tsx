import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Facebook(props: any) {
  return (
    <Svg
      width={35}
      height={34}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M29.048 28.07A16.352 16.352 0 0017.003.65 16.352 16.352 0 0013.5 32.975V22.21H8.808v-4.883h4.697v-4.24a4.879 4.879 0 014.878-4.879H22.7v4.884h-2.391a1.924 1.924 0 00-1.925 1.925v2.31h4.681v4.884h-4.68v11.087a16.353 16.353 0 0010.664-5.23z"
        stroke={props.color ? props.color : "#0E3E3E"}
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Facebook

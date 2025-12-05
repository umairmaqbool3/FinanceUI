import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function DotInCircle(props: any) {
    return (
        <Svg
            width={152}
            height={152}
            viewBox="0 0 152 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M75.97 146.97c39.212 0 71-31.788 71-71s-31.788-71-71-71-71 31.788-71 71 31.788 71 71 71z"
                stroke="#DFF7E2"
                strokeWidth={9.94}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Circle cx={45.44} cy={75.26} r={9.23} fill="#DFF7E2" />
        </Svg>
    )
}

export default DotInCircle

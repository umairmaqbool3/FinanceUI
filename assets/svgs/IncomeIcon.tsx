import { Colors } from "@/constants/theme"
import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function IncomeIcon(props: any) {
    return (
        <Svg
            width={props.size ? props.size : 12}
            height={props.size ? props.size : 12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect
                x={0.5}
                y={11.5}
                width={11}
                height={11}
                rx={2.5}
                transform="rotate(-90 .5 11.5)"
                stroke={props.color ? props.color : props.theme === 'dark' ? Colors.dark.secondaryBtn : Colors.light.text}
            />
            <Path
                d="M9.5 3a.5.5 0 00-.5-.5H4.5a.5.5 0 000 1h4v4a.5.5 0 001 0V3zM3.354 9.354l6-6-.708-.708-6 6 .708.708z"
                fill={props.color ? props.color : props.theme === 'dark' ? Colors.dark.secondaryBtn : Colors.light.text}
            />
        </Svg>
    )
}

export default IncomeIcon

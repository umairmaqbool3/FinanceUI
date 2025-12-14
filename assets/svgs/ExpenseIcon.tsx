import { Colors } from "@/constants/theme"
import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function ExpenseIcon(props: any) {
    return (
        <Svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect x={0.5} y={0.5} width={11} height={11} rx={2.5} stroke={props.theme === 'dark' ? Colors.dark.secondaryBtn : Colors.light.text} />
            <Path
                d="M9 9.5a.5.5 0 00.5-.5V4.5a.5.5 0 00-1 0v4h-4a.5.5 0 000 1H9zM2.646 3.354l6 6 .708-.708-6-6-.708.708z"
                fill={props.theme === 'dark' ? Colors.dark.secondaryBtn : Colors.light.text}
            />
        </Svg>
    )
}

export default ExpenseIcon

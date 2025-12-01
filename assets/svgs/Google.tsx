import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Google(props: any) {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M25.11 10.986a10.087 10.087 0 00-9.041-4.02 10.124 10.124 0 00-9.083 8.9 10.098 10.098 0 0016.879 8.566 10.098 10.098 0 003.215-6.612.75.75 0 00-.746-.802h-9.215m16.236-.015c0 9.03-7.321 16.352-16.352 16.352C7.97 33.355.65 26.034.65 17.003.65 7.97 7.971.65 17.003.65c9.031 0 16.352 7.321 16.352 16.353z"
                stroke={props.color ? props.color : "#0E3E3E"}
                strokeWidth={1.3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Google

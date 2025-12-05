import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function FingerPrint(props: any) {
    return (
        <Svg
            width={195}
            height={195}
            viewBox="0 0 195 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Circle cx={97.5} cy={97.5} r={97.5} fill="#00D09E" />
            <Path
                d="M86.59 97.35c2.771 9.2 20.284 35.88 41.565 41.4m-8.313 10.35c-16.626-5.175-33.434-17.903-43.227-39.675-11.639-25.875 14.963-36.225 24.939-13.8 3.836 8.625 9.975 18.112 28.264 27.6 18.288 9.487 29.927-18.975 13.301-27.6-24.208-12.558-29.927-48.645-64.842-41.4-49.045 10.178-38.24 77.625-13.3 96.6m73.154-41.4c-29.927-10.35-29.203-53.39-61.516-39.675C40.038 85.275 66.639 147.375 99.89 156m4.988-112.125c18.289 1.725 23.276 20.7 43.228 37.95"
                stroke="#E9F6FE"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default FingerPrint

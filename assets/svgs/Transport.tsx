import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TransportIcon(props: any) {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M13.566 5.155v10.1m-5.154 7.782v1.892a1.428 1.428 0 01-1.428 1.428H5.461a1.428 1.428 0 01-1.428-1.428v-3.965m14.705 2.073v1.892a1.427 1.427 0 001.428 1.428h1.523a1.428 1.428 0 001.428-1.428v-3.965m-11.635-.396h4.163M6.39 17.53s-.16 2.062 2.118 1.79m12.23-1.79s.158 2.062-2.119 1.79M23.14 6.82h1.524A1.637 1.637 0 0126.3 8.463v2.571M4.01 6.82H2.487A1.637 1.637 0 00.85 8.463v2.571M6.186.85h14.761c1.201 0 2.175.973 2.175 2.175v17.843a2.175 2.175 0 01-2.175 2.175H6.186a2.175 2.175 0 01-2.176-2.175V3.025C4.01 1.823 4.984.85 6.186.85zm-.074 4.305h14.903a2.102 2.102 0 012.102 2.101v7.998H4.01V7.256a2.101 2.101 0 012.102-2.101z"
                stroke="#F1FFF3"
                strokeWidth={1.69934}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default TransportIcon

import * as React from "react"
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg"

function RentIcon(props: any) {
    return (
        <Svg
            width={29}
            height={25}
            viewBox="0 0 29 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_11493_967)">
                <Path
                    d="M11.838 17.894h5.665a1.971 1.971 0 001.965-1.966 1.971 1.971 0 00-1.965-1.96H13.91a8.095 8.095 0 01-2.373-.385c-1.422-.306-3.721-.323-4.775 2.345H4.497m14.943 0l5.098-3.002a1.967 1.967 0 012.696.657 1.97 1.97 0 01-.651 2.697l-6.667 5.018a6.848 6.848 0 01-4.124 1.377H4.463M17.548 7.04L16.16 8.434a.09.09 0 01-.13 0l-.855-1.399h-3.739a4.531 4.531 0 110-3.257h8.332l2.13 1.807-2.832 2.929-1.518-1.445M4.474 14.926a.306.306 0 00-.305-.306H1.183a.306.306 0 00-.305.306v8.74a.306.306 0 00.305.306H4.17a.306.306 0 00.305-.306v-8.74z"
                    stroke="#F1FFF3"
                    strokeWidth={1.69934}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M5.987 6.344a1.224 1.224 0 100-2.447 1.224 1.224 0 000 2.447z"
                    fill="#F1FFF3"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_11493_967">
                    <Path fill="#fff" d="M0 0H28.3733V24.8216H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default RentIcon

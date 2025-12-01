import * as React from "react";
import { Image, ImageStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

/* Icon imports */
import Logo from "../assets/svgs/logo.svg";

export type IconType = keyof typeof $icons

export interface IconProps extends TouchableOpacityProps {
  icon: IconType
  size?: number
  iconProps?: SvgProps
}

export const Icon = function ({ icon, iconProps, size, style, ...props }: IconProps) {
  const $styles = [$container, style]
  const IconAsset = $icons[icon]

  return (
    <TouchableOpacity style={$styles} {...props}>
      {typeof IconAsset === "number" ? ( 
        <Image
          source={IconAsset}
          style={[
            { width: size ?? 24, height: size ?? 24 },
            iconProps?.style as ImageStyle,
          ]}
        />
      ) : (
        <IconAsset width={size} height={size} {...iconProps} />
      )}
    </TouchableOpacity>
  )
}

const $container: ViewStyle = {}

const $icons = {
  logo: Logo, // PNG image
  // Add SVG components here if you have them
}

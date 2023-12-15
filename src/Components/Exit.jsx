import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ExitIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      fill="#F1F5F9"
      d="M0 22C0 9.85 9.85 0 22 0s22 9.85 22 22-9.85 22-22 22S0 34.15 0 22Z"
    />
    <Path
      stroke="#94A3B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M28 16 16 28M16 16l12 12"
    />
  </Svg>
)
export default ExitIcon

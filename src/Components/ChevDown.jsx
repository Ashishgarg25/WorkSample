import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ChevronDown = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      stroke="#020617"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.4}
      strokeWidth={2}
      d="m1 1.5 6 6 6-6"
    />
  </Svg>
)
export default ChevronDown

import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DeleteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <Path fill="#DC2626" d="M2.5 5.5h15" />
    <Path
      stroke="#DC2626"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 5.5h15M6.667 5.5V3.833a1.667 1.667 0 0 1 1.666-1.666h3.334a1.667 1.667 0 0 1 1.666 1.666V5.5m2.5 0v11.667a1.667 1.667 0 0 1-1.666 1.666H5.833a1.667 1.667 0 0 1-1.666-1.666V5.5h11.666ZM11.667 9.667v5M8.333 9.667v5"
    />
  </Svg>
)
export default DeleteIcon

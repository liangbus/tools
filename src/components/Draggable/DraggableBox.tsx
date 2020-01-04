import React, { MouseEvent } from 'react'
interface Props {
  left: number
  top: number
  isDragging?: boolean
}
function DraggableBox(props: Props) {
  const { left, top } = props
  const innerStyle = {
    left: left + 'px',
    top: top + 'px'
  }
  // console.log('udpated left and top >>', left, top)
  return (
    <div
      className="draggle-box"
      style={innerStyle}
    >
    </div>
  )
}

export default DraggableBox
import React, { useState, MouseEvent, useEffect, useRef } from 'react'
import DraggableBox from './DraggableBox'
import './draggable.scss'
import ReactDOM from 'react-dom'
interface Props {

}
interface Pos {
  left: number,
  top: number
}
function Container(props: Props) {
  const [ postion, setPosition ] = useMousePosition(0, 0)
  const [ isDragging, setIsDragging ] = useState(false)
  const [ containerInfo, setContainerInfo ] = useState({
    offsetWidth: 1000,
    offsetHeight: 600,
    offsetTop: 0,
    offsetLeft: 0
  })
  
  const containerRef = useRef(null);
  /**
   * 按下鼠标
   * @param e 
   */
  function onMouseDownEventHandler(e: MouseEvent<HTMLDivElement>) {
    // console.log(e)
    setIsDragging(true)
  }
  /**
   * 拖动鼠标
   * @param e 
   */
  function onMouseMoveEventHandler(e: MouseEvent<HTMLDivElement>) {
    // console.log(e, e.pageX, e.pageY)
    if(isDragging) {
      const l = (e.pageX - containerInfo.offsetLeft) - (100 / 2)
      const t = (e.pageY - containerInfo.offsetTop) - (100 / 2)
      const maxL = containerInfo.offsetWidth - 100
      const maxT = containerInfo.offsetHeight - 100
      setPosition({
        left: l < 0 ? 0 : (l < maxL ? l : maxL),
        top: t < 0 ? 0 : (t < maxT ? t : maxT)
      })
    }
  }
  /**
   * 松开鼠标
   * @param e 
   */
  function onMouseUpEventHandler(e: MouseEvent<HTMLDivElement>) {
    // console.log('upupupupupupupupupup')
    setIsDragging(false)
  }
  useEffect(() => {
    console.log('containerRef >>> ', containerRef)
    const containerTarget = containerRef.current || {
      offsetWidth: 1000,
      offsetHeight: 600,
      offsetTop: 0,
      offsetLeft: 0
    }
    setContainerInfo({
      offsetWidth: containerTarget.offsetWidth,
      offsetHeight: containerTarget.offsetHeight,
      offsetTop: containerTarget.offsetTop,
      offsetLeft: containerTarget.offsetLeft
    })
  }, [])
  return (
    <div className="draggable-container" ref={containerRef} 
      onMouseDown={onMouseDownEventHandler}
      onMouseMove={onMouseMoveEventHandler}
      onMouseUpCapture={onMouseUpEventHandler} >
      <DraggableBox
        left={postion.left}
        top={postion.top}
        isDragging={false}
      />
    </div>
  )
}
// 设置位置 hook
function useMousePosition(l: number, t: number): [ Pos, Function ] {
  const [ postion, setPosition ] = useState({
    left: l,
    top: t
  })

  useEffect(() => {
    
  }, [])
  
  return [postion, setPosition]
}

export default Container

import React, { useState } from 'react'

const SliderDemo = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const handleClick = (direction)=> {

        // slide - 1 has slideIndex 0 and so on 

        direction === 'right' && setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 1) 
        direction === 'left' && setSlideIndex(slideIndex > 1 ? slideIndex - 1 : 3) 


    }
  return (
    <div className='container flex h-72 w-full overflow-hidden relative'> {/* only flex and no jcc aic, w-100%, h-as you wish */}
      <div onClick={()=>handleClick('left')}>left arrow</div>
      <div className='wrapper flex h-full '
      style={{
        transition: 'all 1s ease',
        transform: `translateX(-${slideIndex*100}vw)`  // most important
      }}
      > {/* flex and height, no width */}
        <div className="slide1 flex h-full w-screen">slide1</div> {/* w-100vw h-... */}
        <div className="slide2 flex h-full w-screen">slide2</div> {/* w-100vw h-... */}
        <div className="slide3 flex h-full w-screen">slide3</div> {/* w-100vw h-... */}
      </div>
      <div onClick={()=>handleClick('right')}>arrow right</div>
    </div>
  )
}

export default SliderDemo

import { Box } from "@chakra-ui/react";
import { useState } from "react";
import ReactSimplyCarousel from 'react-simply-carousel';

export const Carousel = ({ images }: { images: React.JSX.Element[] }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReactSimplyCarousel activeSlideIndex={activeSlideIndex} onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      containerProps={{
        style:{
          flexWrap:'nowrap',
          flexDirection:'row',
          alignItems:'center'
        }
      }}
      forwardBtnProps={{
        style: {
          alignSelf: 'center',
          background: '#7BA465',
          border: 'none',
          borderRadius: '50%',
          margin:'10px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          height: 30,
          lineHeight: 1,
          textAlign: 'center',
          width: 30,
        },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: {
          alignSelf: 'center',
          background: '#7BA465',
          margin:'10px',
          border: 'none',
          borderRadius: '50%',
          color: 'white',
          cursor: 'pointer',
          fontSize: '20px',
          height: 30,
          lineHeight: 1,
          textAlign: 'center',
          width: 30,
        },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {images.map((image, index) => 
        (
          <Box key={index} w={500}> {image}</Box>
        ))}
    </ReactSimplyCarousel>
  )
}
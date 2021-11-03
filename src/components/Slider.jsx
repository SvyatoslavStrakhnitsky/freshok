import styled from "styled-components";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import {useState} from "react";
import {sliderItems} from "../database";


const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`

const Wrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 110px);
  padding-top: 100px;
  background-color: aquamarine;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateX(${props => props.slideIndex * (-100)}vw);
  transition: transform 1s ease-in-out;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1320px;
  padding: 0 15px;
  margin: 0 auto;
  height: 100%;
`

const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "60px"};
  right: ${props => props.direction === "right" && "60px"};
  margin: auto;
  z-index: 1;
`

const SlideContainer = styled.div`
  padding: 24px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
`

const SlideTitle = styled.h2`
  max-width: 900px;
  font-size: 60px;
  line-height: 1.3;
  font-weight: 900;
  color: #505050;
  text-transform: uppercase;
`

const SlideItem = styled.div`
  display: flex;
`

const SlideSubtitle = styled.span`
  display: block;
  color: #CF3E3B;
`

const SlideText = styled.p`
  font-size: 16px;
`


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0)

  const onClickSlideHandle = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
      } else {
        setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
      }
  }

  return (
    <SliderContainer>
      <Arrow direction="left" onClick={() => onClickSlideHandle("left")}>
        <KeyboardArrowLeft fontSize="large"/>
      </Arrow>
      <SlideItem>
        {
          sliderItems.map(item => (
            <Wrapper style={{backgroundImage: `url(${item.img})`}} slideIndex={slideIndex}>
              <Container>
                <SlideContainer>
                  <SlideTitle>
                    {item.title}
                    <SlideSubtitle>
                      {item.subtitle}
                    </SlideSubtitle>
                  </SlideTitle>
                  <SlideText>
                    {item.text}
                  </SlideText>
                </SlideContainer>
              </Container>
            </Wrapper>
          ))
        }
      </SlideItem>
      <Arrow direction="right" onClick={() => onClickSlideHandle("right")}>
        <KeyboardArrowRight fontSize="large"/>
      </Arrow>
    </SliderContainer>
  )
}

export default Slider
import styled from "styled-components";
import {advantageItems} from "../database";

const Wrapper = styled.div`
  background-color: #F6F6F6;
`

const Container = styled.ul`
  max-width: 1320px;
  padding: 0 15px;
  margin: 0 auto;
  padding: 48px 0 29px;
  display: flex;
  justify-content: center;
`

const Advantage = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-right: 65px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-image: url(${props => props.icon});
  }
`

const AdvantageContainer = styled.div`
  max-width: 230px;
  padding-left: 74px;
`

const AdvantageTitle = styled.span`
  color: #121212;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`

const AdvantageText = styled.p`

`

const Advantages = () => {
  return (
    <Wrapper>
      <Container>
        {
          advantageItems.map(item => (
            <Advantage icon={item.img}>
              <AdvantageContainer>
                <AdvantageTitle>
                  {item.title}
                </AdvantageTitle>
                <AdvantageText>
                  {item.text}
                </AdvantageText>
              </AdvantageContainer>
            </Advantage>
          ))}
      </Container>
    </Wrapper>
  )
}

export default Advantages
import {useState} from "react";
import styled from "styled-components";


const OptionItem = styled.li`
  width: 100%;
  border: 1px solid rgba(193, 193, 193, 0.3);
  padding: 18px;
`

const OptionLabel = styled.label`
  display: flex;
`

const OptionInput = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  background-color: #63A60F;

`

const OptionText = styled.span`
  font-size: 23px;
  line-height: 1.3;
  color: #505050;
`

const CheckBox = ({items, productFilter}) => {

  const [check, setCheck] = useState([])

  const onClickCheckboxHandle = (value) => {
    const currentIndex = check.indexOf(value)
    const checkedInput = [...check]

    if (currentIndex === -1) {
      checkedInput.push(value)
    } else {
      checkedInput.splice(currentIndex, 1)
    }

    setCheck(checkedInput)
    productFilter(checkedInput)
  }


    const checkBoxList = () => {
      return items.filter((item) => item.title !== "Все товары").map(item =>
        <OptionItem key={item.id}>
          <OptionLabel>
            <OptionInput type="checkbox" checked={check.indexOf(item.category) !== -1} onChange={() => onClickCheckboxHandle(item.category)}/>
            <OptionText>{item.title}</OptionText>
          </OptionLabel>
        </OptionItem>
      )
    }

  return (
    <>
      {checkBoxList()}
    </>
  )
}

export default CheckBox
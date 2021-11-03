import {useEffect, useState} from "react";
import styled from "styled-components";

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #C1C1C1;
  font-size: 16px;
  line-height: 1.2;
  padding: 22px 18px;
  border-top: 1px solid #C1C1C1;
`

const PriceInput = styled.input`
  width: 80px;
  height: 40px;
  outline-width: 0;
  border: 1px solid #C1C1C1;
  border-radius: 3px;
  background-color: #F6F6F6;
  margin: 0 6px;
  text-align: center;
`


const PriceOption = ({productFilter}) => {

  const [price, setPrice] = useState({minPrice: 0, maxPrice: 1000})
  const [range, setRange] = useState([price.minPrice, price.maxPrice])


  const priceHandler = (e) => {
    if (e.target.name === "min" && e.target.value >= 0 && e.target.value.length < 8) {
      setPrice({...price, minPrice: +e.target.value})
    } else if (e.target.name === "max" && e.target.value >= 0 && e.target.value.length < 8) {
      setPrice({...price, maxPrice: +e.target.value})
    }
  }

  const onClickPriceHandler = () => {
    productFilter(range)
  }

  useEffect(() => {
    setRange([price.minPrice, price.maxPrice])
    productFilter(range)
  }, [price.minPrice, price.maxPrice])

  return (
    <PriceContainer>
      <label>
        от
        <PriceInput value={price.minPrice} name="min"
                    onChange={(e) => priceHandler(e)}/>
        ₽
      </label>
      <label>
        до
        <PriceInput value={price.maxPrice} name="max"
                    onChange={(e) => priceHandler(e)}/>
        ₽
      </label>
      <button onClick={() => {
        onClickPriceHandler()
      }}>OK
      </button>
    </PriceContainer>
  )
}

export default PriceOption
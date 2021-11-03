import {IconButton} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addOneProduct, removeOneProduct, removeProductFromCart} from "../state/cart-reducer";

const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #FFF;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const ProductCardImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 32px;
`

const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 160px;
  flex: 1;
`

const ProductCardTitle = styled.span`
  font-weight: 600;
  max-height: 60px;
  overflow: hidden;
  margin-bottom: 5px;
`

const ProductCardPrice = styled.span`
`

const ProductCardCurrency = styled.span`
  font-size: 14px;
`
const ProductAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const ProductCardCounter = styled.div`
  text-align: center;
  display: flex;
  color: #FFF;
  font-size: 16px;
  line-height: 1.5;
`
const ProductCardScreen = styled.span`
  width: 36px;
  height: 24px;
  color: #505050;
  background: rgba(99, 166, 14, 0.1);

`

const ProductCardCountBtn = styled.button`
  width: 24px;
  height: 24px;
  line-height: 1;
  background-color: #63A60E;
`
const ProductCardSum = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #505050;
  width: 75px;
  text-align: right;
`

const ProductCard = ({img, title, price, currency, id, quantity}) => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const addProduct = () => {
    dispatch(addOneProduct(id))
  }

  const removeProduct = () => {
      dispatch(removeOneProduct(id))
  }

  const deleteProduct = () => {
    dispatch(removeProductFromCart(id))
  }


  return (
    <ProductCardWrapper key={id}>
      <ProductCardImg src={img}/>
      <ProductCardInfo>
        <ProductCardTitle>
          {title}
        </ProductCardTitle>
        <ProductCardPrice>
          {price}
          <ProductCardCurrency>
            {currency}
          </ProductCardCurrency>
        </ProductCardPrice>
      </ProductCardInfo>
      <ProductAction>
        <IconButton aria-label="delete" size="small" style={{alignSelf: "end", marginBottom: '24px'}}>
          <Close onClick={deleteProduct}/>
        </IconButton>
        <div style={{display: 'flex', justifyContent: 'spaceBetween'}}>
          <ProductCardCounter>
            <ProductCardCountBtn onClick={removeProduct}>
              -
            </ProductCardCountBtn>
            <ProductCardScreen>
              {quantity}
            </ProductCardScreen>
            <ProductCardCountBtn onClick={addProduct}>
              +
            </ProductCardCountBtn>
            <ProductCardSum type="number">
              {price * quantity}
              <ProductCardCurrency>
                {currency}
              </ProductCardCurrency>
            </ProductCardSum>
          </ProductCardCounter>
        </div>
      </ProductAction>
    </ProductCardWrapper>
  )
}

export default ProductCard
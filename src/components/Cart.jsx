import styled from "styled-components"
import {IconButton} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {cleanUpCart} from "../state/cart-reducer";



const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  z-index: 4;
`

const CartContainer = styled.section`
  background-color: #FFF;
  width: 475px;
  height: 100%;
  display: flex;
  flex-direction: column;
`
const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 24px 12px;
`

const CartTitle = styled.span`
  display: block;
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 12px;
`

const CartEmptyBtn = styled.button`
  line-height: 1.2;
  font-weight: 300;
  padding: 0;
  color: #000000;
`

const CartContent = styled.div`
  padding: 12px;
  flex: 1;
  background-color: #F6F6F6;
  overflow: scroll;
  overflow-x: hidden;
`

const CartTotal = styled.div`
  background-color: #FFF;
  padding: 7px 24px 23px;
  display: flex;
  justify-content: space-between;
`
const CartTotalText = styled.span`
  font-size: 24px;
  line-height: 1.2;
  color: #000;
`

const CartTotalPrice = styled.span`
  font-weight: 600;
  font-size: 24px;
  color: #505050;
`

const CartTotalCurrency = styled.span`
  font-size: 20px;
`

const Cart = ({close}) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)

  const cleanCart = () => {
    dispatch(cleanUpCart())
  }



  return (
    <Wrapper onClick={close}>
      <CartContainer onClick={e => e.stopPropagation()}>
        <CartTop>
          <div>
            <CartTitle>
              Корзина
            </CartTitle>
            <CartEmptyBtn onClick={cleanCart}>
              очистить карзину
            </CartEmptyBtn>
          </div>
          <IconButton aria-label="delete" size="small">
            <Close onClick={close}/>
          </IconButton>
        </CartTop>
        <CartContent>
          {
            cart.map(prod => (
              <ProductCard img={prod.img} title={prod.title} price={prod.price} currency={prod.currency} id={prod.id} quantity={prod.quantity}/>
            ))
          }
        </CartContent>
        <CartTotal>
          <CartTotalText>
            Товаров на сумму
          </CartTotalText>
          <CartTotalPrice>
            {cart.reduce((acc, curr) => acc += (curr.quantity * curr.price), 0)}
            <CartTotalCurrency>
              ₽
            </CartTotalCurrency>
          </CartTotalPrice>
        </CartTotal>
      </CartContainer>
    </Wrapper>
  )
}

export default Cart


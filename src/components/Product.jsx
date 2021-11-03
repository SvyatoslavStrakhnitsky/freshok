import {addOneProduct, addProductToCart} from "../state/cart-reducer";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import cartIcon from "../assets/images/icons/icon-cart.svg";

const ProductItem = styled.article`
  padding: 57px 0 18px;
  border: 1px solid rgba(17, 17, 17, 0.2);
  border-radius: 6px;
  background-color: #FFF;
  height: 435px;
`

const ProductImg = styled.img`
  height: 225px;
  width: 300px;
  margin-bottom: 18px;
`

const ProductInfo = styled.div`
  margin: 0 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const ProductTitle = styled.h3`
  font-weight: 600;
  height: 100px;
`

const ProductPrice = styled.span`
  color: #505050;
  line-height: 1;
  max-height: 60px;
  overflow: hidden;
`

const ProductCurrency = styled.span`
`
const ProductBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #63A60E;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-position: 8px 8px;
  background-image: url(${cartIcon});
`

const Product = ({img, title, price, currency, id}) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)


  const addProduct = (id) => {
    const prod = products.find(p => p.id === id)
    const cartProd = cart.find(p => p.id === id)
    if (cartProd) {
      dispatch(addOneProduct(id))
    } else {
      dispatch(addProductToCart(prod))
    }
  }
  return (
    <ProductItem>
      <ProductImg src={img}/>
      <ProductInfo>
        <ProductTitle>
          {title}
        </ProductTitle>
        <ProductPrice>
          {price}
          <ProductCurrency>
            {currency}
          </ProductCurrency>
        </ProductPrice>
        <ProductBtn onClick={() => addProduct(id)}/>
      </ProductInfo>
    </ProductItem>
  )
}

export default Product
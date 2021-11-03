import styled from "styled-components"
import {categoryItems} from "../database";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import Product from "./Product";


const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 63px 15px 72px;
`

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 30px;
`
const ProductsCategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

const ProductsCategory = styled.button`
  text-transform: uppercase;
  color: #505050;
  font-size: 15px;
  font-weight: 700;

  &:not(:last-child) {
    margin-right: 24px;
  }
`

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`

const Products = () => {


  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart)

  let selectedProducts = products

  const [filter, setFilter] = useState("")

  if (filter === "fruits") selectedProducts = products.filter(p => p.category === filter)
  if (filter === "vegetables") selectedProducts = products.filter(p => p.category === filter)
  if (filter === "beverages") selectedProducts = products.filter(p => p.category === filter)
  if (filter === "grocery") selectedProducts = products.filter(p => p.category === filter)

  return (
    <Container>
      <Title>
        Топовые товары
      </Title>
      <ProductsCategoriesContainer>
        {
          categoryItems.map(item => (
            <ProductsCategory key={item.id} onClick={() => setFilter(item.category)}>
              {item.title}
            </ProductsCategory>
          ))
        }
      </ProductsCategoriesContainer>
      <ProductsContainer>
        {
          selectedProducts.map(item => (
           <Product img={item.img} title={item.title} price={item.price} currency={item.currency} id={item.id} />
          ))
        }
      </ProductsContainer>
    </Container>
  )
}

export default Products
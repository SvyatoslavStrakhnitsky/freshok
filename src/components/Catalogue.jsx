import styled from "styled-components"
import {categoryItems} from "../database";
import {useState} from "react";
import Product from "./Product";
import {useSelector} from "react-redux";
import CheckBox from "./CheckBox";
import PriceOption from "./PriceOption";

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  max-width: 1320px;
  padding: 110px 15px 0;
  margin: 0 auto;
`

const CatalogueTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  padding-top: 50px;
  margin-bottom: 50px;
`

const OptionContainer = styled.div`
  width: 300px;
  border: 1px solid #C1C1C1;
  border-radius: 6px;
  margin-bottom: 30px;
`

const OptionTitle = styled.span`
  display: block;
  line-height: 1.2;
  font-size: 24px;
  padding: 18px;
  cursor: pointer;

`

const OptionalList = styled.ul`
  display: ${props => props.visible ? "block" : "none"};
  border-top: 1px solid #C1C1C1;;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`

const Catalogue = ({category}) => {

  const [visible, setVisible] = useState(false)
  const [filters, setFilters] = useState({
    type: [],
    price: []
  })

  const products = useSelector(state => state.products)



  const filteredTypeProducts = (filters) => {
    const arr = filters
    const filteredItems = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (arr[i] !== products[j].category) continue;
        else {
          filteredItems.push(products[j])
        }
      }
    }
    return filteredItems.length > 0 ? filteredItems : products
  }

  const prod = filteredTypeProducts(filters)

  const filteredPriceProducts = (filters) => {
    const filteredProducts = []
    for (let i = 0; i < prod.length; i++ ) {
      if (prod[i].price < filters[0] || prod[i].price > filters[1]) continue;
      else {
        filteredProducts.push(prod[i])
      }
    }

    return filteredProducts
  }

  const prod2 = filteredPriceProducts(filters)



  const handleFilter = (filter, category) => {
    const newFilters = {...filters}
    newFilters[category] = filter
    setFilters(filter)
    if (category === "type"){
      filteredTypeProducts(newFilters)
    }
    if (category === "price") {
      filteredPriceProducts(newFilters)
    }
  }



  return (
    <Container>
      <CatalogueTitle>
        Каталог товаров
      </CatalogueTitle>
      <Wrapper>
        <div style={{marginRight: "30px"}}>
            {category === "all"
              ?
              <OptionContainer>
                <OptionTitle onClick={() => setVisible(!visible)}>
                  Категории
                </OptionTitle>
                <OptionalList visible={visible}>
                  <CheckBox items={categoryItems} productFilter={filter => handleFilter(filter, "type")}/>
                </OptionalList>
              </OptionContainer>
              : null}
          <OptionContainer>
            <OptionTitle>
              Цена
            </OptionTitle>
            <PriceOption productFilter={filter => handleFilter(filter, "price")}/>
          </OptionContainer>
        </div>
        <Products>
          {category === "all"
            ? prod2.map(item => (
              <Product img={item.img} title={item.title} price={item.price} currency={item.currency} id={item.id}/>))
            :
            prod2.filter(p => p.category === category).map(item => (
              <Product img={item.img} title={item.title} price={item.price} currency={item.currency} id={item.id}/>
            ))
          }
        </Products>
      </Wrapper>
    </Container>
  )
}

export default Catalogue
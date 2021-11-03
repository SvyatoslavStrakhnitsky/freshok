import styled from "styled-components"
import logo from "../assets/images/logo.svg"
import {Badge} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {categoryItems} from "../database";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #63A60F;
  padding: 25px 0;
  z-index: 3;
`

export const Container = styled.div`
  max-width: 1320px;
  padding: 0 15px;
  margin: 0 auto;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 200px;
  height: 60px;
`

const CatalogueContainer = styled.ul`
  display: none;
  width: 100%;
  background-color: #FFF;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  position: absolute;
  left: 0;
  top: 45px;
`
const CategoryButton = styled.button`
  padding: 15px 40px;
  font-weight: 600;
  color: #63A60E;
  border-radius: 6px;
  background-color: #FFF;
  position: relative;
  
  &:hover {
    background-color: #E0EDCF;
  }
  
  &:hover ${CatalogueContainer}  {
    display: block;
  }
`

const SearchInput = styled.input`
  padding: 15px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`
const SearchButton = styled.button`
  padding: 15px 52px;
  background: #31352B;
  color: #FFF;
  text-transform: uppercase;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`


const CatalogueItem = styled.li`
  border: 1px solid rgba(193, 193, 193, 0.3);
`

const CatalogueLink = styled(Link)`
  display: block;
  text-align: left;
  padding: 15px 24px;
  font-size: 16px;
  line-height: 1.2;
  color: #000;
`


const Navbar = ({open}) => {

  const cart = useSelector(state => state.cart)


  return (
    <Wrapper>
      <Container>
        <Menu>
          <Link to={"/"}>
            <Logo src={logo} alt="Логотип"/>
          </Link>
          <CategoryButton
          >Каталог продуктов
            <CatalogueContainer>
              {
                categoryItems.map(c =>
                  <CatalogueItem>
                    <CatalogueLink to={`/catalogue/${c.category}`}>
                      {c.title}
                    </CatalogueLink>
                  </CatalogueItem>
                )
              }
            </CatalogueContainer>
          </CategoryButton>
          <div>
            <SearchInput placeholder="Найти в магазине..."/>
            <SearchButton>Поиск</SearchButton>
          </div>
          <div>
            <Badge badgeContent={cart.reduce((acc, curr) => acc += curr.quantity, 0)}>
              <ShoppingCartOutlined onClick={open}/>
            </Badge>
          </div>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Navbar
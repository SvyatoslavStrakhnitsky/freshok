export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD-PRODUCT-TO-CART':
      return [...state, {...action.product, quantity: 1}]
    case 'CLEAN-UP-CART':
      return []
    case 'REMOVE-PRODUCT-FROM-CART':
      return state.filter(prod => prod.id !== action.id)
    case 'ADD-ONE-PRODUCT':
      return state.map(prod => prod.id === action.id ? {...prod, quantity: prod.quantity + 1} : prod)
    case 'REMOVE-ONE-PRODUCT':
      return state
        .map(prod => prod.id === action.id ? {...prod, quantity: prod.quantity > 1 ? prod.quantity - 1: prod.quantity} : prod)
    default:
      return state
  }
}


export const addProductToCart = (product) => ({type: 'ADD-PRODUCT-TO-CART', product})
export const cleanUpCart = () => ({type: 'CLEAN-UP-CART'})
export const removeProductFromCart = (id) => ({type: 'REMOVE-PRODUCT-FROM-CART', id})
export const addOneProduct = (id) => ({type: 'ADD-ONE-PRODUCT', id})
export const removeOneProduct = (id) => ({type: 'REMOVE-ONE-PRODUCT', id})
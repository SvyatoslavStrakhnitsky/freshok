import slide1 from "../src/assets/images/slide-1.jpg"
import slide2 from "../src/assets/images/slide-2.jpg"
import slide3 from "../src/assets/images/slide-3.jpg"
import advantage1 from "../src/assets/images/icons/scooter.svg"
import advantage2 from "../src/assets/images/icons/box.svg"
import advantage3 from "../src/assets/images/icons/24-hours.svg"
import product1 from "../src/assets/images/products/1.png"
import product2 from "../src/assets/images/products/2.png"
import product3 from "../src/assets/images/products/3.png"
import product4 from "../src/assets/images/products/4.png"
import product5 from "../src/assets/images/products/5.png"
import product6 from "../src/assets/images/products/6.png"
import product7 from "../src/assets/images/products/7.png"
import product8 from "../src/assets/images/products/8.png"

export const sliderItems = [
  {
    id: 1,
    title: "Свежачок вам в хату",
    subtitle: "Скидка -50%",
    text: "Только с 7 по 13 июля скидка на сезонные фрукты и овощи до 50%. Торопитесь!",
    img: `${slide1}`
  },
  {
    id: 2,
    title: "Накрути себе томатов",
    subtitle: "Акция: 3 кг по цене 1",
    text: "Только с 12 по 15 июля скидка на домашние помидорчики",
    img: `${slide2}`
  },
  {
    id: 2,
    title: "Пусть остальные позеленеют от зависти ",
    subtitle: "Распродажа зелени",
    text: "",
    img: `${slide3}`
  },
]

export const advantageItems = [
  {
    id: 1,
    title: "Бесплатная доставка",
    text: "Для заказов на сумму от 500 ₽",
    img: `${advantage1}`
  },
  {
    id: 2,
    title: "Возврат товара",
    text: "Если товары были испорчены",
    img: `${advantage2}`
  },
  {
    id: 3,
    title: "Поддержка 24/7",
    text: "Лучшие операторы",
    img: `${advantage3}`
  },
]

export const categoryItems = [
  {
    id: 1,
    title: "Все товары",
    category: "all"
  },
  {
    id: 2,
    title: "Фрукты",
    category: "fruits",
  },
  {
    id: 3,
    title: "Овощи",
    category: "vegetables",
  },
  {
    id: 4,
    title: "Напитки",
    category: "beverages"
  },
  {
    id: 5,
    title: "Бакалея",
    category: "grocery",
  },
]

export const productItems = [
  {
    id: 1,
    title: "Ананас, 1кг",
    price: 999,
    currency: "₽",
    img: `${product1}`,
    quantity: 6,
    category: "fruits",
  },
  {
    id: 2,
    title: "Лимон, 1кг",
    price: 199,
    currency: "₽",
    img: `${product2}`,
    quantity: 1,
    category: "fruits",
  },
  {
    id: 3,
    title: "Питахайя красная с белой мякотью, 1шт",
    price: 1019,
    currency: "₽",
    img: `${product3}`,
    quantity: 1,
    category: "fruits",
  },
  {
    id: 4,
    title: "Перец оранжевый, 1кг",
    price: 349,
    currency: "₽",
    img: `${product4}`,
    quantity: 1,
    category: "vegetables",
  },
  {
    id: 5,
    title: "Морковь молодая с бабушкиной грядки, 1кг",
    price: 49,
    currency: "₽",
    img: `${product5}`,
    quantity: 1,
    category: "vegetables",
  },
  {
    id: 6,
    title: "Напиток сокосодержащий Sanpellegrino Aranciata Orange Красный апельсин безалкогольн...",
    price: 199,
    currency: "₽",
    img: `${product6}`,
    quantity: 1,
    category: "beverages",
  },
  {
    id: 7,
    title: "Кофе с коноплей органический Caffé Salomoni 250г",
    price: 877,
    currency: "₽",
    img: `${product7}`,
    quantity: 1,
    category: "beverages",
  },
  {
    id: 8,
    title: "Кетчуп томатный детский органический Bio-Zentrale 500мл",
    price: 600,
    currency: "₽",
    img: `${product8}`,
    quantity: 1,
    category: "grocery",
  }
]

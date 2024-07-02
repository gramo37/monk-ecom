import { TProduct } from "./types/products";

export const off = "% Off";
export const flat_off = "flat Off";
export const PRODUCT_LIST = "https://stageapi.monkcommerce.app/task/products/search";
export const APIKEY = import.meta.env.VITE_APIKEY;

export const products: TProduct[] = [
  {
    id: 77,
    title: "Fog Linen Chambray Towel - Beige Stripe",
    discount: 10,
    discount_type: "% Off",
    variants: [
      {
        id: 1,
        product_id: 77,
        title: "XS / Silver",
        price: "49",
      },
      {
        id: 2,
        product_id: 77,
        title: "S / Silver",
        price: "49",
      },
      {
        id: 3,
        product_id: 77,
        title: "M / Silver",
        price: "49",
      },
    ],
    image: {
      id: 266,
      product_id: 77,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 80,
    title: "Orbit Terrarium - Large",
    variants: [
      {
        id: 64,
        product_id: 80,
        title: "Default Title",
        price: "109",
      },
    ],
    image: {
      id: 272,
      product_id: 80,
      src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
    },
  },
  {
    id: 81,
    title: "Classic Blue Denim Jacket",
    discount: 15,
    discount_type: "% Off",
    variants: [
      {
        id: 101,
        product_id: 81,
        title: "XS / Blue",
        price: "79",
      },
      {
        id: 102,
        product_id: 81,
        title: "S / Blue",
        price: "79",
      },
      {
        id: 103,
        product_id: 81,
        title: "M / Blue",
        price: "79",
      },
      {
        id: 104,
        product_id: 81,
        title: "L / Blue",
        price: "79",
      },
      {
        id: 105,
        product_id: 81,
        title: "XL / Blue",
        price: "79",
      },
    ],
    image: {
      id: 280,
      product_id: 81,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 82,
    title: "Vintage Leather Wallet",
    variants: [
      {
        id: 201,
        product_id: 82,
        title: "Brown",
        price: "49",
      },
      {
        id: 202,
        product_id: 82,
        title: "Black",
        price: "49",
      },
    ],
    image: {
      id: 290,
      product_id: 82,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 83,
    title: "Organic Cotton T-Shirt",
    discount: 5,
    discount_type: "% Off",
    variants: [
      {
        id: 301,
        product_id: 83,
        title: "XS / White",
        price: "25",
      },
      {
        id: 302,
        product_id: 83,
        title: "S / White",
        price: "25",
      },
      {
        id: 303,
        product_id: 83,
        title: "M / White",
        price: "25",
      },
      {
        id: 304,
        product_id: 83,
        title: "L / White",
        price: "25",
      },
      {
        id: 305,
        product_id: 83,
        title: "XL / White",
        price: "25",
      },
      {
        id: 306,
        product_id: 83,
        title: "XS / Black",
        price: "25",
      },
      {
        id: 307,
        product_id: 83,
        title: "S / Black",
        price: "25",
      },
      {
        id: 308,
        product_id: 83,
        title: "M / Black",
        price: "25",
      },
      {
        id: 309,
        product_id: 83,
        title: "L / Black",
        price: "25",
      },
      {
        id: 310,
        product_id: 83,
        title: "XL / Black",
        price: "25",
      },
    ],
    image: {
      id: 300,
      product_id: 83,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 84,
    title: "Minimalist Wristwatch",
    variants: [
      {
        id: 401,
        product_id: 84,
        title: "Black Strap",
        price: "150",
      },
      {
        id: 402,
        product_id: 84,
        title: "Brown Strap",
        price: "150",
      },
    ],
    image: {
      id: 401,
      product_id: 84,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 85,
    title: "Luxury Silk Scarf",
    discount: 20,
    discount_type: "% Off",
    variants: [
      {
        id: 501,
        product_id: 85,
        title: "Red",
        price: "120",
      },
      {
        id: 502,
        product_id: 85,
        title: "Blue",
        price: "120",
      },
    ],
    image: {
      id: 501,
      product_id: 85,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 86,
    title: "Eco-friendly Water Bottle",
    variants: [
      {
        id: 601,
        product_id: 86,
        title: "500ml",
        price: "30",
      },
      {
        id: 602,
        product_id: 86,
        title: "750ml",
        price: "35",
      },
      {
        id: 603,
        product_id: 86,
        title: "1000ml",
        price: "40",
      },
    ],
    image: {
      id: 601,
      product_id: 86,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 87,
    title: "Bluetooth Wireless Earbuds",
    variants: [
      {
        id: 701,
        product_id: 87,
        title: "Black",
        price: "99",
      },
      {
        id: 702,
        product_id: 87,
        title: "White",
        price: "99",
      },
    ],
    image: {
      id: 701,
      product_id: 87,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 88,
    title: "Fitness Tracker",
    discount: 10,
    discount_type: "% Off",
    variants: [
      {
        id: 801,
        product_id: 88,
        title: "Black",
        price: "149",
      },
      {
        id: 802,
        product_id: 88,
        title: "Pink",
        price: "149",
      },
      {
        id: 803,
        product_id: 88,
        title: "Blue",
        price: "149",
      },
    ],
    image: {
      id: 801,
      product_id: 88,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 89,
    title: "Noise Cancelling Headphones",
    variants: [
      {
        id: 901,
        product_id: 89,
        title: "Black",
        price: "250",
      },
      {
        id: 902,
        product_id: 89,
        title: "White",
        price: "250",
      },
    ],
    image: {
      id: 901,
      product_id: 89,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 90,
    title: "Travel Backpack",
    discount: 5,
    discount_type: "% Off",
    variants: [
      {
        id: 1001,
        product_id: 90,
        title: "30L",
        price: "100",
      },
      {
        id: 1002,
        product_id: 90,
        title: "50L",
        price: "120",
      },
    ],
    image: {
      id: 1001,
      product_id: 90,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 91,
    title: "Smart Home Speaker",
    variants: [
      {
        id: 1101,
        product_id: 91,
        title: "Black",
        price: "199",
      },
      {
        id: 1102,
        product_id: 91,
        title: "White",
        price: "199",
      },
    ],
    image: {
      id: 1101,
      product_id: 91,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 92,
    title: "Wireless Charging Pad",
    variants: [
      {
        id: 1201,
        product_id: 92,
        title: "Black",
        price: "39",
      },
      {
        id: 1202,
        product_id: 92,
        title: "White",
        price: "39",
      },
    ],
    image: {
      id: 1201,
      product_id: 92,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 93,
    title: "Digital Photo Frame",
    variants: [
      {
        id: 1301,
        product_id: 93,
        title: "8-inch",
        price: "89",
      },
      {
        id: 1302,
        product_id: 93,
        title: "10-inch",
        price: "109",
      },
    ],
    image: {
      id: 1301,
      product_id: 93,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 94,
    title: "Electric Kettle",
    discount: 15,
    discount_type: "% Off",
    variants: [
      {
        id: 1401,
        product_id: 94,
        title: "1.0L",
        price: "59",
      },
      {
        id: 1402,
        product_id: 94,
        title: "1.5L",
        price: "69",
      },
    ],
    image: {
      id: 1401,
      product_id: 94,
      src: "https://picsum.photos/200/300",
    },
  },
  {
    id: 95,
    title: "Smart LED Light Bulb",
    variants: [
      {
        id: 1501,
        product_id: 95,
        title: "Single",
        price: "19",
      },
      {
        id: 1502,
        product_id: 95,
        title: "Pack of 4",
        price: "69",
      },
    ],
    image: {
      id: 1501,
      product_id: 95,
      src: "https://picsum.photos/200/300",
    },
  },
];
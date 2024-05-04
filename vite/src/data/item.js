const productList = [
  {
    id: "1",
    title: "IPhone 15 pro",
    price: 1000,
    image:
      "/images/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg",
  },
  {
    id: "2",
    title: "Mac Book Pro M3",
    price: 1300,
    image: "/images/macbook.jpg",
  },
  {
    id: "3",
    title: "IPad Pro M1",
    price: 400,
    image: "/images/ipad.jpg",
  },
  {
    id: "4",
    title: "air podspro 2",
    price: 300,
    image: "/images/airpods.jpg",
  },
  {
    id: "5",
    title: "Vision Pro",
    price: 3999,
    image: "/images/56ad99dd-4c57-45b3-9c77-aaae7959939b_1920x1080.jpg",
  },
  {
    id: "6",
    title: "watch series 9",
    price: 299,
    image:
      "/images/Apple_delivers-apple-watch-series-6_09152020_big.jpg.large.jpg",
  },
  {
    id: "7",
    title: "MAc Mini M1",
    price: 900,
    image: "/images/mac-mini_overview__164prubpwpee_og.jpg",
  },
  {
    id: "8",
    title: "mouse",
    price: 300,
    image: "/images/mouse.jpg",
  },
];

function getProductData(id) {
  let productData = productList.find((item) => item.id === id);
  return productData;
}
export { productList, getProductData };

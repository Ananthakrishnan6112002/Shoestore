const products = [
  {
    id: 1,
    model: "Nike",
    brand: "Nike",
    price: 150,
    category: "Running",
    color: "Red",
    size: [8, 9, 10],
    images: ["/images/r1.jpg","/images/r2.jpg","/images/r3.jpg","/images/r4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 2,
    model: "Puma 343",
    brand: "Puma",
    price: 160,
    category: "Casual",
    color: "Blue",
    size: [7, 8, 9],
    images: ["/images/b2.jpg","/images/b1.jpg","/images/b3.jpg","/images/b4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 3,
    model: "Nike Hordan23",
    brand: "Nike",
    price: 200,
    category: "Running",
    color: "Black",
    size: [8, 9, 10, 11],
    images: ["/images/n2.jpg","/images/n1.jpg","/images/n3.jpg","/images/n4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 4,
    model: "Adidas 231",
    brand: "Adidas",
    price: 140,
    category: "Casual",
    color: "White",
    size: [7, 8, 9],
    images: ["/images/g2.jpg","/images/g1.jpg","/images/g3.jpg","/images/g4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 5,
    model: "Nike Air Max",
    brand: "Nike",
    price: 340,
    category: "Sports",
    color: "White",
    size: [9, 10, 11],
    images: ["/images/bn3.jpg","/images/bn1.jpg","/images/bn2.jpg","/images/bn4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 6,
    model: "Nike Jordan Air",
    brand: "Nike",
    price: 130,
    category: "Sports",
    color: "Red",
    size: [8, 9, 10],
    images: ["/images/pn3.jpg","/images/pn1.jpg","/images/pn2.jpg","/images/pn4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 7,
    model: "Adidas 22",
    brand: "Adidas",
    price: 155,
    category: "Casual",
    color: "Black",
    size: [7, 8, 9],
    images: ["/images/men2.jpg","/images/joy3.jpg","/images/joy2.jpg","/images/joy4.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 8,
    model: "Puma 2021",
    brand: "Puma",
    price: 432,
    category: "Casual",
    color: "Blue",
    size: [8, 9, 10],
    images: ["/images/men1.jpg","/images/gray1.jpg","/images/gray2.jpg","/images/gray4.jpg"],
    soles: [
      { img: "/images/men1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/gray4.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 9,
    model: "Adidas 34",
    brand: "Adidas",
    price: 121,
    category: "Sports",
    color: "White",
    size: [7, 8, 9],
    images: ["/images/women1.jpg","/images/w1.jpg","/images/w2.jpg","/images/w3.jpg"],
    soles: [
      { img: "/images/sr1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/sr2.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 10,
    model: "Sparx",
    brand: "Sparx",
    price: 40,
    category: "Casual",
    color: "Brown",
    size: [6, 7, 8],
    images: ["/images/women2.jpg","/images/w1.jpg","/images/w2.jpg","/images/w3.jpg"],
    soles: [
      { img: "/images/women1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/women1.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 11,
    model: "Reebok",
    brand: "Reebok",
    price: 40,
    category: "Sports",
    color: "Black",
    size: [7, 8, 9],
    images: ["/images/a2.jpg","/images/a4.jpg","/images/a3.jpg","/images/a1.jpg"],
    soles: [
      { img: "/images/mask.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/mask1.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  },
  {
    id: 12,
    model: "Adidas Mask",
    brand: "Adidas",
    price: 40,
    category: "Casual",
    color: "White",
    size: [7, 8, 9],
    images: ["/images/mask2.jpg","/images/mask1.jpg","/images/mask2.jpg","/images/mask3.jpg"],
    soles: [
      { img: "/images/women1.jpg", text: "Stretch laces, so you only have to tie your shoes once." },
      { img: "/images/women1.jpg", text: "Experience unparalleled comfort as the lightweight foam midsole cradles your feet with cushioned support." }
    ],
    sole2:[ { img2: "/images/sr3.jpg", text2: "Stay odor-free with antimicrobial copper lining that kills bacteria." }]
  }
];

export default products;

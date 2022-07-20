// TODO: This is gonna populate products collection in database.

const seedData = [
  {
    title: "Khaki Army Linen",
    description:
      "Our Khaki Army Linen cap is made from the finest linen woven in the Philippines. This makes the cap lightweight, breathable, and the perfect choice for hot summer days. At the back you will find an adjustable nylon strap with stainless steel rings to personalize your fit and Zeno's signature logo",
    price: 10,
    image: "/image1.png",
  },
  {
    title: "Lavander K Linen",
    description:
      "Our 'Lavander K' cap is made from the finest linen woven in the Philippines. This makes the cap lightweight, breathable, and the perfect choice for hot summer days. At the back you will find an adjustable nylon strap with stainless steel rings to personalize your fit and Zeno's signature logo",
    price: 9,
    image: "/image2.png",
  },
  {
    title: "Argent Black Linen",
    description:
      "Our 'Argent Black Linen' cap is made from the finest linen woven in the Philippines. This makes the cap lightweight, breathable, and the perfect choice for hot summer days. At the back you will find an adjustable nylon strap with stainless steel rings to personalize your fit and Zeno's signature logo",
    price: 11,
    image: "/image3.png",
  },
  {
    title: "Zeus Fragral Linen",
    description:
      "Our 'Zeus Fragral Linen' cap is made from the finest linen woven in the Philippines. This makes the cap lightweight, breathable, and the perfect choice for hot summer days. At the back you will find an adjustable nylon strap with stainless steel rings to personalize your fit and Zeno's signature logo",
    price: 10,
    image: "/image4.png",
  },
  {
    title: "Pure Rip Tech",
    description:
      "Meet the 'Pure Rip Tech' cap in a deep black colour. Sourced from the infamous Schoeller mill, our Active Tech cap is made from a durable 3 layer fabric making it both wind, water and weather resistant. The ripstop detail adds a certain durabitity and refined look fro all day wear.",
    price: 8,
    image: "/image5.png",
  },
  {
    title: "Marunaka Hybrid Tech",
    description:
      "Meet the 'Marunaka Hybrid Tech' cap in a deep black colour. Sourced from the infamous Schoeller mill, our Active Tech cap is made from a durable 3 layer fabric making it both wind, water and weather resistant. The ripstop detail adds a certain durabitity and refined look fro all day wear.",
    price: 7,
    image: "/image6.png",
  },
  {
    title: "Guts Cool Tech",
    description:
      "Meet the 'Guts Cool Tech' cap in a deep black colour. Sourced from the infamous Schoeller mill, our Active Tech cap is made from a durable 3 layer fabric making it both wind, water and weather resistant. The ripstop detail adds a certain durabitity and refined look fro all day wear.",
    price: 9,
    image: "/image7.png",
  },
  {
    title: "Ocean Blue Tech",
    description:
      "Meet the 'Ocean Blue Tech' cap in a deep black colour. Sourced from the infamous Schoeller mill, our Active Tech cap is made from a durable 3 layer fabric making it both wind, water and weather resistant. The ripstop detail adds a certain durabitity and refined look fro all day wear.",
    price: 8,
    image: "/image8.png",
  },
  {
    title: "Skyline Folk Marine",
    description:
      "Simplicity meets sophistication - this dark rich hue is an instant classic. Made from a unique blend of cashmere and merino marine, this material is skillfully woven in the Lieria region of Portugal. The cap is lined with luxurious viscose material. At the back, you'll find an adjustable leather strap stainless steel rings to personalize your fit and Zeno's signature logo.",
    price: 12,
    image: "/image9.png",
  },
  {
    title: "Tian Lei Marine",
    description:
      "Simplicity meets sophistication - this dark rich hue is an instant classic. Made from a unique blend of cashmere and merino marine, this material is skillfully woven in the Lieria region of Portugal. The cap is lined with luxurious viscose material. At the back, you'll find an adjustable leather strap stainless steel rings to personalize your fit and Zeno's signature logo.",
    price: 10,
    image: "/image10.png",
  },
  {
    title: "Messy Marine",
    description:
      "Simplicity meets sophistication - this dark rich hue is an instant classic. Made from a unique blend of cashmere and merino marine, this material is skillfully woven in the Lieria region of Portugal. The cap is lined with luxurious viscose material. At the back, you'll find an adjustable leather strap stainless steel rings to personalize your fit and Zeno's signature logo.",
    price: 12,
    image: "/image11.png",
  },
  {
    title: "Sophis Disco Marine",
    description:
      "Simplicity meets sophistication - this dark rich hue is an instant classic. Made from a unique blend of cashmere and merino marine, this material is skillfully woven in the Lieria region of Portugal. The cap is lined with luxurious viscose material. At the back, you'll find an adjustable leather strap stainless steel rings to personalize your fit and Zeno's signature logo.",
    price: 12,
    image: "/image12.png",
  },
  {
    title: "Forest Green Wool",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 10,
    image: "/image13.png",
  },
  {
    title: "Royal Blue Cashmere",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nihil deleniti incidunt quibusdam voluptate rem accusamus officiis ratione nulla numquam deserunt explicabo rerum saepe, expedita inventore laudantium sint a ipsam?",
    price: 10,
    image: "/image14.png",
  },
  {
    title: "Clay Grey Cashmere",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 10,
    image: "/image15.png",
  },
  {
    title: "Black Wool Tech",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 10,
    image: "/image16.png",
  },
  {
    title: "Raw Blue Denim",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nihil deleniti incidunt quibusdam voluptate rem accusamus officiis ratione nulla numquam deserunt explicabo rerum saepe, expedita inventore laudantium sint a ipsam?",
    price: 10,
    image: "/image17.png",
  },
  {
    title: "Washed Brown Denim",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 11,
    image: "/image18.png",
  },
  {
    title: "Grey Hound Denim",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 10,
    image: "/image19.png",
  },
  {
    title: "Hazel Brown Cashmere",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, at. Odit voluptatum aperiam deserunt, perspiciatis aspernatur omnis commodi harum labore nostrum nihil eaque tempora earum eos. Illo eligendi iure repellendus.",
    price: 10,
    image: "/image19.png",
  },
];

export default seedData;

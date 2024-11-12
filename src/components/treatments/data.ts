export interface Item {
  category: string;
  title: string;
  price: string;
  imgs: string[];
  desc: string;
}

export const items: Item[] = [
  {
    category: "Treatment",
    title: "Gel Polish",
    price: "€ 45",
    imgs: [
      "/treatments/gel-polish-treatment.png",
    ],
    desc: "In this treatment we give you an extended manicure. This means cuticle care and filing your nails in your desired shape. We then paint them in the colour of your choice! You can also add nail art on top (see nail art menu)."
  },
  {
    category: "Treatment",
    title: "BIAB Natural",
    price: "€ 60",
    imgs: [
      "/treatments/biab-treatment.png",
    ],
    desc: "The BIAB treatment is an excellent choice for those who want strong natural nails. It builds your nails in such a way that it allows them to grow without breaking! Of course this treatment includes our extended manicure."
  },
  {
    category: "Nail Art",
    title: "Basic",
    price: "Price of treatment + € 10",
    imgs: [
      "/treatments/basic-nail-art.png",
    ],
    desc: "This nail art can be multiple colours, a dot, some foils, glazed look or some simple line work. For inspiration swipe through the pictures or check out my instagram page."
  },
  {
    category: "Nail Art",
    title: "Medium",
    price: "Price of treatment + € 15",
    imgs: ["/treatments/medium-nail-art.png"],
    desc: "This nail art can be a french, coloured chrome or a simple airbrush design. For inspiration swipe through the pictures or check out my instagram page."
  },
  {
    category: "Nail Art",
    title: "Extra Extra",
    price: "Price of treatment + € 20",
    imgs: ["/treatments/extra-nail-art.png"],
    desc: "With the extra extra nail art we go all out! This nail art can be a combination of different styles like french, chrome or airbrush. But can also include 3D or gems."
  },
  {
    category: "Nail Art",
    title: "Custom",
    price: "Price of treatment + € 30",
    imgs: ["/treatments/custom-nail-art.png"],
    desc: "This option is for those who want something super intricate or personalized. You can always contact me to discuss your ideas!"
  },
  {
    category: "",
    title: "Removal",
    price: "€ 10",
    imgs: ["/treatments/removal.jpg"],
    desc: "To keep your nails in the best shape, I use a soak off method where I first file a small layer of product. And then soak the product in a remover which makes it easy to take off."
  },
];

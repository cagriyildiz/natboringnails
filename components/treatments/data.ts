export interface Img {
  src: string;
  alt: string;
}

export interface Item {
  category: string;
  title: string;
  price: string;
  imgs: Img[];
  desc: string;
  color: string;
}

export const items: Item[] = [
  {
    category: "Treatment",
    title: "BIAB Natural",
    price: "€ 60",
    imgs: [
      {
        src: "/treatments/biab1/biab1.2.png",
        alt: "BIAB Natural"
      },
      {
        src: "/treatments/biab1/biab1.1.jpeg",
        alt: "BIAB Natural - Square Nails"
      },

    ],
    desc: "Discover the secret to strong, healthy, natural nails with BIAB treatment. This revolutionary technique reinforces your nails, allowing them to grow longer and stronger without breakage. Your treatment includes an extended manicure for flawless results.",
    color: "primary"
  },
  {
    category: "Treatment",
    title: "BIAB + Color",
    price: "€ 75",
    imgs: [
      {
        src: "/treatments/biab2/biab2.3.jpeg",
        alt: "BIAB + Red Gel Polish"
      },
      {
        src: "/treatments/biab2/biab2.1.jpeg",
        alt: "BIAB + Turquoise Gel Polish with Glitter Effect"
      },
      {
        src: "/treatments/biab2/biab2.2.jpeg",
        alt: "BIAB + Black Gel Polish"
      },
      {
        src: "/treatments/biab2/biab2.4.jpeg",
        alt: "BIAB + Dark Brown Gel Polish"
      },
    ],
    desc: "Combine the strength of BIAB with your favorite gel polish color. This treatment provides a durable BIAB base to promote healthy nail growth and prevent breakage, finished with a flawless gel polish application in your chosen shade for long-lasting color.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Almost Boring",
    price: "Price of treatment + € 10",
    imgs: [
      {
        src: "/treatments/level1/level1.6.png",
        alt: "Level 1 Nail Art with Little Hearts"
      },
      {
        src: "/treatments/level1/level1.1.jpeg",
        alt: "Level 1 Nail Art Red Gel Polish with Hearts"
      },
      {
        src: "/treatments/level1/level1.2.jpeg",
        alt: "Level 1 Nail Art with Black Dots"
      },
      {
        src: "/treatments/level1/level1.3.jpeg",
        alt: "Level 1 Nail Art Yellow Gel Polish with Cat Eye Effect"
      },
      {
        src: "/treatments/level1/level1.4.jpeg",
        alt: "Level 1 Nail Art Light Pink Gel Polish with Glaze Effect"
      },
      {
        src: "/treatments/level1/level1.5.jpeg",
        alt: "Level 1 Nail Art Natural Gel Polish"
      },
    ],
    desc: "Express yourself with fun and colorful nail designs. This service offers a range of creative options, from vibrant multi-color designs and playful dots to eye-catching foils, trendy glazed looks, and simple, elegant line work. Find inspiration for your next manicure by browsing the pictures or checking out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat So Boring",
    price: "Price of treatment + € 15",
    imgs: [
      {
        src: "/treatments/level2/level2.3.jpeg",
        alt: "Level 2 Nail Art Black Lines on Light Base"
      },
      {
        src: "/treatments/level2/level2.1.jpeg",
        alt: "Level 2 Nail Art Black and White Dots"
      },
      {
        src: "/treatments/level2/level2.2.jpeg",
        alt: "Level 2 Nail Art Colorful Round French"
      },
      {
        src: "/treatments/level2/level2.4.jpeg",
        alt: "Level 2 Nail Art Black Stars on Light Base"
      },
      {
        src: "/treatments/level2/level2.5.jpeg",
        alt: "Level 2 Nail Art Red Gel Polish with Black Lines"
      },
      {
        src: "/treatments/level2/level2.6.png",
        alt: "Level 2 Nail Art Light Blue Chrome Gel Polish"
      },
    ],
    desc: "Elevate your everyday style with classic nail designs. This option offers timeless elegance with choices like crisp French tips, sleek chrome finishes, or soft and subtle airbrush designs. Perfect for a polished look that's always in style. For inspiration, browse the pictures or check out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat Boring",
    price: "Price of treatment + € 20",
    imgs: [
      {
        src: "/treatments/level3/level3.2.jpeg",
        alt: "Level 3 Nail Art Light Yellow Chrome Gel Polish with Abstract Shapes"
      },
      {
        src: "/treatments/level3/level3.1.jpeg",
        alt: "Level 3 Nail Art Black French and White Star Shape on Top"
      },
      {
        src: "/treatments/level3/level3.3.jpeg",
        alt: "Level 3 Nail Art Blue to Pink Gradient Matte Gel Polish"
      },
      {
        src: "/treatments/level3/level3.4.jpeg",
        alt: "Level 3 Nail Art Grey Shiny Gel Polish with Cool Shapes"
      },
      {
        src: "/treatments/level3/level3.5.jpeg",
        alt: "Level 3 Nail Art Natural Base Cross Shape"
      },
      {
        src: "/treatments/level3/level3.6.jpeg",
        alt: "Level 3 Nail Art Natural Base with Blue Flames"
      },
      {
        src: "/treatments/level3/level3.7.png",
        alt: "Level 3 Nail Art Light Pink with Airbrush and Abstract Shapes on Top"
      },
    ],
    desc: "Experience the artistry of combined techniques. This service brings together a range of nail art methods to achieve stunning results. We'll blend techniques like French, chrome, and airbrushing to create depth and dimension, then add intricate details and embellishments such as 3D elements or carefully placed gems for a truly textured and dynamic design.",
    color: "secondary"
  },
  {
    category: "Nail Art",
    title: "Definitely Nat Boring",
    price: "Price of treatment + € 30",
    imgs: [
      {
        src: "/treatments/level4/level4.3.jpeg",
        alt: "Level 4 Nail Art Light Pink and Light Green together with Custom Abstract Shapes On Top"
      },
      {
        src: "/treatments/level4/level4.1.jpeg",
        alt: "Level 4 Nail Art Grey Chrome Gel Polish with Abstract Shapes on Top"
      },
      {
        src: "/treatments/level4/level4.2.jpeg",
        alt: "Level 4 Nail Art Rainbow Colors with Glitter Effect Bubbles on Top"
      },
      {
        src: "/treatments/level4/level4.4.jpeg",
        alt: "Level 4 Nail Art Natural Base with Tattoo and Piercing Design"
      },
      {
        src: "/treatments/level4/level4.5.jpeg",
        alt: "Level 4 Nail Art Dark Blue Chrome Gel Polish with Subtle Flame Effect"
      },
      {
        src: "/treatments/level4/level4.6.png",
        alt: "Level 4 Nail Art Complex Design with Blue and Green Gel Polish"
      },
    ],
    desc: "Transform your nails into a work of art. This option is perfect for those who want something truly special and highly personalized. We'll begin with a thorough consultation to discuss your ideas, preferences, and inspirations. From there, I'll create custom designs with meticulous attention to detail, resulting in intricate, one-of-a-kind nail art that you'll cherish.",
    color: "secondary"
  },
  {
    category: "",
    title: "Removal",
    price: "€ 10",
    imgs: [
      {
        src: "/treatments/removal.jpg",
        alt: "Removal of Existing Nail Art"
      },
    ],
    desc: "To keep your nails in the best shape, I use a soak off method where I first file a small layer of product. And then soak the product in a remover which makes it easy to take off.",
    color: "white"
  },
];

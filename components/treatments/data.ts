export interface Item {
  category: string;
  title: string;
  price: string;
  imgs: string[];
  desc: string;
  color: string;
}

export const items: Item[] = [
  {
    category: "Treatment",
    title: "Gel Polish",
    price: "€ 45",
    imgs: [
      "/treatments/gel-polish-treatment.png",
      "/treatments/biab-treatment.png",
      "/treatments/basic-nail-art.png",
      "/treatments/medium-nail-art.png",
      "/treatments/extra-nail-art.png",
      "/treatments/custom-nail-art.png",
    ],
    desc: "This service provides essential nail care and a perfect base for color. It includes an extended manicure with detailed cuticle care and shaping to your preferred style, followed by a professional application of your chosen color. You can enhance your manicure with unique designs; additional nail art designs can be selected from the nail art menu.",
    color: "primary"
  },
  {
    category: "Treatment",
    title: "BIAB Natural",
    price: "€ 60",
    imgs: [
      "/treatments/biab-treatment.png",
    ],
    desc: "Discover the secret to strong, healthy, natural nails with BIAB treatment. This revolutionary technique reinforces your nails, allowing them to grow longer and stronger without breakage. Your treatment includes an extended manicure for flawless results.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Almost Boring",
    price: "Price of treatment + € 10",
    imgs: [
      "/treatments/basic-nail-art.png",
    ],
    desc: "Express yourself with fun and colorful nail designs. This service offers a range of creative options, from vibrant multi-color designs and playful dots to eye-catching foils, trendy glazed looks, and simple, elegant line work. Find inspiration for your next manicure by browsing the pictures or checking out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat So Boring",
    price: "Price of treatment + € 15",
    imgs: [
      "/treatments/medium-nail-art.png",
    ],
    desc: "Elevate your everyday style with classic nail designs. This option offers timeless elegance with choices like crisp French tips, sleek chrome finishes, or soft and subtle airbrush designs. Perfect for a polished look that's always in style. For inspiration, browse the pictures or check out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat Boring",
    price: "Price of treatment + € 20",
    imgs: [
      "/treatments/extra-nail-art.png",
    ],
    desc: "Experience the artistry of combined techniques. This service brings together a range of nail art methods to achieve stunning results. We'll blend techniques like French, chrome, and airbrushing to create depth and dimension, then add intricate details and embellishments such as 3D elements or carefully placed gems for a truly textured and dynamic design.",
    color: "secondary"
  },
  {
    category: "Nail Art",
    title: "Definitely Nat Boring",
    price: "Price of treatment + € 30",
    imgs: [
      "/treatments/custom-nail-art.png",
    ],
    desc: "Transform your nails into a work of art. This option is perfect for those who want something truly special and highly personalized. We'll begin with a thorough consultation to discuss your ideas, preferences, and inspirations. From there, I'll create custom designs with meticulous attention to detail, resulting in intricate, one-of-a-kind nail art that you'll cherish.",
    color: "secondary"
  },
  {
    category: "",
    title: "Removal",
    price: "€ 10",
    imgs: ["/treatments/removal.jpg"],
    desc: "To keep your nails in the best shape, I use a soak off method where I first file a small layer of product. And then soak the product in a remover which makes it easy to take off.",
    color: "white"
  },
];

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
    title: "BIAB Natural",
    price: "€ 60",
    imgs: [
      "/treatments/biab1/biab1.2.png",
      "/treatments/biab1/biab1.1.jpeg",
    ],
    desc: "Discover the secret to strong, healthy, natural nails with BIAB treatment. This revolutionary technique reinforces your nails, allowing them to grow longer and stronger without breakage. Your treatment includes an extended manicure for flawless results.",
    color: "primary"
  },
  {
    category: "Treatment",
    title: "BIAB + Color",
    price: "€ 75",
    imgs: [
      "/treatments/biab2/biab2.3.jpeg",
      "/treatments/biab2/biab2.1.jpeg",
      "/treatments/biab2/biab2.2.jpeg",
      "/treatments/biab2/biab2.4.jpeg",
    ],
    desc: "Combine the strength of BIAB with your favorite gel polish color. This treatment provides a durable BIAB base to promote healthy nail growth and prevent breakage, finished with a flawless gel polish application in your chosen shade for long-lasting color.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Almost Boring",
    price: "Price of treatment + € 10",
    imgs: [
      "/treatments/level1/level1.6.png",
      "/treatments/level1/level1.1.jpeg",
      "/treatments/level1/level1.2.jpeg",
      "/treatments/level1/level1.3.jpeg",
      "/treatments/level1/level1.4.jpeg",
      "/treatments/level1/level1.5.jpeg",
    ],
    desc: "Express yourself with fun and colorful nail designs. This service offers a range of creative options, from vibrant multi-color designs and playful dots to eye-catching foils, trendy glazed looks, and simple, elegant line work. Find inspiration for your next manicure by browsing the pictures or checking out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat So Boring",
    price: "Price of treatment + € 15",
    imgs: [
      "/treatments/level2/level2.3.jpeg",
      "/treatments/level2/level2.1.jpeg",
      "/treatments/level2/level2.2.jpeg",
      "/treatments/level2/level2.4.jpeg",
      "/treatments/level2/level2.5.jpeg",
      "/treatments/level2/level2.6.png",
    ],
    desc: "Elevate your everyday style with classic nail designs. This option offers timeless elegance with choices like crisp French tips, sleek chrome finishes, or soft and subtle airbrush designs. Perfect for a polished look that's always in style. For inspiration, browse the pictures or check out my Instagram page.",
    color: "primary"
  },
  {
    category: "Nail Art",
    title: "Nat Boring",
    price: "Price of treatment + € 20",
    imgs: [
      "/treatments/level3/level3.2.jpeg",
      "/treatments/level3/level3.1.jpeg",
      "/treatments/level3/level3.3.jpeg",
      "/treatments/level3/level3.4.jpeg",
      "/treatments/level3/level3.5.jpeg",
      "/treatments/level3/level3.6.jpeg",
      "/treatments/level3/level3.7.png",
    ],
    desc: "Experience the artistry of combined techniques. This service brings together a range of nail art methods to achieve stunning results. We'll blend techniques like French, chrome, and airbrushing to create depth and dimension, then add intricate details and embellishments such as 3D elements or carefully placed gems for a truly textured and dynamic design.",
    color: "secondary"
  },
  {
    category: "Nail Art",
    title: "Definitely Nat Boring",
    price: "Price of treatment + € 30",
    imgs: [
      "/treatments/level4/level4.3.jpeg",
      "/treatments/level4/level4.1.jpeg",
      "/treatments/level4/level4.2.jpeg",
      "/treatments/level4/level4.4.jpeg",
      "/treatments/level4/level4.5.jpeg",
      "/treatments/level4/level4.6.png",
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

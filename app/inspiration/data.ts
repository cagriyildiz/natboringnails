export interface CardData {
  frontImage: string;
  title: string;
  description: string;
}

interface CategoryData {
  id: string;
  name: string;
  description: string;
  cards: CardData[];
}

export const categories: CategoryData[] = [
  {
    id: 'level1',
    name: 'Almost Boring',
    description: '**Design Level 1:** This tier is ideal for clients who want a touch of visual interest without going over the top. It includes simple yet stylish techniques like multi-color designs across all nails, chic dot placement, the shimmer of metallic foils, a trendy glazed donut finish, or elegant, minimalist lines. It\'s the go-to for adding quick personality to your manicure.',
    cards: [
      {
        frontImage: '/treatments/level1/level1.1.jpeg',
        title: 'Dreamy Holographic Pastels',
        description: 'This design blends soft pastels with subtle holographic accents, perfect for a dreamy, ethereal look. Uses gel extensions with iridescent flakes.',
      },
      {
        frontImage: '/treatments/level1/level1.2.jpeg',
        title: 'Spring Blossom Elegance',
        description: 'Delicate floral patterns with intricate hand-painted details, inspired by springtime blossoms. Perfect for a natural, elegant feel on oval nails.',
      },
      {
        frontImage: '/treatments/level1/level1.3.jpeg',
        title: 'Abstract Artistic Strokes',
        description: 'Abstract brush strokes in vibrant hues capture dynamic energy and artistic freedom. Each nail is a unique canvas, using multiple vibrant polishes.',
      },
      {
        frontImage: '/treatments/level1/level1.4.jpeg',
        title: 'Simple Glossy Finish',
        description: 'A clean and classic glossy finish for everyday elegance.',
      },
      {
        frontImage: '/treatments/level1/level1.5.jpeg',
        title: 'Subtle Glitter Accent',
        description: 'A touch of glitter on one nail for a subtle sparkle.',
      },
      {
        frontImage: '/treatments/level1/level1.6.png',
        title: 'Subtle Glitter Accent',
        description: 'A touch of glitter on one nail for a subtle sparkle.',
      },
    ],
  },
  {
    id: 'level2',
    name: 'Nat So Boring',
    description: '**Design Level 2:** This category is reserved for timeless, highly sought-after designs that require precision and steady hands. Services include the flawlessly executed French tips (whether classic white or colored), a mirror-like chrome powder finish for a high-impact shine, or simple, soft-focus airbrush gradient effects that add a professional, modern twist to your polish.',
    cards: [
      {
        frontImage: '/treatments/level2/level2.1.jpeg',
        title: 'Modern Geometric Statement',
        description: 'Bold geometric shapes in contrasting colors create a modern and striking statement. Achieved with precision striping tape and matte top coat.',
      },
      {
        frontImage: '/treatments/level2/level2.2.jpeg',
        title: 'Futuristic Chrome Finish',
        description: 'Chrome finish nails in a rich, metallic shade, offering a futuristic and glamorous appeal. Applied with chrome powder over a dark base coat.',
      },
      {
        frontImage: '/treatments/level2/level2.3.jpeg',
        title: 'Ombre Sunset Nails',
        description: 'Smooth gradient from warm to cool tones resembling a sunset.',
      },
      {
        frontImage: '/treatments/level2/level2.4.jpeg',
        title: 'Modern Geometric Statement',
        description: 'Bold geometric shapes in contrasting colors create a modern and striking statement. Achieved with precision striping tape and matte top coat.',
      },
      {
        frontImage: '/treatments/level2/level2.5.jpeg',
        title: 'Futuristic Chrome Finish',
        description: 'Chrome finish nails in a rich, metallic shade, offering a futuristic and glamorous appeal. Applied with chrome powder over a dark base coat.',
      },
      {
        frontImage: '/treatments/level2/level2.6.png',
        title: 'Ombre Sunset Nails',
        description: 'Smooth gradient from warm to cool tones resembling a sunset.',
      },
    ],
  },
  {
    id: 'level3',
    name: 'Nat Boring',
    description: '**Design Level 3:** This is where we combine artistic elements to create a truly unique look. The Nat Boring level involves the combination of multiple advanced techniques on all 10 nails, such as detailed line work, delicate marble effects, complex layering, the addition of subtle 3D elements, or the precise placement of high-quality gems and crystals for a touch of sparkle and dimension.',
    cards: [
      {
        frontImage: '/treatments/level3/level3.1.jpeg',
        title: 'Dreamy Holographic Pastels',
        description: 'This design blends soft pastels with subtle holographic accents, perfect for a dreamy, ethereal look. Uses gel extensions with iridescent flakes.',
      },
      {
        frontImage: '/treatments/level3/level3.2.jpeg',
        title: 'Spring Blossom Elegance',
        description: 'Delicate floral patterns with intricate hand-painted details, inspired by springtime blossoms. Perfect for a natural, elegant feel on oval nails.',
      },
      {
        frontImage: '/treatments/level3/level3.3.jpeg',
        title: 'Abstract Artistic Strokes',
        description: 'Abstract brush strokes in vibrant hues capture dynamic energy and artistic freedom. Each nail is a unique canvas, using multiple vibrant polishes.',
      },
      {
        frontImage: '/treatments/level3/level3.4.jpeg',
        title: 'Simple Glossy Finish',
        description: 'A clean and classic glossy finish for everyday elegance.',
      },
      {
        frontImage: '/treatments/level3/level3.5.jpeg',
        title: 'Subtle Glitter Accent',
        description: 'A touch of glitter on one nail for a subtle sparkle.',
      },
      {
        frontImage: '/treatments/level3/level3.6.jpeg',
        title: 'Subtle Glitter Accent',
        description: 'A touch of glitter on one nail for a subtle sparkle.',
      },
      {
        frontImage: '/treatments/level3/level3.7.png',
        title: 'Subtle Glitter Accent',
        description: 'A touch of glitter on one nail for a subtle sparkle.',
      },
    ],
  },
  {
    id: 'level4',
    name: 'Definitely Nat Boring',
    description: '**Design Level 4:** Reserved for the client who knows exactly what they want or wants a full custom artistic vision brought to life. This top-tier option covers complex, time-consuming artwork, hand-painted illustrations, cartoon characters, detailed portraiture, or any design that requires the maximum amount of skill and dedication. You will receive truly bespoke nail art that is guaranteed to turn heads.',
    cards: [
      {
        frontImage: '/treatments/level4/level4.1.jpeg',
        title: 'Intricate Hand-Painted Scenes',
        description: 'Miniature masterpieces painted directly onto the nail, perfect for custom themes and unparalleled detail.',
      },
      {
        frontImage: '/treatments/level4/level4.2.jpeg',
        title: 'Gemstone Encrusted Design',
        description: 'Luxurious design featuring carefully placed gemstones and crystals.',
      },
      {
        frontImage: '/treatments/level4/level4.3.jpeg',
        title: 'Intricate Hand-Painted Scenes',
        description: 'Miniature masterpieces painted directly onto the nail, perfect for custom themes and unparalleled detail.',
      },
      {
        frontImage: '/treatments/level4/level4.4.jpeg',
        title: 'Gemstone Encrusted Design',
        description: 'Luxurious design featuring carefully placed gemstones and crystals.',
      },
      {
        frontImage: '/treatments/level4/level4.5.jpeg',
        title: 'Intricate Hand-Painted Scenes',
        description: 'Miniature masterpieces painted directly onto the nail, perfect for custom themes and unparalleled detail.',
      },
      {
        frontImage: '/treatments/level4/level4.6.png',
        title: 'Gemstone Encrusted Design',
        description: 'Luxurious design featuring carefully placed gemstones and crystals.',
      },
    ],
  },
];
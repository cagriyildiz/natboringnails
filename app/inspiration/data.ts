export interface CardData {
  frontImage: string;
  title: string;
  description: string;
}

interface CategoryData {
  id: string;
  name: string;
  cards: CardData[];
}

export const categories: CategoryData[] = [
  {
    id: 'level1',
    name: 'Almost Boring',
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
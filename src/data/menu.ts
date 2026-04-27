export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string | null;
  allergens: string[];
  isPopular: boolean;
  isVegan?: boolean;
  isCeliac?: boolean;
}

export const CATEGORIES = [
  "Destacados",
  "Entrantes",
  "Carnes a la Brasa",
  "Arroces",
  "Pescados",
  "Postres",
  "Cava de Vinos",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: "Entrantes",
    name: "Croquetas de Jamón Ibérico 'Reserva de la Casa'",
    description: "Bechamel infusionada durante 12 horas con hueso de Jamón Ibérico de Bellota, con un rebozado extra crujiente.",
    price: 14.50,
    image: null,
    allergens: ["Gluten", "Lácteos"],
    isPopular: true,
  },
  {
    id: 2,
    category: "Entrantes",
    name: "Berenjenas Crujientes con Miel de Caña",
    description: "Finos bastones de berenjera en tempura ligera, servidas con un toque de miel de caña de Frigiliana.",
    price: 11.00,
    image: null,
    allergens: ["Vegano"],
    isPopular: false,
    isVegan: true
  },
  {
    id: 10,
    category: "Carnes a la Brasa",
    name: "Chuletón de Vaca Vieja (Maduración 45 días)",
    description: "Corte seleccionado por nuestra carnicería de confianza, asado lentamente sobre brasa de encina milenaria y sal en escamas.",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
    allergens: ["Sin Gluten"],
    isPopular: true,
    isCeliac: true
  },
  {
    id: 20,
    category: "Arroces",
    name: "Paella de Marisco Fino 'Las Viñas'",
    description: "Arroz bomba D.O. levante, con gamba roja de lonja, sepia y nuestro sofrito tradicional de tres horas.",
    price: 21.00,
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=600&auto=format&fit=crop",
    allergens: ["Marisco"],
    isPopular: true,
    isCeliac: true
  },
  // Añadiremos más platos de forma dinámica aquí...
];

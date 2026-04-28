export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number | null;
  image: string | null;
  allergens: string[];
  isPopular: boolean;
  isVegan?: boolean;
  isCeliac?: boolean;
}

export const CATEGORIES = [
  "Destacados",
  "Entrantes Fríos",
  "Entrantes Calientes",
  "Nuestras Brasas",
  "Pescados y Mariscos",
  "Arroces y Pastas",
  "Para los Peques",
  "Postres Caseros"
];

export const MENU_ITEMS: MenuItem[] = [
  // Entrantes Fríos
  { id: 1, category: "Entrantes Fríos", name: "Jamón Ibérico de Bellota", description: "Ración de nuestro mejor jamón ibérico 100% de bellota, cortado a cuchillo.", price: 22.00, image: null, allergens: [], isPopular: true },
  { id: 2, category: "Entrantes Fríos", name: "Queso Añejo Puro de Oveja", description: "Curación de 12 meses, servido con picos rústicos.", price: 14.00, image: null, allergens: ["Lácteos", "Gluten"], isPopular: false },
  { id: 3, category: "Entrantes Fríos", name: "Ensalada Especial Las Viñas", description: "Mezclum de lechugas, tomate rosa, ventresca de atún, cebolla caramelizada y frutos secos.", price: 14.00, image: null, allergens: ["Pescado", "FrutosSecos", "Sulfitos"], isPopular: false },
  { id: 4, category: "Entrantes Fríos", name: "Tomate de la Huerta con Ventresca", description: "Tomate aliñado con nuestro AOVE premium y lascas de sal.", price: 12.00, image: null, allergens: ["Pescado"], isPopular: false },
  { id: 5, category: "Entrantes Fríos", name: "Lomo de Orza Tradicional", description: "Macerado en AOVE y especias, receta tradicional de Baeza.", price: 14.00, image: null, allergens: [], isPopular: true },
  { id: 6, category: "Entrantes Fríos", name: "Tataki de Atún Rojo Salvaje", description: "Sobre cama de alga wakame y reducción de soja.", price: 18.00, image: null, allergens: ["Pescado", "Soja", "Sésamo"], isPopular: true },

  // Entrantes Calientes
  { id: 10, category: "Entrantes Calientes", name: "Croquetas Caseras de Jamón Ibérico", description: "Crujientes por fuera y súper melosas por dentro (6 uds).", price: 12.00, image: null, allergens: ["Gluten", "Lácteos", "Huevos"], isPopular: true },
  { id: 11, category: "Entrantes Calientes", name: "Gamba Blanca de Huelva a la Plancha", description: "Fresquísimas, vuelta y vuelta a la plancha.", price: 26.00, image: "/gambas.jpg.jpg", allergens: ["Marisco", "Sulfitos"], isPopular: true },
  { id: 12, category: "Entrantes Calientes", name: "Berenjenas Fritas con Miel de Caña", description: "Corte fino y crujiente, un clásico andaluz.", price: 12.00, image: null, allergens: ["Gluten"], isPopular: false, isVegan: true },
  { id: 13, category: "Entrantes Calientes", name: "Mollejas de Cordero Lechal al Ajillo", description: "Salteadas a fuego fuerte con ajos dorados.", price: 18.00, image: null, allergens: ["Sulfitos"], isPopular: false },
  { id: 14, category: "Entrantes Calientes", name: "Puntillitas de Sanlúcar Fritas", description: "Rebozadas en harina de garbanzo y fritas en AOVE limpio.", price: 18.00, image: null, allergens: ["Marisco", "Gluten"], isPopular: false },
  { id: 15, category: "Entrantes Calientes", name: "Boquerones Fritos al Limón", description: "Pescado del día con un toque cítrico.", price: 14.00, image: null, allergens: ["Pescado", "Gluten"], isPopular: false },
  { id: 16, category: "Entrantes Calientes", name: "Pulpo a la Gallega con Cachelos", description: "Pulpo tierno cocido en su punto, pimentón de la Vera.", price: 22.00, image: null, allergens: ["Marisco"], isPopular: true },
  
  // Nuestras Brasas
  { id: 20, category: "Nuestras Brasas", name: "Chuletón de Vaca Madurada (1,1 Kg)", description: "Corte premium seleccionado, 45 días de maduración, asado en brasa de encina.", price: 68.00, image: "/chuleton.jpg.jpg", allergens: [], isPopular: true },
  { id: 21, category: "Nuestras Brasas", name: "Cochinillo Asado al Estilo Segoviano", description: "Piel crujiente, carne tierna que se deshace, servido en su jugo.", price: 24.00, image: "/cochinillo al horno.jpg.jpg", allergens: ["Sulfitos"], isPopular: true },
  { id: 22, category: "Nuestras Brasas", name: "Entrecot de Ternera a la Parrilla", description: "Corte jugoso y tierno de ternera local (aprox. 400g).", price: 22.00, image: null, allergens: [], isPopular: false },
  { id: 23, category: "Nuestras Brasas", name: "Secreto Ibérico de Bellota", description: "Hecho a la brasa con sal en escamas y guarnición de patatas a lo pobre.", price: 18.00, image: null, allergens: [], isPopular: true },
  { id: 24, category: "Nuestras Brasas", name: "Pluma Ibérica Glaseada", description: "Corte exquisito del cerdo ibérico.", price: 20.00, image: null, allergens: ["Soja"], isPopular: false },
  { id: 25, category: "Nuestras Brasas", name: "Paletilla de Cabrito Lechal", description: "Asado lento a baja temperatura, terminado en brasas.", price: 28.00, image: "/paletilla.jpg.jpg", allergens: [], isPopular: false },
  { id: 26, category: "Nuestras Brasas", name: "Solomillo de Ternera al Foie", description: "Con reducción de vino Pedro Ximénez.", price: 24.00, image: null, allergens: ["Lácteos", "Sulfitos"], isPopular: true },

  // Pescados y Mariscos
  { id: 30, category: "Pescados y Mariscos", name: "Rodaballo Salvaje a la Plancha", description: "Lomo limpio con guarnición de verduritas salteadas.", price: 22.00, image: "/rodaballo.jpg.jpg", allergens: ["Pescado"], isPopular: true },
  { id: 31, category: "Pescados y Mariscos", name: "Bacalao al Pil-Pil o al Ajillo", description: "Lomo de bacalao confitado a baja temperatura.", price: 19.00, image: null, allergens: ["Pescado"], isPopular: false },
  { id: 32, category: "Pescados y Mariscos", name: "Lubina a la Espalda", description: "Al horno con sofrito de ajos y guindilla.", price: 18.00, image: null, allergens: ["Pescado"], isPopular: false },
  { id: 33, category: "Pescados y Mariscos", name: "Calamar de Potera a la Brasa", description: "Calamar fresco tocado por la parrilla con alioli de ajo negro.", price: null, image: null, allergens: ["Marisco", "Huevos"], isPopular: true }, // Precio S/M

  // Arroces y Pastas
  { id: 40, category: "Arroces y Pastas", name: "Arroz con Carabineros", description: "Meloso, con un sabor a marisco profundo. (Mínimo 2 pax, precio por persona)", price: 18.00, image: null, allergens: ["Marisco", "Pescado", "Sulfitos"], isPopular: true },
  { id: 41, category: "Arroces y Pastas", name: "Paella Ciega de Mariscos", description: "Todo pelado, listo para disfrutar. (Mínimo 2 pax, precio por persona)", price: 15.00, image: null, allergens: ["Marisco", "Pescado", "Sulfitos"], isPopular: false },
  { id: 42, category: "Arroces y Pastas", name: "Fideuá de Pescadores", description: "Fideo fino tostado y alioli suave. (Mínimo 2 pax, precio por persona)", price: 14.00, image: null, allergens: ["Gluten", "Marisco", "Pescado", "Huevos"], isPopular: false },
  
  // Para los Peques
  { id: 50, category: "Para los Peques", name: "Hamburguesa Completa de Ternera", description: "150g de ternera con queso, bacon y patatas fritas.", price: 8.50, image: null, allergens: ["Gluten", "Lácteos", "Huevos"], isPopular: false },
  { id: 51, category: "Para los Peques", name: "Fingers de Pollo Empanados", description: "Crujientes tiritas de pechuga con patatas.", price: 7.50, image: null, allergens: ["Gluten", "Huevos"], isPopular: false },
  { id: 52, category: "Para los Peques", name: "Macarrones con Tomate y Queso", description: "Un clásico infalible.", price: 6.50, image: null, allergens: ["Gluten", "Lácteos"], isPopular: false },

  // Postres Caseros
  { id: 60, category: "Postres Caseros", name: "Tarta de Queso Fluida", description: "Nuestra famosa tarta de queso horneada, con corazón derretido.", price: 6.50, image: null, allergens: ["Gluten", "Lácteos", "Huevos"], isPopular: true },
  { id: 61, category: "Postres Caseros", name: "Brownie de Chocolate con Helado", description: "Servido caliente con helado de vainilla artesanal.", price: 6.00, image: null, allergens: ["Gluten", "Lácteos", "Huevos", "FrutosSecos"], isPopular: true },
  { id: 62, category: "Postres Caseros", name: "Leche Frita Tradicional", description: "Receta de la abuela, con un toque de canela.", price: 5.50, image: null, allergens: ["Gluten", "Lácteos", "Huevos"], isPopular: false },
  { id: 63, category: "Postres Caseros", name: "Coulant de Chocolate Blanco", description: "Para los más golosos, espectacular contraste térmico.", price: 6.50, image: null, allergens: ["Gluten", "Lácteos", "Huevos", "Soja"], isPopular: false }
];

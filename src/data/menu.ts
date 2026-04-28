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
  "Entrantes",
  "Pescados",
  "Carnes",
  "Arroces y Pasta",
  "Infantil",
  "Postres"
];

export const MENU_ITEMS: MenuItem[] = [
  // Destacados (we will flag some items from the main list as isPopular: true, so no need to duplicate them here, our filter handles it)
  
  // Entrantes
  { id: 1, category: "Entrantes", name: "Jamón ibérico", description: "Ración de nuestro mejor jamón ibérico.", price: 18.00, image: null, allergens: [], isPopular: true },
  { id: 2, category: "Entrantes", name: "Queso añejo", description: "", price: 12.00, image: null, allergens: ["Lácteos"], isPopular: false },
  { id: 3, category: "Entrantes", name: "Gamba blanca a la plancha", description: "", price: 26.00, image: null, allergens: ["Marisco"], isPopular: true },
  { id: 4, category: "Entrantes", name: "Ensalada de la casa", description: "", price: 8.00, image: null, allergens: [], isPopular: false, isVegan: true },
  { id: 5, category: "Entrantes", name: "Tomate con Ventresca", description: "", price: 12.00, image: null, allergens: ["Pescado"], isPopular: false },
  { id: 6, category: "Entrantes", name: "Lomo de orza", description: "", price: 14.00, image: null, allergens: [], isPopular: false },
  { id: 7, category: "Entrantes", name: "Croquetas de Jamón Ibérico", description: "Caseras y crujientes.", price: 12.00, image: null, allergens: ["Gluten", "Lácteos"], isPopular: true },
  { id: 8, category: "Entrantes", name: "Wok de Verduras con ibérico", description: "", price: 16.00, image: null, allergens: [], isPopular: false },
  { id: 9, category: "Entrantes", name: "Boquerones", description: "", price: 16.00, image: null, allergens: ["Pescado", "Gluten"], isPopular: false },
  { id: 10, category: "Entrantes", name: "Berenjenas con Miel", description: "", price: 12.00, image: null, allergens: ["Gluten"], isPopular: false, isVegan: true },
  { id: 11, category: "Entrantes", name: "Chipirones", description: "", price: 20.00, image: null, allergens: ["Marisco"], isPopular: false },
  { id: 12, category: "Entrantes", name: "Mollejas de cordero al ajillo", description: "", price: 18.00, image: null, allergens: [], isPopular: false },
  { id: 13, category: "Entrantes", name: "Pulpo a la gallega o a la Brasa", description: "", price: 24.00, image: null, allergens: ["Marisco"], isPopular: true },
  { id: 14, category: "Entrantes", name: "Puntillitas", description: "", price: 18.00, image: null, allergens: ["Marisco", "Gluten"], isPopular: false },
  { id: 15, category: "Entrantes", name: "Pan Bao con Rabo de Toro", description: "", price: 16.00, image: null, allergens: ["Gluten"], isPopular: false },
  { id: 16, category: "Entrantes", name: "Tataki de Atún", description: "", price: 12.00, image: null, allergens: ["Pescado", "Gluten"], isPopular: false },

  // Pescados
  { id: 20, category: "Pescados", name: "Gallo Pedro a la Romana", description: "", price: 19.00, image: null, allergens: ["Pescado", "Gluten"], isPopular: false },
  { id: 21, category: "Pescados", name: "Bacalao al Ajillo con Gambón", description: "", price: 19.00, image: null, allergens: ["Pescado", "Marisco"], isPopular: true },
  { id: 22, category: "Pescados", name: "Calamar a la Brasa", description: "Consultar precio según mercado.", price: null, image: null, allergens: ["Marisco"], isPopular: false },
  { id: 23, category: "Pescados", name: "Lubina a la Espada", description: "", price: 18.00, image: null, allergens: ["Pescado"], isPopular: false },
  { id: 24, category: "Pescados", name: "Rodaballo", description: "", price: 19.00, image: null, allergens: ["Pescado"], isPopular: false },

  // Carnes
  { id: 30, category: "Carnes", name: "Solomillo de cerdo Ibérico al jerez", description: "", price: 16.00, image: null, allergens: [], isPopular: false },
  { id: 31, category: "Carnes", name: "Cachopo con Queso (Para 2 personas)", description: "", price: 22.00, image: null, allergens: ["Gluten", "Lácteos"], isPopular: true },
  { id: 32, category: "Carnes", name: "Solomillo de Ternera al Foie", description: "", price: 22.00, image: null, allergens: ["Lácteos"], isPopular: true },
  { id: 33, category: "Carnes", name: "Lagarto, Pluma o Secreto Ibérico a la Brasa", description: "", price: 20.00, image: null, allergens: [], isPopular: false },
  { id: 34, category: "Carnes", name: "Entrecot de Vaca Madurada", description: "", price: 20.00, image: null, allergens: [], isPopular: false },
  { id: 35, category: "Carnes", name: "Chuletón Vaca Madurada 1'1 Kg", description: "Corte seleccionado por nuestra carnicería de confianza, asado lentamente sobre brasa de encina.", price: 68.00, image: null, allergens: [], isPopular: true },
  { id: 36, category: "Carnes", name: "Rabo de Toro", description: "", price: 18.00, image: null, allergens: [], isPopular: false },
  { id: 37, category: "Carnes", name: "Cochinillo Asado", description: "", price: 24.00, image: null, allergens: [], isPopular: true },

  // Arroces y Pasta
  { id: 40, category: "Arroces y Pasta", name: "Paella Mixta", description: "Por encargo. Precio por persona.", price: 8.00, image: null, allergens: ["Marisco"], isPopular: false },
  { id: 41, category: "Arroces y Pasta", name: "Paella de Pescados y Marisco", description: "Por encargo. Precio por persona.", price: 10.00, image: null, allergens: ["Pescado", "Marisco"], isPopular: false },
  { id: 42, category: "Arroces y Pasta", name: "Fideuá de pescado y mariscos", description: "Por encargo.", price: null, image: null, allergens: ["Gluten", "Pescado", "Marisco"], isPopular: false },

  // Infantil
  { id: 50, category: "Infantil", name: "Sandwich de jamón york y queso", description: "", price: 4.00, image: null, allergens: ["Gluten", "Lácteos"], isPopular: false },
  { id: 51, category: "Infantil", name: "Hamburguesa de ternera completa", description: "", price: 7.50, image: null, allergens: ["Gluten"], isPopular: false },
  { id: 52, category: "Infantil", name: "Pechuga Empanada", description: "", price: 7.00, image: null, allergens: ["Gluten"], isPopular: false },

  // Postres
  { id: 60, category: "Postres", name: "Tarta de la casa", description: "", price: 5.00, image: null, allergens: ["Gluten", "Lácteos"], isPopular: true },
  { id: 61, category: "Postres", name: "Helado", description: "", price: 5.00, image: null, allergens: ["Lácteos"], isPopular: false },
  { id: 62, category: "Postres", name: "Fruta de temporada", description: "", price: 5.00, image: null, allergens: [], isPopular: false },
];

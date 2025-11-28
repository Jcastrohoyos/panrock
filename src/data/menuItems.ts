export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  smokeTime?: string;
  woodType?: string;
}

export const menuItems: MenuItem[] = [
  // Cortes de Res
  {
    id: 1,
    category: 'Cortes de Res',
    name: 'Lomo de Res Ahumado',
    description: 'Jugoso lomo de res premium ahumado lentamente por 8 horas con una mezcla especial de especias. Corte tierno y lleno de sabor. Acompañado de guarnición y salsas de la casa.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '8 horas',
    woodType: 'Roble y Nogal'
  },
  
  // Cortes de Cerdo
  {
    id: 2,
    category: 'Cortes de Cerdo',
    name: 'Lomo de Cerdo Ahumado',
    description: 'Tierno lomo de cerdo marinado en hierbas finas y ahumado a la perfección. Jugoso por dentro con un exterior caramelizado. Incluye dos guarniciones a elección.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '6 horas',
    woodType: 'Manzano y Cerezo'
  },
  
  // Especialidades
  {
    id: 3,
    category: 'Especialidades',
    name: 'Lomo de Res con Costra de Hierbas',
    description: 'Exquisito lomo de res con una costra crujiente de hierbas provenzales, ahumado a baja temperatura. Una experiencia gourmet que resalta los sabores naturales de la carne.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '7 horas',
    woodType: 'Roble Francés'
  },
  
  {
    id: 4,
    category: 'Especialidades',
    name: 'Lomo de Cerdo con Miel y Mostaza',
    description: 'Tierno lomo de cerdo glaseado con una mezcla de miel y mostaza de Dijon, ahumado hasta alcanzar la perfección. Un equilibrio perfecto entre dulce y picante.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1601050690777-7b716b8f88f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '5 horas',
    woodType: 'Manzano y Miel'
  },

  // Nuevos ahumados
  {
    id: 5,
    category: 'Especialidades',
    name: 'Pechuga de Pavo Ahumada',
    description: 'Pechuga de pavo orgánico ahumada lentamente con mantequilla y hierbas. Baja en grasa y alta en proteínas, ideal para una comida saludable sin sacrificar sabor.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1606474406151-f7c184c6a7e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '4 horas',
    woodType: 'Manzano'
  },
  
  {
    id: 6,
    category: 'Cortes de Res',
    name: 'Costilla de Res Estilo Texas',
    description: 'Costilla de res estilo Texas, sazonada con nuestra mezcla secreta de especias y ahumada por 10 horas. Carne tan tierna que se desprende del hueso, con un sabor ahumado intenso.',
    price: 410,
    image: 'https://images.unsplash.com/photo-1555934045-4d5a35ec452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '10 horas',
    woodType: 'Roble y Mezquite'
  },
  
  {
    id: 7,
    category: 'Cortes de Cerdo',
    name: 'Costillas BBQ Ahumadas',
    description: 'Costillas de cerdo tiernas bañadas en nuestra salsa BBQ casera y ahumadas a la perfección. Un clásico que nunca pasa de moda, con un toque dulce y ahumado.',
    price: 370,
    image: 'https://images.unsplash.com/photo-1544025162-1a6e738e8d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    spicy: true,
    smokeTime: '6 horas',
    woodType: 'Manzano y Arce'
  },
  
  {
    id: 8,
    category: 'Aves',
    name: 'Pollo Ahumado Entero',
    description: 'Pollo entero marinado con hierbas y especias, ahumado lentamente hasta alcanzar una textura jugosa por dentro y una piel dorada y crujiente por fuera. Perfecto para compartir.',
    price: 430,
    image: 'https://images.unsplash.com/photo-1532550907401-a272aef46a3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '4 horas',
    woodType: 'Cerezo y Manzano'
  },
  
  {
    id: 9,
    category: 'Pescados',
    name: 'Salmón Ahumado en Frío',
    description: 'Lomos frescos de salmón noruego, curados con sal marina y azúcar morena, luego ahumados en frío con madera de manzano. Rico en ácidos grasos omega-3 y lleno de sabor.',
    price: 460,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35ec452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '12 horas',
    woodType: 'Manzano y Eneldo'
  },
  
  {
    id: 10,
    category: 'Cortes de Res',
    name: 'Punta de Pechuga Ahumada',
    description: 'Corte premium de punta de pechuga de res, marinado en cerveza negra y especias, ahumado lentamente hasta alcanzar la perfección. Jugosa, tierna y llena de sabor.',
    price: 400,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: false,
    smokeTime: '8 horas',
    woodType: 'Roble y Café'
  },
  
  {
    id: 11,
    category: 'Especialidades',
    name: 'Pulled Pork',
    description: 'Tierno cerdo desmenuzado, cocinado a fuego lento por 12 horas hasta lograr una textura perfecta. Servido con nuestra salsa BBQ casera y pan brioche tostado.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    smokeTime: '12 horas',
    woodType: 'Manzano y Miel'
  },
  
  {
    id: 12,
    category: 'Aves',
    name: 'Alas de Pollo Búfalo Ahumadas',
    description: 'Crujientes alas de pollo ahumadas y bañadas en salsa búfalo picante. El equilibrio perfecto entre el ahumado y el picante, servidas con aderezo de queso azul y apio fresco.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1569058242252-623df46b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    popular: true,
    spicy: true,
    smokeTime: '3 horas',
    woodType: 'Nogal y Chile Seco'
  }
];

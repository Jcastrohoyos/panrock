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
  {
    id: 1,
    category: 'Especialidades',
    name: 'Sándwich de Lomo de Cerdo Ahumado',
    description: 'Sándwich artesanal con jugoso lomo de cerdo ahumado, preparado lentamente para lograr un sabor intenso y una textura tierna.',
    price: 0,
    image: '/images/ahumado2.jfif',
    popular: true,
    smokeTime: 'A consulta',
    woodType: 'A consulta'
  },
  {
    id: 2,
    category: 'Ahumados',
    name: 'Lomo de Cerdo Ahumado',
    description: 'Lomo de cerdo ahumado lentamente, con corte jugoso y sabor tradicional. Disponible como producto completo; ideal para compartir.',
    price: 0,
    image: '/images/OIP.jfif',
    popular: true,
    smokeTime: 'A consulta',
    woodType: 'A consulta'
  }
];

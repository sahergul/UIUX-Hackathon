
interface MenuItem {
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
  export const DrinksItem: MenuItem[] = [
    {
      name: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Aperol Spritz Capacianno",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Tormentoso BushTea Pintoage",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ]
import type { LandingBlock } from '../types/landing';

export const mockLandingConfig: LandingBlock[] = [
  // 1. IMG
  { id: 'b1', type: 'image', src: '/defaults/01.jpeg', alt: 'Presentación Spray Propóleo' },
  
  // 2. COMPRAR AHORA
  {
    id: 'b2',
    type: 'button',
    text: '¡QUIERO HACER MI PEDIDO!',
    subtext: '🔥 Antes de que se agoten 🔥',
    variant: 'pulse',
  },
  
  // 3. ULTIMAS UNIDADES (Banner destacador)
  {
    id: 'b3',
    type: 'banner',
    src: '/defaults/08.jpeg',
    badgeText: '🔥 ¡ÚLTIMAS UNIDADES DISPONIBLES EN STOCK!',
  },
  
  // 4. IMG
  { id: 'b4', type: 'image', src: '/defaults/02.jpeg', alt: 'Beneficios Principales' },
  
  // 5. IMG
  { id: 'b5', type: 'image', src: '/defaults/03.jpeg', alt: 'Modo de Uso' },
  
  // 6. COMPRAR AHORA
  {
    id: 'b6',
    type: 'button',
    text: '¡QUIERO HACER MI PEDIDO!',
    subtext: '🔥 Antes de que se agoten 🔥',
    variant: 'pulse',
  },
  
  // 7. ULTIMAS UNIDADES
  {
    id: 'b7',
    type: 'banner',
    src: '/defaults/03.jpeg',
    badgeText: '⚡ ¡ÚLTIMAS UNIDADES CON PAGO CONTRA ENTREGA!',
  },
  
  // 8. BANNER
  {
    id: 'b8',
    type: 'banner',
    src: '/defaults/04.jpeg',
    badgeText: '🚚 ENVÍOS A TODO EL PAÍS',
  },
  
  // 9. IMG
  { id: 'b9', type: 'image', src: '/defaults/05.jpeg', alt: 'Testimonios de Clientes' },
  
  // 10. IMG
  { id: 'b10', type: 'image', src: '/defaults/06.jpeg', alt: 'Ingredientes Naturales' },
  
  // 11. IMG
  { id: 'b11', type: 'image', src: '/defaults/07.jpeg', alt: 'Garantía de Calidad' },
  
  // 12. COMPRAR AHORA
  {
    id: 'b12',
    type: 'button',
    text: '¡QUIERO HACER MI PEDIDO!',
    subtext: '🔥 Antes de que se agoten 🔥',
    variant: 'pulse',
  },
  
  // 13. ULTIMAS UNIDADES
  {
    id: 'b13',
    type: 'banner',
    src: '/defaults/08.jpeg',
    badgeText: '🔥 ÚLTIMAS UNIDADES CON 40% DE DESCUENTO',
  },
  
  // 14. IMG
  { id: 'b14', type: 'image', src: '/defaults/08.jpeg', alt: 'Certificación y Registro' },
  
  // 15. IMG
  { id: 'b15', type: 'image', src: '/defaults/09.jpeg', alt: 'Preguntas Frecuentes' },
  
  // 16. COMPRAR AHORA
  {
    id: 'b16',
    type: 'button',
    text: '¡QUIERO HACER MI PEDIDO!',
    subtext: '🔥 Antes de que se agoten 🔥',
    variant: 'pulse',
  },
  
  // 17. BANNER
  {
    id: 'b17',
    type: 'banner',
    src: '/defaults/03.jpeg',
    badgeText: '🛡️ GARANTÍA DE SATISFACCIÓN 100%',
  },
  
  // 18. IMG
  { id: 'b18', type: 'image', src: '/defaults/01.jpeg', alt: 'Spray Propóleo Promocional' },
  
  // 19. BANNER
  {
    id: 'b19',
    type: 'banner',
    src: '/defaults/04.jpeg',
    badgeText: '📦 PAGO CONTRA ENTREGA - RECIBE Y PAGA EN CASA',
  },
  
  // 20. COMPRAR AHORA
  {
    id: 'b20',
    type: 'button',
    text: '¡QUIERO HACER MI PEDIDO!',
    subtext: '🔥 Antes de que se agoten 🔥',
    variant: 'pulse',
  },
  
  // 21. BANNER
  {
    id: 'b21',
    type: 'banner',
    src: '/defaults/08.jpeg',
    badgeText: '⚡ ¡OFERTA POR TIEMPO LIMITADO!',
  },
];

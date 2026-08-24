export interface StoreConfig {
  apiOrderEndpoint: string;
  whatsappNumber: string; // Dynamic WhatsApp number for sellers
}

export const storeConfig: StoreConfig = {
  apiOrderEndpoint: '/api/order',
  whatsappNumber: '51987654321', // Default WhatsApp number if API doesn't return one
};

import type { APIRoute } from 'astro';

export const prerender = false; // Server-rendered API route

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // Log received lead data for debugging/monitoring
    console.log('[API /api/order] Lead recibido:', body);

    // Mock API response returning leadId and dynamic WhatsApp number for the seller
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Pedido registrado correctamente en estado NUEVO',
        leadId: `LEAD-${Date.now()}`,
        whatsappNumber: body.sellerWhatsapp || '51987654321', // Dynamic seller number
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('[API /api/order] Error al procesar pedido:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error al registrar pedido en la API',
        whatsappNumber: '51987654321',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

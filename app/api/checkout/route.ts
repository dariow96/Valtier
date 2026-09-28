import { rentalQuote } from '@/lib/commerce';
// Payment-provider integration boundary. Never trust client totals.
// Before enabling: replace sample inventory/pricing, hold availability atomically,
// create a provider checkout session and confirm payment via verified webhooks.
// Issue vouchers only after the agreed successful rental/payment event.
export async function POST(request: Request) {
  let input: unknown;
  try { input = await request.json(); } catch { return Response.json({error:'Invalid request'}, {status:400}); }
  if (!input || typeof input !== 'object') return Response.json({error:'Invalid request'}, {status:400});
  const {pieceId,start,end}=input as Record<string,unknown>;
  if (![pieceId,start,end].every(v=>typeof v==='string')) return Response.json({error:'Piece and rental dates are required'}, {status:400});
  try {
    const quote=rentalQuote(pieceId as string,start as string,end as string);
    return Response.json({status:'payments_not_configured',message:'Online bookings are not open yet. No reservation or payment was created.',quote}, {status:503,headers:{'Cache-Control':'no-store'}});
  } catch(error) {
    return Response.json({error:error instanceof Error?error.message:'Invalid rental'}, {status:400});
  }
}

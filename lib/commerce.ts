export const rentalPrices: Record<string, number> = { celeste: 35000, etoile: 18000, lumiere: 22000, aureole: 45000 };
export function rentalQuote(pieceId: string, start: string, end: string, now = new Date()) {
  const parse = (value: string) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error('Invalid date');
    const time = Date.parse(`${value}T00:00:00Z`);
    if (!Number.isFinite(time) || new Date(time).toISOString().slice(0,10) !== value) throw new Error('Invalid date');
    return time;
  };
  const startTime = parse(start), endTime = parse(end);
  const days = (endTime-startTime)/86400000;
  if (!Object.hasOwn(rentalPrices, pieceId)) throw new Error('Unknown piece');
  if (start < now.toISOString().slice(0,10)) throw new Error('Start date is in the past');
  if (days < 4 || days > 365) throw new Error('Choose a rental between 4 and 365 days');
  const amountCents = Math.round(rentalPrices[pieceId]*days/4);
  return { pieceId, start, end, days, amountCents, currency: 'EUR', voucherCents: amountCents };
}
export function purchaseQuote(fullPriceCents: number, voucherCents: number, withinThreeMonths: boolean) {
  if (![fullPriceCents,voucherCents].every(n=>Number.isSafeInteger(n)&&n>=0)) throw new Error('Invalid amount');
  const discountCents=withinThreeMonths?Math.round(fullPriceCents*.1):0;
  const appliedVoucherCents=Math.min(voucherCents,fullPriceCents-discountCents);
  return { discountCents, appliedVoucherCents, totalCents: fullPriceCents-discountCents-appliedVoucherCents };
}

export function toLocalDateTime(isoDate: string): string {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  return date.toLocaleString();
}

export function addComma(amount: number | string): string {
  if (!amount) return "";

  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const ASSISTANCE_PHONE_DISPLAY = "xxx-xxx-xxxx";
export const ASSISTANCE_PHONE_HREF = `tel:${ASSISTANCE_PHONE_DISPLAY}`;

export function countDaysBetween(start: string, end: string): number | null {
  if (!start || !end) return null;
  const startTime = Date.parse(`${start}T00:00:00Z`);
  const endTime = Date.parse(`${end}T00:00:00Z`);
  if (!Number.isFinite(startTime) || !Number.isFinite(endTime)) return null;
  return Math.round(Math.abs(endTime - startTime) / 86_400_000);
}

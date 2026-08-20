export const ELFSIGHT_REVIEWS_WIDGET_ID =
  process.env.NEXT_PUBLIC_ELFSIGHT_REVIEWS_WIDGET_ID ??
  "bf856b80-2675-4024-90e3-f3226d5a1141";

export function getElfsightWidgetClass(id: string): string {
  if (!id) return "";
  return id.startsWith("elfsight-app-") ? id : `elfsight-app-${id}`;
}

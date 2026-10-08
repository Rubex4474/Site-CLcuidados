// Fundação confirmada pelo cliente: janeiro de 2023.
const FOUNDING_DATE = new Date("2023-01-01T00:00:00-03:00");

/**
 * Anos completos desde a fundação, recalculado a cada render — a página
 * já tem `revalidate: 1d`, então esse número nunca fica desatualizado
 * manualmente (não precisa lembrar de bater o ano virado janeiro).
 */
export function getYearsInBusiness(): number {
  const now = new Date();
  let years = now.getFullYear() - FOUNDING_DATE.getFullYear();
  const hadAnniversaryThisYear =
    now.getMonth() > FOUNDING_DATE.getMonth() ||
    (now.getMonth() === FOUNDING_DATE.getMonth() && now.getDate() >= FOUNDING_DATE.getDate());
  if (!hadAnniversaryThisYear) years -= 1;
  return years;
}

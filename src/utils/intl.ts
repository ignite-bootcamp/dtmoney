export function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function formatDate(value: Date | number) {
  return Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  }).format(value);
}

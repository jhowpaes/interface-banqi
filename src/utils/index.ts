export function formatarValor(valor: any) {
  const valorFormatado = valor
    ? parseFloat(valor)
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    : '00,00';
  return valorFormatado;
}

export function generateUniqueKey() {
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
}
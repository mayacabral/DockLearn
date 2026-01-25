/**
 * Filtra array de objetos por múltiplos campos com busca case-insensitive.
 * 
 * @template T Tipo dos itens no array
 * @param items Array a filtrar
 * @param filters Objeto com {chave: valor} para filtrar
 * @param fields Chaves de T a considerar na filtragem
 * @returns Array filtrado
 * 
 * @example
 * filterItems(users, {name: 'john', age: 30}, ['name', 'age']);
 */
export function filterItems<T>(
  items: T[],
  filters: Partial<T>,
  fields: (keyof T)[]
): T[] {
  if (!items) return [];
  
  return items.filter(item => fields.some(field => {
    const filterValue = filters[field];
    if (!filterValue) return false;
    
    const itemValue = item[field];
    if (itemValue == null) return false;
    
    const strValue = typeof itemValue === 'object' 
      ? JSON.stringify(itemValue)
      : String(itemValue);
    
    return strValue.toLowerCase().includes(String(filterValue).toLowerCase());
  }));
}
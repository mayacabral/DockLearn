export interface Meta {
  total: number; // Total de inscrições
  porPagina: number; // Inscrições por página
  totalPaginas: number; // Total de páginas  
  paginaAtual: number; // Página atual
  proximaPagina: number | null; // Próxima página, se houver
  paginaAnterior: number | null; // Página anterior, se houver
  ultimaPagina: number; // Última página
  primeiraPagina: number; // Primeira página
}
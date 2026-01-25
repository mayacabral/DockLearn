export interface Empreendimento {
  id: number;
  nome: string;
  localizacao: string;
}

export interface Comprovante {
  tipo: string;
  url: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
}

export type SituacaoInscricao = 'em_validacao' | 'selecionado' | 'invalidado' | 'contemplado' | 'reserva';

export interface Inscricao {
  id: number;
  nome: string;
  cpf: string;
  rg?: string;
  dataNascimento?: string;
  nomeMae?: string;
  telefone: string;
  email: string;
  empreendimento?: Empreendimento;
  situacao?: SituacaoInscricao;
  dataInscricao: string;
  dataAtualizacao?: string;
  comprovantes?: Comprovante[];
  pontuacao?: number;
  observacoes?: string;
  responsavelValidacao?: string;
  ultimaAtualizacaoPor?: string;
}
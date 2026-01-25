import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import mockData from '@/mocks/inscricoes.json';
import { Inscricao } from '@/app/models/interfaces/inscricao';
import { Meta } from '@models/interfaces/meta';

@Injectable({
  providedIn: 'root',
})
export class InscricoesService {
  constructor() {}

  getInscricoes(): Observable<Inscricao[]> {
    const inscricoes = mockData?.data?.inscricoes ?? [];
    return of(inscricoes as Inscricao[]);
  }

  getMeta(): Observable<Meta> {
    const meta = mockData?.data?.meta ?? [];
    return of(meta as Meta);
  }
}

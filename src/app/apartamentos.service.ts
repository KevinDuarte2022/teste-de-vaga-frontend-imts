import axios from 'axios';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApartamentosService {
  private apiUrl = "http://localhost:3000";
  constructor() { }

  buscarDados(): Observable<any> {
    return from(axios.get(`${this.apiUrl}/apartamentos/`).then(response => response.data));
  }

  adicionarApartamento(apartamento: any): Promise<any> {
    return axios.post<any>(`${this.apiUrl}/apartamentos/`, apartamento)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao adicionar apartamento:', error);
        throw error;
      });
  }

  atualizarApartamento(apartamento: any): Promise<any> {
    return axios.put<any>(`${this.apiUrl}/apartamentos/${apartamento.id}`, apartamento)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao atualizar apartamento:', error);
        throw error;
      });
  }

  excluirApartamento(id: any): Promise<any> {
    return axios.delete<any>(`${this.apiUrl}/apartamentos/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao excluir apartamento:', error);
        throw error;
      });
  }

} 

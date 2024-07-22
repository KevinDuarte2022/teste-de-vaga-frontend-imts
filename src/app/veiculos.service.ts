import axios from 'axios';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  private apiUrl = "http://localhost:3000";
  constructor() { }

  buscarDados(): Observable<any> {
    return from(axios.get(`${this.apiUrl}/veiculos/`).then(response => response.data));
  }

  adicionarVeiculo(veiculo: any): Promise<any> {
    return axios.post<any>(`${this.apiUrl}/veiculos/`, veiculo)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao adicionar veiculo:', error);
        throw error;
      });
  }

  atualizarVeiculo(veiculo: any): Promise<any> {
    return axios.put<any>(`${this.apiUrl}/veiculos/${veiculo.id}`, veiculo)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao atualizar veiculo:', error);
        throw error;
      });
  }

  excluirVeiculo(id: any): Promise<any> {
    return axios.delete<any>(`${this.apiUrl}/veiculos/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao excluir veiculo:', error);
        throw error;
      });
  }

} 

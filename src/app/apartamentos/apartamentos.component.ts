import { Component, OnInit } from '@angular/core';
import { ApartamentosService } from '../apartamentos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apartamentos',
  standalone: true,
  templateUrl: './apartamentos.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent implements OnInit {
  apartamentoList: any;
  apartamentoForm: FormGroup;
  apartamentoEmEdicao: any = null;

  constructor(
    private apartamentosService: ApartamentosService,
    private fb: FormBuilder
  ) {
    this.apartamentoForm = this.fb.group({
      id: [''],
      bloco: [''],
      apartamento: [''],
      morador: [''],
      telefone: [''],
      email: ['']
    });
   }
  
  ngOnInit(): void {
    this.apartamentosService.buscarDados().subscribe(
      resposta => {
        this.apartamentoList = resposta;
        console.log(this.apartamentoList);
      },
      erro => {
        console.error('Erro ao buscar apartamentos:', erro);
      }
    );
  }

  editar(apartamento: any): void {
    this.apartamentoEmEdicao = apartamento;
    this.apartamentoForm.patchValue(apartamento);
  }

  excluir(apartamento: any): void {
  
    if (confirm(`Tem certeza que deseja excluir o apartamento com ID ${apartamento.id}?`)) {
      this.apartamentosService.excluirApartamento(apartamento.id).then(() => {
        this.apartamentoList = this.apartamentoList.filter((a: { id: any; }) => a.id !== apartamento.id);
      }).catch(erro => {
        console.error('Erro ao excluir apartamento:', erro);
      });
    }
  }

  onSubmit(): void {
    const apartamentoNew = this.apartamentoForm.value;
  
    if (apartamentoNew.id) {
      this.apartamentosService.atualizarApartamento(apartamentoNew).then(
        response => {
          const index = this.apartamentoList.findIndex((a: { id: any; }) => a.id === response.id);
          if (index !== -1) {
            this.apartamentoList[index] = response; 
          }
          this.apartamentoForm.reset();
          this.apartamentoEmEdicao = null; 
        }
      ).catch(erro => {
        console.error('Erro ao atualizar apartamento:', erro);
      });
    } else {
      this.apartamentosService.adicionarApartamento(apartamentoNew).then(
        response => {
          this.apartamentoList.push(response);
          this.apartamentoForm.reset();
        }
      ).catch(erro => {
        console.error('Erro ao adicionar apartamento:', erro);
      });
    }
  }
}

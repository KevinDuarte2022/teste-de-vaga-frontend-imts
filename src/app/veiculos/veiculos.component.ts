import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApartamentosService } from '../apartamentos.service';

@Component({
  selector: 'app-veiculos',
  standalone: true,
  templateUrl: './veiculos.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  styleUrl: './veiculos.component.css'
})
export class VeiculosComponent implements OnInit {
  apartamentoList: any;
  veiculoList: any;
  veiculoForm: FormGroup;
  veiculoEmEdicao: any = null;

  constructor(
    private apartamentosService: ApartamentosService,
    private veiculosService: VeiculosService,
    private fb: FormBuilder
  ) {
    this.veiculoForm = this.fb.group({
      id: [''],
      marca: [''],
      modelo: [''],
      cor: [''],
      placa: [''],
      id_apartamento: ['']
    });
   }
  
  ngOnInit(): void {
    this.veiculosService.buscarDados().subscribe(
      resposta => {
        this.veiculoList = resposta;
        console.log(this.veiculoList);
      },
      erro => {
        console.error('Erro ao buscar veiculos:', erro);
      }
    );

    this.loadApartamentos();

  }

  loadApartamentos(): void {
    this.apartamentosService.buscarDados().subscribe(
      resposta => {
        this.apartamentoList = resposta;
      },
      erro => {
        console.error('Erro ao buscar apartamentos:', erro);
      }
    );
  };

    editar(veiculo: any): void {
    this.veiculoEmEdicao = veiculo;
    this.veiculoForm.patchValue(veiculo);
  }

  excluir(veiculo: any): void {
  
    if (confirm(`Tem certeza que deseja excluir o veiculo com ID ${veiculo.id}?`)) {
      this.veiculosService.excluirVeiculo(veiculo.id).then(() => {
        this.veiculoList = this.veiculoList.filter((a: { id: any; }) => a.id !== veiculo.id);
      }).catch(erro => {
        console.error('Erro ao excluir veiculo:', erro);
      });
    }
  }

  onSubmit(): void {
    const veiculoNew = this.veiculoForm.value;
  
    if (veiculoNew.id) {
      this.veiculosService.atualizarVeiculo(veiculoNew).then(
        response => {
          const index = this.veiculoList.findIndex((a: { id: any; }) => a.id === response.id);
          if (index !== -1) {
            this.veiculoList[index] = response; 
          }
          this.veiculoForm.reset();
          this.veiculoEmEdicao = null; 
        }
      ).catch(erro => {
        console.error('Erro ao atualizar veiculo:', erro);
      });
    } else {
      this.veiculosService.adicionarVeiculo(veiculoNew).then(
        response => {
          this.veiculoList.push(response);
          this.veiculoForm.reset();
        }
      ).catch(erro => {
        console.error('Erro ao adicionar veiculo:', erro);
      });
    }
  }
}

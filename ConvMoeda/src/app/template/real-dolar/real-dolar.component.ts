import { Component, OnInit } from '@angular/core';
import { ListarSimbolosService } from 'src/app/lista-simbolos/listar-simbolos.service';

export class ResultConverter {
  amount: number = 0;
  result?: number;
}

@Component({
  selector: 'app-real-dolar',
  templateUrl: './real-dolar.component.html',
  styleUrls: ['./real-dolar.component.css']
})
export class RealDolarComponent implements OnInit {

  resultConverter: ResultConverter = new ResultConverter();

  constructor(private listarSimbolosService: ListarSimbolosService) { }

  ngOnInit(): void {
  }

  updateInputAmount(event: Event) {      
    this.resultConverter.amount = parseFloat(((event.target as HTMLInputElement).value).replace(' ', ''));
  }

  convert() {    
    this.listarSimbolosService.getConvertCurrency('BRL', 'USD', this.resultConverter.amount).subscribe(result => {      
      this.resultConverter.result = result.result;                     
      })
  }

  clear(){
    this.resultConverter.result = undefined;
  }

}

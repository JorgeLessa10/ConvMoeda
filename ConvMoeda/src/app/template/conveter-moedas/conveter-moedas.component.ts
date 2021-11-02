import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListarSimbolosService } from 'src/app/lista-simbolos/listar-simbolos.service';

export class CurrencyConverter {
  code: String = '';
  description: String = '';
}

export class ResultConverter {
  amount: number = 0;
  result: String = '';
}

@Component({
  selector: 'app-conveter-moedas',
  templateUrl: './conveter-moedas.component.html',
  styleUrls: ['./conveter-moedas.component.css']
})
export class ConveterMoedasComponent implements OnInit {

  currencys: CurrencyConverter[] = [];
  resultConverter: ResultConverter = new ResultConverter();
  selectedFromCurrency: String;
  selectedToCurrency: String;

  constructor(private listarSimbolosService: ListarSimbolosService) {
  }

  ngOnInit(): void {
    this.showResultsToSelected();
  }

  showResultsToSelected() {    
    this.listarSimbolosService.getSymbolCurrency().subscribe(value => {
      for (let symbol in value.symbols) {
        let moeda: CurrencyConverter = new CurrencyConverter();
        moeda.code = value.symbols[symbol].code;
        moeda.description = value.symbols[symbol].description;
        this.currencys.push(moeda);
      }
    })
  }

  updateSelectedFromCurrency(event: Event) {
    this.selectedFromCurrency = (event.target as HTMLInputElement).value;
  }

  updateSelectedToCurrency(event: Event) {
    this.selectedToCurrency = (event.target as HTMLInputElement).value;
  }
  
  updateInputAmount(event: Event) {
    this.resultConverter.amount = parseFloat(((event.target as HTMLInputElement).value).replace(' ', ''));
  }
  

  convert() {        
    this.listarSimbolosService.getConvertCurrency(this.selectedFromCurrency, this.selectedToCurrency, this.resultConverter.amount).subscribe(result => {
      this.resultConverter.result = result.result;       
              
      })
  }

}

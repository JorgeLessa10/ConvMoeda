import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListarSimbolosService } from 'src/app/lista-simbolos/listar-simbolos.service';

export class CurrencyConverter {
  code: String = '';
  description: String = '';
}

@Component({
  selector: 'app-listar-simbolos',
  templateUrl: './listar-simbolos.component.html',
  styleUrls: ['./listar-simbolos.component.css']
})
export class ListarSimbolosComponent implements OnInit, AfterViewInit {

  currency: CurrencyConverter[] = []; 
  displayedColumns: string[] = ['code', 'description'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private listarSimbolosService: ListarSimbolosService) {

  }

  ngOnInit(): void {
    this.carregarMoedas();
    this.dataSource.data = this.currency;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  carregarMoedas(){
    this.listarSimbolosService.getSymbolCurrency().subscribe(value => {
      for (let symbol in value.symbols){
        let moeda: CurrencyConverter = new CurrencyConverter();
        moeda.code = value.symbols[symbol].code;
        moeda.description = value.symbols[symbol].description;
        this.currency.push(moeda);
      }
      this.dataSource.data = this.currency;  
    })
  }
}

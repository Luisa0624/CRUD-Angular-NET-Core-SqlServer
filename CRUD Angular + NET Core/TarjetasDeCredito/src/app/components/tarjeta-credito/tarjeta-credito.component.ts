import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    {titular:'Juan Perez', numeroTarjeta:'1234567891235', fechaExpiracion: '11/23', cvv:'123'},
    {titular:'Luisa Gil', numeroTarjeta:'9865748256', fechaExpiracion: '11/24', cvv:'456'}
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      titular: [''],
      numeroTarjeta: [''],
      fechaExpiracion: [''],
      cvv: ['']
    })
  }

  ngOnInit(): void {
  }
  
}

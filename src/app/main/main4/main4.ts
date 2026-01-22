import { Component, OnInit } from '@angular/core';
declare var DataTable: any;
@Component({
  selector: 'app-main4',
  imports: [],
  templateUrl: './main4.html',
  styleUrl: './main4.scss',
})
export class Main4 {
  ngOnInit(): void {
    new DataTable('#example');
  }
}

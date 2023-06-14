import { Component,inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  dialogData:EmployeeDTO=inject(MAT_DIALOG_DATA)

  ngOnInit() {
    // will log the entire data object
    console.log(this.dialogData)
  }


}

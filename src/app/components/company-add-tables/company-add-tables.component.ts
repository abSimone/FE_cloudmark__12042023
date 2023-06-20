import { Component, inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { EmployeeDTO } from 'src/app/dto/EmployeeDTO';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-company-add-tables',
  templateUrl: './company-add-tables.component.html',
  styleUrls: ['./company-add-tables.component.css']
})
export class CompanyAddTablesComponent {
  employeeService = inject(EmployeeService)

  selectedColumns: string[] = ['selected']
  selectedDataSource = new MatTableDataSource<EmployeeDTO[]>([])
  selectedPaginatorSize = 0
  
  @ViewChild(MatTable) selectedTable!: MatTable<EmployeeDTO[]>
  @ViewChild('selectedPaginator') selectedPaginator!: MatPaginator

  availableColumns: string[] = ['available'];
  availableDataSource!: MatTableDataSource<EmployeeDTO[]>

  @ViewChild('availablePaginator') availablePaginator!: MatPaginator

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe({
      next: (data: any) => {
        this.availableDataSource = new MatTableDataSource<EmployeeDTO[]>(data)
        this.availableDataSource.paginator = this.availablePaginator
      },
      error: () => {
        console.log('subscribe error')
      }
    })

    this.selectedDataSource.paginator = this.selectedPaginator
  }

  selectActor(employeeId: number) {
    this.selectedDataSource.data.push(this.availableDataSource.data[employeeId-1])
    this.selectedTable.renderRows()

    this.selectedPaginatorSize = this.selectedDataSource.data.length

    console.log(this.selectedDataSource.data)
  }
}
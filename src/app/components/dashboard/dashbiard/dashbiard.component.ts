import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { materialDataTable } from 'src/app/models/common.model';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {  MatTableDataSource } from "@angular/material/table";
import { forkJoin, fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-dashbiard',
  templateUrl: './dashbiard.component.html',
  styleUrls: ['./dashbiard.component.css']
})
export class DashbiardComponent implements OnInit {
  columnsToDisplay = ['name', 'age', 'location', 'star'];
  totalTableEntries: number;
  PAGESIZE = localStorage.getItem('pageSize');
  PAGESIZEOPTIONS = materialDataTable.pageSizeOptions;
  data: any = [
    {name: 'Jane Doe', age: 25, location: 'Kochi'}, 
    {name: 'John Doe', age: 27, location: 'Trivandrum'}]
  matTableDataSource: any ;
  @ViewChild(MatPaginatorModule, { static: true }) paginator: MatPaginatorModule;
  tableDataHolder: any;
  @ViewChild(MatSortModule, { static: false }) matSort: MatSortModule;
  @ViewChild('search', { static: false }) search: ElementRef;
  searchSubscription: Subscription;
  constructor(
  ) { 
    this.matTableDataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.matTableDataSource = new MatTableDataSource(this.data);
  }


  ngAfterViewInit() {
    // link paginator to material table
    this.matTableDataSource.paginator = this.paginator;

    // material table search feature
    this.searchSubscription = fromEvent(this.search.nativeElement, 'keyup').pipe(
        map((event: any) => event.target.value),
        filter(query => query.length >= 0),
        debounceTime(1000),
        distinctUntilChanged()
    )
        .subscribe(query => {
            // this.ListLicenseHistory(0, this.PAGESIZE, true, query);
        });
  }

  ngOnDestroy() {
      this.searchSubscription.unsubscribe();
  }

  paginatorEvent(event:any) {
    localStorage.setItem('pageSize', event.pageSize);
    this.PAGESIZE = localStorage.getItem('pageSize');
    
}
}

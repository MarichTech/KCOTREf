import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import{MAT_DIALOG_DATA,MatDialogRef}from '@angular/material/dialog'

@Component({
  selector: 'app-sitemapping',
  templateUrl: './sitemapping.component.html',
  styleUrls: ['./sitemapping.component.css']
})
export class SitemappingComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data,
  public dialogRef:MatDialogRef<SitemappingComponent>,) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { WHouseService } from '../service/w-house.service';

@Component({
  selector: 'wh-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  

  constructor(private service: WHouseService) { }

  ngOnInit(): void {
  }

}

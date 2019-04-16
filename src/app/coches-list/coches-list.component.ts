import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CochesService } from '../shared/coches/coches.service';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrls: ['./coches-list.component.css']
})
export class CochesListComponent implements OnInit {

  coches: Array<any>;

  constructor(private cochesService: CochesService,
              private router: Router
              ) { }

  ngOnInit() {
    this.cochesService.getAll().subscribe(data => {
      this.coches = data;
    })
  }
  gotoList() {
    this.router.navigate(['/coches-list']);
  }

  delete(id) {
    console.log(id);
    this.cochesService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
    window.location.reload();


  }

}

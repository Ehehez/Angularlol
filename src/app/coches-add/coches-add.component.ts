import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CochesService } from '../shared/coches/coches.service';
import { NgForm } from '@angular/forms';
import { EmpresaService } from '../shared/empresa/empresa.service';

@Component({
  selector: 'app-coches-add',
  templateUrl: './coches-add.component.html',
  styleUrls: ['./coches-add.component.css']
})
export class CochesAddComponent implements OnInit {

  coches: any = {};
  empresas: Array<Object>;

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cocheService: CochesService,
              private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getAll().subscribe(data => {
      this.empresas = data;
      console.log(this.empresas);
    })
    
  }
  /*ngOnDestroy() {
    /*this.sub.unsubscribe();
  }*/
  gotoList() {
    this.router.navigate(['/coches-list']);
  }
  save(form: NgForm) {
    console.log(form);
    this.cocheService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.cocheService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}



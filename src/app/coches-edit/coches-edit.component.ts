import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CochesService } from '../shared/coches/coches.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coches-edit',
  templateUrl: './coches-edit.component.html',
  styleUrls: ['./coches-edit.component.css']
})
export class CochesEditComponent implements OnInit, OnDestroy {

  coches: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cocheService: CochesService,) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.cocheService.get(id).subscribe((car: any) => {
          if (car) {
            this.coches = car;
            
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/coches-list']);
  }
  save(form: NgForm) {
    this.cocheService.update(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(href) {
    this.cocheService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}

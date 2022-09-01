import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Subscription } from 'rxjs';
import { BookModel } from '../../model/book/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit, OnDestroy {
  public loading = false;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  book: BookModel = new BookModel();
  private routeSub: Subscription = new Subscription();
  public fullname: string = " ";

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe( //id ve full name parametreleri 
      params => {
        this.getDetail(params['id']) //id gönd.
        this.fullname = params['fullname']; //fullname=name+author
      });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getDetail(id: number) {
    this.loading = true;
    this.bookService.getDetail(id).subscribe( //getDetail ile detail bilgilerini gösteriyor.
      (res) => {
        this.loading = false;
        this.book = res;
      });
  }
}

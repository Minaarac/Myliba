import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookService } from 'src/app/services/book/book.service';
import { BookModel } from '../../model/book/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  public id: number = 0;
  book: BookModel = new BookModel();
  private routeSub: Subscription = new Subscription();
  public loading = false;
  message: string = ''; // başlık için

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(
      params => {
        this.id = params['id'];
        if (this.id) {
          this.message = "Edit";
          this.getDetail(params['id'])
        }
        else {
          this.message = "Add"
        }
      });
  }

  addOrUpdateBook(book: BookModel) { //eğer id varsa update yoksa ekle
    if (this.id) { //id varsa
      this.bookService.updateBook(this.id, this.book)
        .subscribe((res) => {
          this.router.navigate(['/list-book']) //işlem bittikten sonra lsiteyi getir
        }, (err) => {
          console.log(err);
        });
    }
    else { //yoksa
      this.bookService.addBook(this.book).subscribe((res) => {
        this.router.navigate(['/list-book']) //işlem bittikten sonra listeyi getir
      })
    }
  }

  getDetail(id: number) {
    this.loading = true;
    this.bookService.getDetail(id).subscribe( //id ye göre detay bilgilerini getiriyor.
      (res) => {
        this.loading = false;
        this.book = res;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { BookModel } from '../../model/book/book.model';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
  providers: [BookService]

})
export class ListBookComponent implements OnInit {
  public loading = false;


  constructor(private bookService:BookService) { }
  books: BookModel[] = []
  message:string='';

  ngOnInit(): void {
    this.getBook();
  }

  getBook(searchParam:string = '') {
    this.loading = true;
    this.bookService.getAllBooks(searchParam)
      .subscribe((res: any) => {
        this.loading = false;
        this.books = res;
      }, (err) => {
        this.loading = false;
        console.log(err);
      });
  }

  delBook(id?: number) {
    if (confirm('Bu kullanıcıyı silmek istediğinize emin misiniz?')) {
      if (!id) 
        return;
      this.bookService.delBook(id)
        .subscribe((res) => {
          this.getBook();
        }, (err) => {
          console.log(err);
        });
    }
  }

  search(event:any={}){ // searche tıklandığında eşleşen gelecek
    console.log(event) 
    this.getBook(this.message); // yazdığım mesaj ile eşleşen
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class NavComponent implements OnInit, AfterViewInit {
  message: string = '';

  constructor(private userService: UserService, private bookService: BookService, private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
  }

  ngOnInit(): void {
  }

  search() {}
}

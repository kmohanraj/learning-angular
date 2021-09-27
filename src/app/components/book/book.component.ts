import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: Observable<Book[]>

  constructor(private bookservice: BookService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.getAllBooks();
  }


  private getAllBooks() {
    console.log("response============")
    this.bookservice.getAll().subscribe(
      (response) => {
        this.books=response
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public loading = false;
  books: Observable<Book[]>
  constructor(private bookservice: BookService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.loading = true; 
    this.getAllBooks();
  }

  private getAllBooks() {   
    this.bookservice.getAll().subscribe(
      (response) => {
        this.books = response;
        this.loading = false;
      }
    )
  }
  
}

import { Component, Input, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/components/book.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public loading = true;
  books: Observable<Book[]>
  constructor(private bookService: BookService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      this.loading = false;
    });
  }

  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(data => {
      this.reloadData()
    })
  }

  bookDetails(id) {
    this.router.navigate(['book_details', id])
  }

}

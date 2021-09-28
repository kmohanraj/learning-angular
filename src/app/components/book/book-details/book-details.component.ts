import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../book.model';
import { BookService } from 'src/app/services/book.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  id: number;
  book: Book = {
    title: '',
    authorName: '',
    description: '',
    published: ''
  };

  constructor( private route: ActivatedRoute, private router: Router, private bookService: BookService ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup;

  private submitted = false;
  dt: any;
  dataDisplay: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private bookService: BookService) { }
  
  ngOnInit() {
    this.submitted = false;
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      authorName: ['', Validators.required],
      description: ['', Validators.required],
      published: ['', Validators.required]
    });
  }


  onSubmit() {
    this.bookService.createBook(this.addForm.value).subscribe(data => {
      console.log("------------")
      console.log(data)
      console.log("------------")
      this.submitted = true;
      this.router.navigate(['books'])
    })
  }
  
}

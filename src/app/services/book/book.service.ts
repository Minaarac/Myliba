import { BookModel } from "src/app/model/book/book.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class BookService {
    public readonly uri: string = 'book';

    constructor(
        private http: HttpClient
    ) { }

    public getAllBooks(searchParam:string='') {
        return this.http.get(`${environment.API_URL}/${this.uri}?search=${searchParam}`);
    }
    public getDetail(id:number){
        return this.http.get(`${environment.API_URL}/${this.uri}/${id}`);
    }

    delBook(id:number) {
        return this.http.delete(`${environment.API_URL}/${this.uri}/${id}`);
    }
    updateBook(id:number,book:BookModel){
        return this.http.put(`${environment.API_URL}/${this.uri}/${id}`,book); //up ederken book model içindeki diğer değişkenlerde olacak
    }

    addBook(book:BookModel){
        return this.http.post(`${environment.API_URL}/${this.uri}`,book) // add yaparken diğer değişkenlerde olacak
    }


}
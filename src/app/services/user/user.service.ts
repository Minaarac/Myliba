import { UserModel } from "src/app/model/user/user.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public readonly uri: string = 'user';

    constructor(

        private http: HttpClient
    ) { }

    public getAllUsers(orderParam:string ='desc', searchParam:string='') {
        return this.http.get(`${environment.API_URL}/${this.uri}?sortBy=id&order=${orderParam}&search=${searchParam}`);
    }

    public getDetail(id:number){
        return this.http.get(`${environment.API_URL}/${this.uri}/${id}`);
    }

    delUser(id:number) {
        return this.http.delete(`${environment.API_URL}/${this.uri}/${id}`);
    }
    updateUser(id:number,user:UserModel){
        return this.http.put(`${environment.API_URL}/${this.uri}/${id}`,user);
    }

    addUser(user:UserModel){
        return this.http.post(`${environment.API_URL}/${this.uri}`,user)
    }
    
}
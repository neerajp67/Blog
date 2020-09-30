import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = "https://my-json-server.typicode.com/neerajp67/json-db/restaurants";
  urlBlog = "https://my-json-server.typicode.com/neerajp67/json-db/blogs";
  coverImg = "https://my-json-server.typicode.com/neerajp67/json-db/Cover-Image";
  teamMember ="https://my-json-server.typicode.com/neerajp67/json-db/teamMember"

  constructor(private http: HttpClient) { }
  getCoverImg() {
    return this.http.get(this.coverImg);
  }
  getBlog() {
    return this.http.get(this.urlBlog);
  }
  getTeamMember(){
    return this.http.get(this.teamMember);
  }

  getList() {
    return this.http.get(this.url);
  }
  saveResto(data) {

    return this.http.post(this.url, data)
  }

  deleteResto(id) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getCurrentResto(id) {
    return this.http.get(`${this.url}/${id}`)
  }

  updateResto(id, data) {
    return this.http.put(`${this.url}/${id}`, data)
  }
}

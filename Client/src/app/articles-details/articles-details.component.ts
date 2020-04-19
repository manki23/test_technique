import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Articles } from '../articles';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.scss']
})
export class ArticlesDetailsComponent implements OnInit {

  articles: Articles = { _id: '', title: '', author: '', date: null, content: '', image: '' };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getArticlesDetails(id: string) {
    this.api.getArticlesById(id)
      .subscribe((data: any) => {
        this.articles = data;
        console.log(this.articles);
        this.isLoadingResults = false;
      });
  }

  ngOnInit(): void {
    this.getArticlesDetails(this.route.snapshot.params.id);
  }

  deleteArticles(id: any) {
    this.isLoadingResults = true;
    this.api.deleteArticles(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/articles']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}

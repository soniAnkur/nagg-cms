import { NewsOverviewComponent } from './news-overview/news-overview.component';
import { NewsService } from './news-service.service';
import { News } from './news.models';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News[];

  constructor(private newsService: NewsService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data) => {
        this.news = data.newsList;
      });
  }

  // postFixedNews() {
  //   return this.newsService.postNews()
  //     .subscribe(
  //     data => this.news.push(data)
  //     );
  // }

  createNewNews() {
    this.router.navigate(['/news/new-news']);
  }
}

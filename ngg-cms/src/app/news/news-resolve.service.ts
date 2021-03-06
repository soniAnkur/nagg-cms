import { NewsService } from './news-service.service';
import { News } from './news.models';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class NewsResolveGuard implements Resolve<News[]> {
    constructor(private newsService: NewsService, private router: Router) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
        return this.newsService.getAllNews();
    }
}
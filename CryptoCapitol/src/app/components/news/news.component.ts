import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  news:Story[] = []

  ngOnInit(): void {
    this.loadNews()
  }


  loadNews(){
    this.newsService.getStories().subscribe(
      (response)=>{
        this.news = response.articles;
      }
    );

  }


}

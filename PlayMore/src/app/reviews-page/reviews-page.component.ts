import { Component, OnInit } from '@angular/core';
import { Observable, pipe, map, Subject } from 'rxjs';
import { persistenceEnabled as _persistenceEnabled } from '../app.module';
import { Disability, Feature_Rating, Review } from '../interfaces';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-reviews-page',
  templateUrl: './reviews-page.component.html',
  styleUrls: ['./reviews-page.component.css']
})
export class ReviewsPageComponent implements OnInit {
  public all_reviews : Review[] = [];
  public all_reviews_game : Review[] = [];
  public dis : Disability[] = [];
  public review_to_add : Review = {
    id: "",
    game_id: "Bioshock",
    title : "Great",
    text : "Great!",
    date_created : "9/24/2023",
    username: "test_user",
    user_id: "1234",
    feature_ratings: [
      {"disability": "Motor Disability", "name": "Remappable controls", "rating": 3},
      {"disability": "Hard of Hearing or Deaf", "name": "Directional Indicators for Subtitles","rating": 4}
    ]
  }

  constructor (private _firestoreService : FirestoreService) {}

  ngOnInit(): void {
    this._firestoreService.get_reviews().subscribe((value : any[]) => {
      this.all_reviews = value;
    })

    this._firestoreService.get_reviews_by_game("Bioshock").subscribe((value : any[]) => {
      this.all_reviews_game = value;
    })

    this._firestoreService.get_dis().subscribe((value : any[]) => {
      this.dis = value;
    })

   
   /* Sample add:
    this._firestoreService.add_review(this.review_to_add);
   */ 
    
  }
    
}

import { Component, OnInit } from '@angular/core';
import { PhotoService, Photo } from '../photo.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  favoriteCount = new BehaviorSubject<number>(0);
  error: string | null = null;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.photoService.getPhotos().subscribe({
      next: (photos) => {
        this.photos = photos;
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

  deletePhoto(id: number): void {
    this.photoService.deletePhoto(id).subscribe({
      next: () => {
        this.photos = this.photos.filter(photo => photo.id !== id);
      },
      error: (err) => {
        this.error = err;
      }
    });
  }

  likePhoto(): void {
    this.favoriteCount.next(this.favoriteCount.value + 1);
  }
}

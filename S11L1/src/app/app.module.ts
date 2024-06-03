import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from 'src/directives/randomColor.directive';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostDetailComponent,
    SinglePostComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RandomColorDirective,ActivePostsComponent,HomepageComponent,
    InactivePostsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

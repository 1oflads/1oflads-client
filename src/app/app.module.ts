import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './components/common/top/top.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { WelcomeHeaderComponent } from './components/welcome/welcome-header/welcome-header.component';
import { WelcomeMainComponent } from './components/welcome/welcome-main/welcome-main.component';
import { ChallengesMainComponent } from './components/elements/challenges/challenges-main/challenges-main.component';
import { ChallengeSingleComponent } from './components/elements/challenges/challenge-single/challenge-single.component';
import {DatetimeComponent} from './components/outer-libraries-components/datetime/datetime.component';
import {ImageCropperComponent} from './components/outer-libraries-components/image-cropper/image-cropper.component';
import {InfoCarouselComponent} from './components/outer-libraries-components/info-carousel/info-carousel.component';
import {MapComponent} from './components/outer-libraries-components/map/map.component';
import {TextEditorComponent} from './components/outer-libraries-components/text-editor/text-editor.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxEditorModule} from 'ngx-editor';
import {ImageCropperModule} from 'ngx-image-cropper';
import {AgmCoreModule} from '@agm/core';
import {ConfigurationService} from './core/service/ConfigurationService';
import { ArticlesMainComponent } from './components/elements/articles/articles-main/articles-main.component';
import { ArticleSingleComponent } from './components/elements/articles/article-single/article-single.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import {UserService} from './core/service/UserService';
import {AuthenticationService} from './core/service/AuthenticationService';
import { UserProfileEditComponent } from './components/user/user-profile-edit/user-profile-edit.component';
import { ChallengeCreateComponent } from './components/elements/challenges/challenge-create/challenge-create.component';
import { ChallengesAllComponent } from './components/elements/challenges/challenges-all/challenges-all.component';
import { ChallengeAchieveComponent } from './components/elements/challenges/challenge-achieve/challenge-achieve.component';
import {HeadersInterceptor} from './core/interceptors/HeadersInterceptor';
import { BandPageComponent } from './components/elements/bands/band-page/band-page.component';
import { BandPageEditComponent } from './components/elements/bands/band-page-edit/band-page-edit.component';
import { JustWatchingComponent } from './components/common/just-watching/just-watching.component';
import { ChallengeRequestsMainComponent } from './components/elements/challenges/challenge-requests-main/challenge-requests-main.component';
import { ChallengeRequestSingleComponent } from './components/elements/challenges/challenge-request-single/challenge-request-single.component';
// import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { BandCreateComponent } from './components/elements/bands/band-create/band-create.component';
import { ChallengeApplicationsMainComponent } from './components/elements/challenges/challenge-applications-main/challenge-applications-main.component';
import { ChallengeApplicationSingleComponent } from './components/elements/challenges/challenge-application-single/challenge-application-single.component';
import { UserChallengesMainComponent } from './components/user/user-challenges-main/user-challenges-main.component';
import { UserChallengeSingleComponent } from './components/user/user-challenge-single/user-challenge-single.component';
import {ChallengeService} from './core/service/ChallengeService';
import { ChallengeNavigationComponent } from './components/elements/challenges/challenge-navigation/challenge-navigation.component';
import { UsersRatingComponent } from './components/user/users-rating/users-rating.component';
import {ErrorInterceptor} from './core/interceptors/ErrorInterceptor';
import {ErrorService} from './core/service/ErrorService';
import { UserTopThreeComponent } from './components/user/user-top-three/user-top-three.component';
import { BandsMainComponent } from './components/elements/bands/bands-main/bands-main.component';
import { BandCardComponent } from './components/elements/bands/band-card/band-card.component';
import { ProjectsMainComponent } from './components/elements/projects/projects-main/projects-main.component';
import { ProjectSingleComponent } from './components/elements/projects/project-single/project-single.component';
import { AboutUsComponent } from './components/common/about-us/about-us.component';
import {ArticleService} from './core/service/ArticleService';
import { ArticleDetailsComponent } from './components/elements/articles/article-details/article-details.component';
import { ProjectDetailsComponent } from './components/elements/projects/project-details/project-details.component';
import {GroupService} from './core/service/GroupService';
import {SphereService} from './core/service/SphereService';
import {NgxFullCalendarModule} from 'ngx-fullcalendar';
import { ChallengesGroupsComponent } from './components/elements/challenges/challenges-groups/challenges-groups.component';
import { ChallengeGroupSingleComponent } from './components/elements/challenges/challenge-group-single/challenge-group-single.component';
import { BandOptionsComponent } from './components/elements/bands/band-options/band-options.component';

@NgModule({
  declarations: [
    AppComponent,
    DatetimeComponent,
    ImageCropperComponent,
    InfoCarouselComponent,
    MapComponent,
    TextEditorComponent,
    TopComponent,
    NavigationComponent,
    WelcomeHeaderComponent,
    WelcomeMainComponent,
    ChallengesMainComponent,
    ChallengeSingleComponent,
    ArticlesMainComponent,
    ArticleSingleComponent,
    FooterComponent,
    LoginComponent,
    UserProfileComponent,
    RegisterComponent,
    UserProfileEditComponent,
    ChallengeCreateComponent,
    ChallengesAllComponent,
    ChallengeAchieveComponent,
    BandPageComponent,
    BandPageEditComponent,
    JustWatchingComponent,
    ChallengeRequestsMainComponent,
    ChallengeRequestSingleComponent,
    BandCreateComponent,
    ChallengeApplicationsMainComponent,
    ChallengeApplicationSingleComponent,
    UserChallengesMainComponent,
    UserChallengeSingleComponent,
    ChallengeNavigationComponent,
    UsersRatingComponent,
    UserTopThreeComponent,
    BandsMainComponent,
    BandCardComponent,
    ProjectsMainComponent,
    ProjectSingleComponent,
    AboutUsComponent,
    ArticleDetailsComponent,
    ProjectDetailsComponent,
    ChallengesGroupsComponent,
    ChallengeGroupSingleComponent,
    BandOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDS9q2bfOep2OlZCFWgW9KaCsIHopKo354'
    }),
    // NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    HttpClientModule,
    ImageCropperModule,
    NgxEditorModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxFullCalendarModule,
  ],
  providers: [
    ConfigurationService,
    UserService,
    AuthenticationService,
    ChallengeService,
    ArticleService,
    GroupService,
    SphereService,
    ErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

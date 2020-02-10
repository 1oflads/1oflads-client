import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeMainComponent} from './components/welcome/welcome-main/welcome-main.component';
import {LoginComponent} from './components/authentication/login/login.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import {RegisterComponent} from './components/user/register/register.component';
import {UserProfileEditComponent} from './components/user/user-profile-edit/user-profile-edit.component';
import {ChallengeCreateComponent} from './components/elements/challenges/challenge-create/challenge-create.component';
import {ChallengesAllComponent} from './components/elements/challenges/challenges-all/challenges-all.component';
import {ChallengeAchieveComponent} from './components/elements/challenges/challenge-achieve/challenge-achieve.component';
import {BandPageComponent} from './components/elements/bands/band-page/band-page.component';
import {BandPageEditComponent} from './components/elements/bands/band-page-edit/band-page-edit.component';
import {JustWatchingComponent} from './components/common/just-watching/just-watching.component';
import {ChallengeRequestsMainComponent} from './components/elements/challenges/challenge-requests-main/challenge-requests-main.component';
import {BandCreateComponent} from './components/elements/bands/band-create/band-create.component';
import {ChallengeApplicationsMainComponent} from './components/elements/challenges/challenge-applications-main/challenge-applications-main.component';
import {UserChallengesMainComponent} from './components/user/user-challenges-main/user-challenges-main.component';
import {UsersRatingComponent} from './components/user/users-rating/users-rating.component';
import {AnonymousGuard} from './core/guards/AnonymousGuard';
import {AuthenticationGuard} from './core/guards/AuthenticationGuard';
import {AdminGuard} from './core/guards/AdminGuard';
import {AboutUsComponent} from './components/common/about-us/about-us.component';
import {ArticleDetailsComponent} from './components/elements/articles/article-details/article-details.component';
import {ProjectDetailsComponent} from './components/elements/projects/project-details/project-details.component';
import {ChallengesGroupsComponent} from './components/elements/challenges/challenges-groups/challenges-groups.component';
import {BandOptionsComponent} from './components/elements/bands/band-options/band-options.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomeMainComponent},
  {path: 'authentication/login', component: LoginComponent, canActivate: [AnonymousGuard]},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthenticationGuard]},
  {path: 'user/profile/edit', component: UserProfileEditComponent, canActivate: [AuthenticationGuard]},
  {path: 'user/profile/:id', component: UserProfileComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/challenges', component: UserChallengesMainComponent},
  {path: 'user/rating', component: UsersRatingComponent},
  {path: 'challenge/create', component: ChallengeCreateComponent, canActivate: [AuthenticationGuard]},
  {path: 'challenge/all', component: ChallengesAllComponent, canActivate: [AuthenticationGuard]},
  {path: 'challenge/achieve/:id', component: ChallengeAchieveComponent, canActivate: [AuthenticationGuard]},
  {path: 'challenge/requests', component: ChallengeRequestsMainComponent, canActivate: [AdminGuard]},
  {path: 'challenge/applications', component: ChallengeApplicationsMainComponent, canActivate: [AdminGuard]},
  {path: 'challenge/groups', component: ChallengesGroupsComponent},
  {path: 'groups', component: BandOptionsComponent},
  {path: 'group/create', component: BandCreateComponent, canActivate: [AdminGuard]},
  {path: 'group/:id', component: BandPageComponent},
  {path: 'group/:id/edit', component: BandPageEditComponent, canActivate: [AuthenticationGuard]},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: 'project/:id', component: ProjectDetailsComponent},
  {path: 'just-watching', component: JustWatchingComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

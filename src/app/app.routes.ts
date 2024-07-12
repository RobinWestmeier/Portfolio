import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },     
    { path: 'privacy', component: PrivacyComponent }
];

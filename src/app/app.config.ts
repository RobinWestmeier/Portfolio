import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'portfolio-87f4c',
          appId: '1:459058083846:web:eb196cc49149b8176deb87',
          storageBucket: 'portfolio-87f4c.appspot.com',
          apiKey: 'AIzaSyDXRX-p0mTo2ER4aD1-AVxiydMswxl4b3Q',
          authDomain: 'portfolio-87f4c.firebaseapp.com',
          messagingSenderId: '459058083846',
          measurementId: 'G-QQ7VJ6TE71',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};

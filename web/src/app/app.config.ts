import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { routes } from './app.routes';
import { getPortuguesePaginatorIntl } from './shared/i18n/translate.paginator';
import { ToastrModule } from 'ngx-toastr';
import { provideEnvironmentNgxMask } from 'ngx-mask';


import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
    importProvidersFrom(ToastrModule.forRoot()),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    provideEnvironmentNgxMask()
  ],
};

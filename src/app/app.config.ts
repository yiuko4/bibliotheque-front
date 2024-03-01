// app.config.ts
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

export const appConfig = {
  imports: [HttpClientModule],
  providers: [provideRouter(routes)]
};



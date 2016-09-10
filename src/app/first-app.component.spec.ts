/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './first-app.component';

describe('App: FirstApp', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
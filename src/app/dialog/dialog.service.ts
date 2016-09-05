import { Injectable }    from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Message } from './message';

import { DIALOGS } from './mock-dialogs';

@Injectable()
export class DialogService {
  private heroesUrl = 'app/heroes';  // URL to web api
  
  getDialogs(): Promise<Message[]> {
      console.log(Promise.resolve(DIALOGS));
      return Promise.resolve(DIALOGS);
  }

  /*getDialogs(): Promise<Message[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Message[])
               .catch(this.handleError);
  }*/

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
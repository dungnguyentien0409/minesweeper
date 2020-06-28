
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loader } from 'src/app/models/index';

@Injectable()
export class LoaderService {
  private loader = new BehaviorSubject<Loader>({id: 'global', status: false});

  loaderStatus$ = this.loader.asObservable();

  constructor() {

  }

  /**
   * Show loader
   * @param {string} id
   */
  public showLoader(id: string = 'global'): void {
    this.loader.next({id, status: true});
  }

  /**
   * Hide loader
   * @param {string} id
   */
  public hideLoader(id: string = 'global'): void {
    this.loader.next({id, status: false});
  }
}
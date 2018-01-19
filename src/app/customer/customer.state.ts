import { StarWarsCharacter } from './star-wars-character.interface';
import { CustomerService } from './customer.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CustomerState {
  customerPageSubject = new BehaviorSubject<StateOfCustomerPage>('initial');
  friendlyDescription: string;
  currentCharacter: StarWarsCharacter;

  constructor(
    public service: CustomerService
  ) { }

  async getStarWarsCharacter(): Promise<void> {
    this.currentCharacter = undefined;
    this.customerPageSubject.next('loading');
    try {
      const result = await this.service.getStarWarsCharacter();
      this.customerPageSubject.next('loaded');
      this.currentCharacter = result;
    } catch (e) {
      this.customerPageSubject.next('error');
      console.error(e);
      this.currentCharacter = undefined;
    }
  }
}

type StateOfCustomerPage = 'loading' | 'loaded' | 'error' | 'initial';






/**
 *   constructor() {
    this.customerPageSubject.asObservable().subscribe(value => {
      switch (value) {
        case 'loading':
          return this.friendlyDescription = 'API is loading...';
        case 'loaded':
          return this.friendlyDescription = 'API successfully loaded!!';
        case 'error':
          return this.friendlyDescription = 'Uh oh!!!';
        case 'initial':
          return this.friendlyDescription = 'Page is ready!';
      }
    });
  }
 */
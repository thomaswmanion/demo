import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StarWarsCharacter } from 'app/customer/star-wars-character.interface';

@Injectable()
export class CustomerService {

  constructor(
    public http: HttpClient
  ) { }

  async getStarWarsCharacter(): Promise<StarWarsCharacter> {
    const result = await this.http.get('https://swapi.co/api/people/1/').toPromise();
    // Transforms

    return result as any;
  }
}

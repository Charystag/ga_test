import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalutationService {

  constructor() { }

  public saluer(nom: string): string {
    return `Salut ${nom} !`;
  }
}

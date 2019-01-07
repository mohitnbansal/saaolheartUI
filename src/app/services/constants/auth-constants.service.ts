import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthConstantsService {

  constructor() { }
}

export const TOKEN_AUTH_USERNAME = 'devglan-client';
export const TOKEN_AUTH_PASSWORD = 'devglan-secret';
export const TOKEN_NAME = 'access_token';

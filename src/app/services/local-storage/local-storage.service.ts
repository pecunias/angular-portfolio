import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  async setItem(key: string, value: any) {
    await null;
    return localStorage.setItem(key, value);
  }

  async getItem(key: string) {
    await null;
    return localStorage.getItem(key);
  }
}

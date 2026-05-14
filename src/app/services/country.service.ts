// src/app/services/country.service.ts
// This service handles all HTTP requests related to country management
// It uses Angular's HttpClient to communicate with the backend API

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface for Country object
export interface Country {
  id?: number;
  name: string;
  capital: string;
  population: number;
  continent: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  // Base URL for API endpoints
  private apiUrl = '/api/countries';

  // Inject HttpClient for making HTTP requests
  constructor(private http: HttpClient) { }

  /**
   * Fetch all countries from the API
   * @returns Observable<Country[]> - Array of countries
   */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  /**
   * Get a single country by ID
   * @param id - Country ID
   * @returns Observable<Country> - Single country object
   */
  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  /**
   * Add a new country
   * @param country - Country object to add
   * @returns Observable<Country> - Created country object
   */
  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  /**
   * Update an existing country
   * @param id - Country ID
   * @param country - Updated country object
   * @returns Observable<Country> - Updated country object
   */
  updateCountry(id: number, country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${id}`, country);
  }

  /**
   * Delete a country by ID
   * @param id - Country ID
   * @returns Observable<void> - Confirmation of deletion
   */
  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

// src/app/components/country/country.component.ts
// This component manages country CRUD operations
// It displays a list of countries, allows adding/editing/deleting countries

import { Component, OnInit } from '@angular/core';
import { CountryService, Country } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  // Array to store list of countries
  countries: Country[] = [];

  // Object to hold form data for adding/editing
  countryForm: Country = {
    name: '',
    capital: '',
    population: 0,
    continent: ''
  };

  // Flag to track if we're editing an existing country
  isEditing = false;

  // ID of the country being edited
  editingCountryId: number | null = null;

  // Flag to show/hide the form
  showForm = false;

  // Error message to display
  errorMessage = '';

  // Success message to display
  successMessage = '';

  // Inject CountryService for API calls
  constructor(private countryService: CountryService) { }

  /**
   * Angular lifecycle hook - runs when component initializes
   * Loads the list of countries from API
   */
  ngOnInit(): void {
    this.getCountries();
  }

  /**
   * Fetch all countries from the API
   * This method calls the service to get countries from the backend
   */
  getCountries(): void {
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error('Error fetching countries:', err);
        this.errorMessage = 'Failed to fetch countries. Using sample data.';
        // Use sample data if API fails
        this.countries = [
          { id: 1, name: 'India', capital: 'New Delhi', population: 1393409038, continent: 'Asia' },
          { id: 2, name: 'USA', capital: 'Washington D.C.', population: 333287557, continent: 'North America' },
          { id: 3, name: 'France', capital: 'Paris', population: 67750000, continent: 'Europe' }
        ];
      }
    });
  }

  /**
   * Toggle the form visibility
   * Used to show/hide the add/edit form
   */
  toggleForm(): void {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.resetForm();
    }
  }

  /**
   * Add a new country
   * Validates form and makes API call to add country
   */
  addCountry(): void {
    // Validate form inputs
    if (!this.countryForm.name || !this.countryForm.capital || !this.countryForm.population) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    if (this.countryForm.name.length < 2) {
      this.errorMessage = 'Country name must be at least 2 characters';
      return;
    }

    if (this.countryForm.population < 0) {
      this.errorMessage = 'Population cannot be negative';
      return;
    }

    // Call service to add country
    this.countryService.addCountry(this.countryForm).subscribe({
      next: (newCountry) => {
        this.countries.push(newCountry);
        this.successMessage = 'Country added successfully!';
        this.resetForm();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Error adding country:', err);
        this.errorMessage = 'Failed to add country';
      }
    });
  }

  /**
   * Edit an existing country
   * Populates the form with country data for editing
   * @param country - Country object to edit
   */
  editCountry(country: Country): void {
    this.isEditing = true;
    this.showForm = true;
    this.editingCountryId = country.id || null;
    this.countryForm = { ...country };
  }

  /**
   * Update the country
   * Saves changes to the existing country via API
   */
  updateCountry(): void {
    // Validate form inputs
    if (!this.countryForm.name || !this.countryForm.capital || !this.countryForm.population) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    if (this.countryForm.name.length < 2) {
      this.errorMessage = 'Country name must be at least 2 characters';
      return;
    }

    if (this.editingCountryId === null) {
      this.errorMessage = 'Invalid country ID';
      return;
    }

    // Call service to update country
    this.countryService.updateCountry(this.editingCountryId, this.countryForm).subscribe({
      next: (updatedCountry) => {
        const index = this.countries.findIndex(c => c.id === this.editingCountryId);
        if (index > -1) {
          this.countries[index] = updatedCountry;
        }
        this.successMessage = 'Country updated successfully!';
        this.resetForm();
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Error updating country:', err);
        this.errorMessage = 'Failed to update country';
      }
    });
  }

  /**
   * Delete a country
   * Removes country from the list via API call
   * @param id - Country ID to delete
   */
  deleteCountry(id: number | undefined): void {
    if (id === undefined || !confirm('Are you sure you want to delete this country?')) {
      return;
    }

    // Call service to delete country
    this.countryService.deleteCountry(id).subscribe({
      next: () => {
        this.countries = this.countries.filter(c => c.id !== id);
        this.successMessage = 'Country deleted successfully!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Error deleting country:', err);
        this.errorMessage = 'Failed to delete country';
      }
    });
  }

  /**
   * Reset the form to initial state
   * Used after successful add/update operations
   */
  resetForm(): void {
    this.countryForm = {
      name: '',
      capital: '',
      population: 0,
      continent: ''
    };
    this.isEditing = false;
    this.editingCountryId = null;
    this.showForm = false;
  }

  /**
   * Cancel editing and close form
   */
  cancelEdit(): void {
    this.resetForm();
  }
}

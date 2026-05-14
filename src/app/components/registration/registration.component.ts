// src/app/components/registration/registration.component.ts
// This component handles user registration with form validation
// Validates name, email, and password with specific requirements

import { Component } from '@angular/core';

// Interface for registration form data
export interface RegistrationForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Interface for form errors
export interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // Form data object
  form: RegistrationForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  // Object to store form validation errors
  errors: FormErrors = {};

  // Flag to track if form has been submitted
  submitted = false;

  // Success message to display after registration
  successMessage = '';

  // Flag to show/hide password field
  showPassword = false;

  // Flag to show/hide confirm password field
  showConfirmPassword = false;

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Toggle confirm password visibility
   */
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  /**
   * Validate the registration form
   * Checks all validation rules and stores errors
   * @returns boolean - true if form is valid, false otherwise
   */
  validateForm(): boolean {
    this.errors = {};
    let isValid = true;

    // Validate Name
    if (!this.form.name || this.form.name.trim() === '') {
      this.errors.name = 'Name is required';
      isValid = false;
    } else if (this.form.name.length < 3) {
      this.errors.name = 'Name must be at least 3 characters long';
      isValid = false;
    } else if (this.form.name.length > 50) {
      this.errors.name = 'Name cannot exceed 50 characters';
      isValid = false;
    }

    // Validate Email
    if (!this.form.email || this.form.email.trim() === '') {
      this.errors.email = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.form.email)) {
      this.errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate Password
    if (!this.form.password || this.form.password.trim() === '') {
      this.errors.password = 'Password is required';
      isValid = false;
    } else if (this.form.password.length < 6) {
      this.errors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else if (!this.isStrongPassword(this.form.password)) {
      this.errors.password = 'Password must contain letters, numbers, and special characters';
      isValid = false;
    }

    // Validate Confirm Password
    if (!this.form.confirmPassword || this.form.confirmPassword.trim() === '') {
      this.errors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (this.form.password !== this.form.confirmPassword) {
      this.errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    return isValid;
  }

  /**
   * Check if email format is valid
   * Uses regular expression to validate email pattern
   * @param email - Email to validate
   * @returns boolean - true if email is valid
   */
  isValidEmail(email: string): boolean {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Check if password is strong
   * Password should contain at least one letter, one number, and one special character
   * @param password - Password to validate
   * @returns boolean - true if password is strong
   */
  isStrongPassword(password: string): boolean {
    // Check for at least one letter
    const hasLetter = /[a-zA-Z]/.test(password);
    // Check for at least one number
    const hasNumber = /[0-9]/.test(password);
    // Check for at least one special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return hasLetter && hasNumber && hasSpecialChar;
  }

  /**
   * Handle form submission
   * Validates form and processes registration
   */
  onSubmit(): void {
    this.submitted = true;

    // Validate form before submission
    if (!this.validateForm()) {
      return;
    }

    // Simulate registration (in real app, this would call an API service)
    console.log('Registration data:', {
      name: this.form.name,
      email: this.form.email
    });

    // Show success message
    this.successMessage = `Welcome ${this.form.name}! You have been successfully registered.`;

    // Reset form after successful registration
    setTimeout(() => {
      this.resetForm();
    }, 2000);
  }

  /**
   * Reset the registration form to initial state
   * Clears all inputs and errors
   */
  resetForm(): void {
    this.form = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
    this.errors = {};
    this.submitted = false;
    this.successMessage = '';
  }

  /**
   * Check if a field has an error
   * Used in template to show error messages
   * @param fieldName - Name of the field to check
   * @returns boolean - true if field has an error
   */
  hasError(fieldName: keyof FormErrors): boolean {
    return this.submitted && !!(this.errors[fieldName]);
  }

  /**
   * Get error message for a field
   * @param fieldName - Name of the field
   * @returns string - Error message if exists, empty string otherwise
   */
  getErrorMessage(fieldName: keyof FormErrors): string {
    return this.errors[fieldName] || '';
  }
}

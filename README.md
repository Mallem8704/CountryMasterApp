# Country Master Management System

A complete Angular frontend application for managing countries with CRUD operations and user registration with validation.

## Features

### 1. **Country Management**
- ✅ Display list of countries in a table
- ✅ Add new country with validation
- ✅ Edit existing country
- ✅ Delete country with confirmation
- ✅ RESTful API integration

### 2. **Registration Form**
- ✅ User registration with validation
- ✅ Name validation (minimum 3 characters)
- ✅ Email validation (valid email format)
- ✅ Password validation (minimum 6 characters, must contain letters, numbers, and special characters)
- ✅ Confirm password matching
- ✅ Error messages for each field
- ✅ Show/hide password functionality

### 3. **Technical Implementation**
- ✅ Angular Components with TypeScript
- ✅ FormsModule for form binding with ngModel
- ✅ HttpClientModule for API integration
- ✅ ngFor for list rendering
- ✅ Responsive design
- ✅ Professional UI styling

## Project Structure

```
CountryMasterApp/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── country/
│   │   │   │   ├── country.component.ts
│   │   │   │   ├── country.component.html
│   │   │   │   └── country.component.css
│   │   │   └── registration/
│   │   │       ├── registration.component.ts
│   │   │       ├── registration.component.html
│   │   │       └── registration.component.css
│   │   ├── services/
│   │   │   └── country.service.ts
│   │   ├── app.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── main.ts
│   ├── index.html
│   └── styles.css
├── package.json
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (optional)

### Steps to Run

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   
   The application will be available at `http://localhost:4200`

3. **Build for Production**
   ```bash
   npm run build
   ```

## API Endpoints

The application is configured to use the following API endpoints:

```
GET    /api/countries          - Get all countries
POST   /api/countries          - Create new country
PUT    /api/countries/:id      - Update country
DELETE /api/countries/:id      - Delete country
```

### Sample Country Object
```json
{
  "id": 1,
  "name": "India",
  "capital": "New Delhi",
  "population": 1393409038,
  "continent": "Asia"
}
```

## Component Details

### CountryComponent
**File:** `src/app/components/country/country.component.ts`

**Methods:**
- `getCountries()` - Fetch all countries from API
- `addCountry()` - Add new country
- `editCountry(country)` - Edit existing country
- `updateCountry()` - Update country
- `deleteCountry(id)` - Delete country
- `resetForm()` - Reset form to initial state

**Features:**
- Add/Edit form with validation
- Countries table with actions
- Error and success messages
- Sample data fallback if API fails

### RegistrationComponent
**File:** `src/app/components/registration/registration.component.ts`

**Methods:**
- `validateForm()` - Validate all form fields
- `isValidEmail(email)` - Validate email format
- `isStrongPassword(password)` - Check password strength
- `onSubmit()` - Handle form submission
- `resetForm()` - Reset form

**Validation Rules:**
- **Name:** Minimum 3 characters, maximum 50 characters
- **Email:** Valid email format (abc@example.com)
- **Password:** Minimum 6 characters, must contain letters, numbers, and special characters
- **Confirm Password:** Must match password field

## Key Angular Features Used

### 1. **Components**
- Standalone component modules
- Component lifecycle (ngOnInit)
- Component communication with services

### 2. **Forms**
- Two-way binding with ngModel
- Form validation with custom validators
- Error message display

### 3. **Directives**
- ngIf - Conditional rendering
- ngFor - List rendering
- ngClass - Dynamic class binding

### 4. **Services**
- CountryService for API calls
- Observable pattern with RxJS
- Dependency injection

### 5. **HTTP Client**
- GET, POST, PUT, DELETE methods
- Error handling
- Observable streams

## Styling

The application uses:
- **CSS Grid** for responsive layouts
- **Flexbox** for component alignment
- **Custom animations** for smooth transitions
- **Mobile-first** responsive design
- **Professional color scheme** with accessible contrast

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Sample Data

When API is unavailable, the app provides sample countries:
- India
- USA
- France

## Future Enhancements

- [ ] Backend API development
- [ ] Database integration
- [ ] User authentication
- [ ] Search and filter functionality
- [ ] Pagination
- [ ] Export to CSV/PDF
- [ ] Advanced form validation
- [ ] API error handling improvements

## Notes

- The API endpoints are configured as relative URLs and can be updated in `country.service.ts`
- Sample data is provided to demonstrate functionality when API is unavailable
- All form validations are performed on the client side
- The app uses bootstrap column concept for responsive design

## License

MIT License - See LICENSE file for details

## Author

Created by Mallem8704

## Support

For issues or questions, please create an issue in the repository.

---

**Version:** 1.0.0  
**Last Updated:** May 2026

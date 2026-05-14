# Angular Country Master App - Complete Setup Guide

## 🚀 Project Overview

This is a fully functional Angular frontend application for managing countries with complete CRUD operations and user registration with advanced validation.

### Live Features Implemented:
✅ **Country Management System** - Add, Edit, Delete, View countries  
✅ **Registration Form** - Complete with validation  
✅ **API Integration** - RESTful API ready  
✅ **Professional UI** - Responsive and user-friendly  
✅ **Form Validation** - Client-side validation  
✅ **Error Handling** - Comprehensive error management  

---

## 📦 Installation & Setup

### Prerequisites
Ensure you have installed:
- **Node.js** v18 or higher
- **npm** v9 or higher

### Step 1: Clone the Repository
```bash
git clone https://github.com/Mallem8704/CountryMasterApp.git
cd CountryMasterApp
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required Angular packages including:
- @angular/core
- @angular/forms (for form handling)
- @angular/common (for ngFor, ngIf directives)
- @angular/platform-browser
- @angular/platform-browser-dynamic
- @angular/common/http (for HTTP requests)

### Step 3: Start Development Server
```bash
npm start
```

The application will automatically open at: **http://localhost:4200**

### Step 4: Build for Production
```bash
npm run build
```

The optimized build will be created in the `dist/` folder.

---

## 🏗️ Project Structure

```
CountryMasterApp/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── country/                    # Country Management Component
│   │   │   │   ├── country.component.ts    # Logic (CRUD operations)
│   │   │   │   ├── country.component.html  # Template (Table, Form)
│   │   │   │   └── country.component.css   # Styling
│   │   │   │
│   │   │   └── registration/               # Registration Component
│   │   │       ├── registration.component.ts    # Validation logic
│   │   │       ├── registration.component.html  # Registration form
│   │   │       └── registration.component.css   # Form styling
│   │   │
│   │   ├── services/
│   │   │   └── country.service.ts          # API Service (GET, POST, PUT, DELETE)
│   │   │
│   │   ├── app.module.ts                   # Root module (imports FormsModule, HttpClientModule)
│   │   ├── app.component.ts                # Root component
│   │   ├── app.component.html              # Navigation and routing
│   │   └── app.component.css               # Global component styles
│   │
│   ├── main.ts                             # Application entry point
│   ├── index.html                          # HTML entry point
│   └── styles.css                          # Global styles
│
├── package.json                            # Dependencies & Scripts
├── angular.json                            # Angular configuration
├── tsconfig.json                           # TypeScript configuration
├── .gitignore                              # Git ignore rules
├── README.md                               # Project documentation
└── SETUP_GUIDE.md                          # This file
```

---

## 🎯 Key Angular Concepts Used

### 1. **Components**
- **CountryComponent** - Manages country CRUD operations
- **RegistrationComponent** - Handles user registration
- **AppComponent** - Root component with navigation

### 2. **Directives**
- `*ngIf` - Conditional rendering (show/hide elements)
- `*ngFor` - List rendering (display countries in table)
- `[class.active]` - Dynamic CSS class binding

### 3. **Forms & Binding**
- `[(ngModel)]` - Two-way data binding for forms
- `(ngSubmit)` - Handle form submission
- `(click)` - Handle button clicks
- `[disabled]` - Dynamic attribute binding

### 4. **Services**
- **CountryService** - Centralized API communication
- Dependency Injection - Services injected via constructor

### 5. **HTTP Client**
- `GET /api/countries` - Fetch all countries
- `POST /api/countries` - Create new country
- `PUT /api/countries/:id` - Update country
- `DELETE /api/countries/:id` - Delete country

---

## 📋 Component Details

### CountryComponent

**Location:** `src/app/components/country/country.component.ts`

**Main Methods:**

```typescript
// Fetch all countries from API
getCountries(): void

// Validate and add new country
addCountry(): void

// Prepare country for editing
editCountry(country: Country): void

// Save changes to existing country
updateCountry(): void

// Remove country with confirmation
deleteCountry(id: number | undefined): void

// Clear form after operation
resetForm(): void
```

**Features:**
- Real-time list updates
- Form validation with error messages
- Add/Edit toggle form
- Delete confirmation dialog
- Success/Error notifications

---

### RegistrationComponent

**Location:** `src/app/components/registration/registration.component.ts`

**Main Methods:**

```typescript
// Validate all form fields
validateForm(): boolean

// Check email format validity
isValidEmail(email: string): boolean

// Verify password strength
isStrongPassword(password: string): boolean

// Process form submission
onSubmit(): void

// Reset form to initial state
resetForm(): void
```

**Validation Rules:**

| Field | Rules |
|-------|-------|
| **Name** | Minimum 3 characters, Maximum 50 characters |
| **Email** | Valid email format (user@domain.com) |
| **Password** | Min 6 chars, must have letters, numbers, and special characters |
| **Confirm Password** | Must match password field |

---

## 🔌 API Integration

### Default API Configuration

The app is configured to use these endpoints:

```
BASE_URL: /api

GET    /api/countries          # Get all countries
GET    /api/countries/:id      # Get single country
POST   /api/countries          # Create new country
PUT    /api/countries/:id      # Update country
DELETE /api/countries/:id      # Delete country
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

### Changing API Base URL

Edit `src/app/services/country.service.ts`:

```typescript
private apiUrl = 'http://your-api-url.com/api/countries';
```

### Testing with Sample Data

The app includes sample data fallback. If API fails, it automatically uses:
- India (New Delhi)
- USA (Washington D.C.)
- France (Paris)

---

## 🎨 UI Features

### Country Management Page
- **Table Display** - All countries with ID, Name, Capital, Population, Continent
- **Add Button** - Toggle form to add new country
- **Edit Button** - Update existing country
- **Delete Button** - Remove country with confirmation
- **Search Form** - Add/Edit country with validation
- **Alerts** - Success/Error messages

### Registration Page
- **Name Input** - Min 3 characters validation
- **Email Input** - Email format validation
- **Password Input** - Strong password validation
- **Confirm Password** - Password matching validation
- **Show/Hide Password** - Toggle visibility button
- **Error Messages** - Individual field error display
- **Requirements Display** - Password requirements info

---

## 🚀 How to Use

### Adding a Country
1. Click "Country Management" in navigation
2. Click "+ Add New Country" button
3. Fill in all required fields
4. Click "Add Country" button
5. See success message and country appears in table

### Editing a Country
1. Click "Edit" button next to country
2. Form populates with country data
3. Modify values as needed
4. Click "Update Country" button
5. See success message and table updates

### Deleting a Country
1. Click "Delete" button next to country
2. Confirm deletion in dialog
3. Country removed from table
4. See success message

### Registering a User
1. Click "Registration" in navigation
2. Fill in all fields with valid data
3. Follow password requirements
4. Click "Register" button
5. See success message

---

## 📝 Code Examples

### Using the Country Service

```typescript
// In component
constructor(private countryService: CountryService) {}

// Get all countries
getCountries(): void {
  this.countryService.getCountries().subscribe({
    next: (data) => {
      this.countries = data;
    },
    error: (err) => {
      console.error('Error:', err);
    }
  });
}

// Add country
addCountry(): void {
  this.countryService.addCountry(this.form).subscribe({
    next: (newCountry) => {
      this.countries.push(newCountry);
    }
  });
}
```

### Form Binding Example

```html
<!-- Two-way binding with ngModel -->
<input [(ngModel)]="form.name" name="name">

<!-- Conditional rendering with ngIf -->
<div *ngIf="showForm">Form content here</div>

<!-- List rendering with ngFor -->
<tr *ngFor="let item of items">
  <td>{{ item.name }}</td>
</tr>

<!-- Event binding -->
<button (click)="addCountry()">Add</button>

<!-- Form submission -->
<form (ngSubmit)="onSubmit()">
```

---

## 🐛 Troubleshooting

### Issue: npm install fails
**Solution:** Delete `node_modules` and `package-lock.json`, then run `npm install` again
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### Issue: Port 4200 already in use
**Solution:** Use a different port
```bash
ng serve --port 4300
```

### Issue: API returns 404
**Solution:** Check API base URL in `country.service.ts` and ensure backend is running

### Issue: Form validation not working
**Solution:** Ensure FormsModule is imported in `app.module.ts`

### Issue: HttpClient errors
**Solution:** Ensure HttpClientModule is imported in `app.module.ts`

---

## 📚 Learning Resources

### Official Angular Documentation
- https://angular.io/docs
- https://angular.io/guide/forms
- https://angular.io/guide/http

### TypeScript Documentation
- https://www.typescriptlang.org/docs/

### Angular Best Practices
- Use services for API calls (done ✓)
- Use dependency injection (done ✓)
- Separate concerns: components, services, templates (done ✓)
- Add proper error handling (done ✓)
- Validate forms client-side (done ✓)

---

## 🔐 Security Notes

- **Client-side validation** - Implemented but always validate on backend
- **Password handling** - Passwords should be transmitted over HTTPS only
- **CORS** - Configure CORS properly if backend is on different domain
- **API Keys** - Don't expose API keys in frontend code

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

---

## 🤝 Contributing

Fork the repository and create a pull request with your improvements.

---

## 📄 License

MIT License - Free to use and modify

---

## 👤 Author

**Mallem8704**

---

## 🎓 Interview-Ready Code Features

✅ Clean, readable code with comments  
✅ Proper TypeScript typing  
✅ Angular best practices followed  
✅ Component separation of concerns  
✅ Error handling implemented  
✅ Form validation demonstrated  
✅ Responsive design  
✅ Professional UI/UX  
✅ RESTful API integration pattern  
✅ DRY (Don't Repeat Yourself) principle  

---

## ⭐ Next Steps

1. **Understand the Code** - Read through components and services
2. **Modify for Learning** - Add new features or modify existing ones
3. **Connect Backend** - Replace dummy API endpoints with real backend
4. **Enhance Features** - Add search, filter, pagination
5. **Deploy** - Deploy to GitHub Pages, Netlify, or AWS

---

**Happy Coding! 🚀**

**E-commerce Frontend Application**

This React application implements a user interface for an e-commerce platform, featuring functionalities like product listings, product details, search, sorting, filtering (checkboxes), and basic CRUD operations (Add Product functionality is implemented as a form).

**Key Features:**

- **Product Listings:**
   - Fetches product data from the backend using a custom `useFetch` hook.
   - Sorts products in ascending or descending order (configurable).
   - Adjusts the number of products per row based on screen size (responsive design).
   - Includes an "Add Product Button" (form for creating new products).
   - Shows product tiles with image, name, and price.
   - Redirects to product detail pages on product click.
- **Product Detail Page:**
   - Displays product details like image, description, and other attributes.
   - Implements collapsible/expandable sections for product description using cards.
   - Shows a loading indicator while fetching data.
- **Search and Sorting:**
   - Provides a search bar in the Dashboard component to filter products by name.
   - Enables sorting of table rows (ascending/descending) by clicking column headers.
   - Displays visual cues (arrows) to indicate sort direction.
- **Filtering (Checkboxes):**
   - Includes checkboxes for potential filtering of products (implementation details not provided).
- **(Basic) CRUD Operations:**
   - Allows adding products using a form in the Add Product Button component (implementation details not provided).
   - Data fetching and error handling are handled by the `useFetch` hook.

**Project Structure:**

```
.
├── App.js                 # Main application entry point
├── AppRouter.jsx          # Routing configuration for different screens
├── components             # Reusable UI components
│   ├── AddProductButton.jsx  # Form for adding products
│   ├── Dashboard.jsx        # Dashboard with search, table, and filtering (checkboxes)
│   └── ProductDetailPage.jsx  # Product details page with collapsible sections
├── customHooks             # Custom hooks for data fetching and management
│   └── useFetch.jsx         # Custom hook for fetching and sending data requests
├── screens                 # Screens with specific functionalities
│   ├── ProductListingPage.jsx  # Product listing page with sorting and responsive layout
└── ...                    # Other project files (e.g., styles, assets)
```

**Installation:**

1. **Prerequisites:** Ensure you have Node.js and npm (or yarn) installed.
2. **Clone the Repository:** Use `git clone [repository URL]` to clone this repository.
3. **Install Dependencies:** Navigate to the project directory and run `npm install` (or `yarn install`) to install required dependencies.

**Running the Application:**

1. Start the development server: `npm start` (or `yarn start`)
2. Access the application in your browser (usually at http://localhost:3000/)

**Future Enhancements:**

- Implement filtering functionality based on checkboxes.
- Add validation and error handling for form submissions (Add Product form).
- Consider pagination for potentially large product lists.
- Integrate user authentication and authorization for advanced features.
- Implement unit tests for critical components and hooks to ensure code quality.

**Contribution:**

Feel free to fork this repository, make improvements, and submit pull requests!

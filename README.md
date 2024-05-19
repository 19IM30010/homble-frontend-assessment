
****###Assessment Tasks###***

**Key Features:**

**Product Listings:**
Fetches product data from the backend using a custom useFetch hook.
Sorts products in ascending or descending order (configurable).
Adjusts the number of products per row based on screen size (responsive design).
Includes an "Add Product Button" (form for creating new products).
Shows product tiles with image, name, and price.
Redirects to product detail pages on product click.

**Product Detail Page:**

Displays product details like image, description, and other attributes.
Implements collapsible/expandable sections for product description using cards.
Shows a loading indicator while fetching data.

**Search and Sorting:(DashBoard Page)**

Provides a search bar in the Dashboard component to filter products by name.
Enables sorting of table rows (ascending/descending) by clicking column headers.
Displays visual cues (arrows) to indicate sort direction.

**Filtering (Checkboxes):**

Includes checkboxes for potential filtering of products.

**(Basic) CRUD Operations:**

Allows adding products using a form in the Add Product Button component.
Data fetching and error handling are handled by the useFetch hook.

**Project Structure:**

.
├── App.js                 # Main application entry point
├── AppRouter.jsx          # Routing configuration for different screens
├── components             # Reusable UI components
│   ├── AddProductButton.js  # Form for adding products
│   ├── Dashboard
         |-Dashboard.js        # Dashboard with search, table, and filtering (checkboxes)
│   
├── customHooks             # Custom hooks for data fetching and management
│   └── useFetch.js         # Custom hook for fetching and sending data requests
├── screens                 # Screens with specific functionalities
│   ├── ProductListingPage.js  # Product listing page with sorting and responsive layout
|   └── ProductDetailPage.js  # Product details page with collapsible sections
└── ...                    # Other project files (e.g., styles, assets)

# Project: New Wear Well
> Last audited: 2026-03-20

## 🗂️ Tech Stack
- **Language(s):** JavaScript (ES6+), HTML, CSS
- **Framework(s):** React (v19.1.1), Vite (v8.0.0)
- **Database:** None (Hardcoded Mock Data)
- **Key Libraries:**
  - React Router DOM (v7.13.1) for routing
  - Tailwind CSS (v4.2.1) & PostCSS for styling
  - Framer Motion (v12.38.0) for animations
  - Lucide React (v0.577.0) for icons
  - @emailjs/browser (v4.4.1) for email submission
- **Dev Tools:** ESLint, Prettier (implied by default Vite setup), Autoprefixer

## 📁 Project Structure
- `src/` - Contains all application source code
  - `components/` - Contains all React components, page layouts, and UI elements.
  - `App.jsx` - Main application wrapper defining routes and global layout (Navbar, Footer, BookingDrawer).
  - `index.jsx` - React DOM entry point.
  - `index.css` & `App.css` - Global styling and Tailwind directives.
- `public/` - Static public assets.
- `dist/` - Production build output directory.

## ✅ Implemented Features

### Routing & Navigation
- Client-side routing implemented using `react-router-dom` in `App.jsx`.
- **Routes:**
  - `/` -> `HomePage`
  - `/collections` -> `CollectionPage`
  - `/real-experience` -> `RealExperiencePage`
  - `/product/:id` -> `ProductDetailPage`
  - `/real-experience/:id` -> `RealExperienceDetailPage`
- **Top Navbar:** Static navigation with links, WhatsApp messaging button, and a global "Book Appointment" trigger opening a drawer.

### Home Page
- Assembles layout using multiple components: `Hero`, `Heritage`, `ShopByOccasion`, `Collections`, `RealExperience`, and `Reviews`.
- Supports hash link smooth scrolling to specific page sections.

### Collections Page
- Displays a grid of garment products.
- Implements a dual-filtering system by `occasion` (Wedding, Haldi, etc.) and `type` (Tuxedo, Sherwani, etc.).
- Product data is hardcoded entirely within `CollectionPage.jsx`.

### Product Detail Page (`ProductDetailPage.jsx`)
- Displays product images with a clickable thumb gallery.
- Shows product details including fabric type, description, and estimated breakdown costs (fabric and stitching).
- Includes a trigger to open the booking drawer.
- Data is currently hardcoded (`pdp-mock`) and does not change based on route ID.

### Booking Drawer (`BookingDrawer.jsx`)
- A sliding side drawer for booking appointments.
- Multi-step form (3 steps):
  1. Personal details (Name, Phone)
  2. Garment selection (Sherwani, Tuxedo, etc.)
  3. Appointment scheduling (Date, Time)
- Form validation ensures fields are populated before continuing steps.
- Uses `emailjs` to send booking details upon final confirmation.

## 🔌 Integrations & APIs
- **EmailJS:** Integrated into `BookingDrawer.jsx` (Service ID: `service_98xl0yn`, Template ID: `template_0ymowqy`) to send appointment emails to `samkhr1806@gmail.com`.
- **WhatsApp:** Direct `wa.me` external link integrated into the `Navbar.jsx` UI.

## 🗄️ Database / Data Models
*No real database is connected. All data relies on hardcoded JavaScript arrays and objects internally inside components.*
- **Products Schema:** Contains `id`, `title`, `tag`, `imageSrc`, `occasion`, `type`.
- **Product Details Schema:** Contains `fabricType`, `description`, `images` (array), `estimatedFabricCost`, `estimatedStitchingCost`.

## 🔐 Auth & Permissions
- None. The application is completely public-facing without any user authentication or restricted routes.

## 🧩 Pending / Incomplete
- **Backend/API Integration:** All product and experience data is hardcoded. The project requires a real backend or CMS to manage content dynamically.
- **Dynamic Routing Data:** `ProductDetailPage` and `RealExperienceDetailPage` use static, hardcoded mock data regardless of the actual `:id` passed in the URL parameters.
- **E-commerce logic:** The site functions mostly as a digital catalog and booking platform; it does not contain cart/checkout capabilities.

## 📝 Notes for AI Assistants
- The project styling relies heavily on Tailwind CSS utility classes combined with custom CSS CSS variables defined globally (e.g., `[var(--color-cream)]`, `[var(--color-espresso)]`, `[var(--color-maroon)]`). Ensure you use these variables instead of absolute hex colors when styling.
- Local state management is handled exclusively via React Hooks (`useState`, `useMemo`, `useEffect`). Avoid introducing global state libraries like Redux unless absolutely necessary.
- Form submissions go through EmailJS right now. Do not add backend REST API calls for sending data unless instructed to build a backend infrastructure.

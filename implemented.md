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
- **Top Navbar:** Responsive navigation with a mobile hamburger menu. Includes links, WhatsApp messaging button, and a global "Book Appointment" trigger opening a drawer.

### Home Page
- Assembles layout using multiple components: `Hero`, `Heritage`, `ShopByOccasion`, `Collections`, `RealExperience`, and `Reviews`.
- Supports hash link smooth scrolling to specific page sections.
- **Mobile Responsiveness:** Layouts are optimized for mobile, including adjusted `Hero` text flow (`mt-32`) and prevented `Heritage` badge clipping, while preserving desktop structures (`md:`, `lg:` classes).

### Collections Page
- Displays a grid of garment products.
- Implements a dual-filtering system by `occasion` (Wedding, Haldi, etc.) and `type` (Tuxedo, Sherwani, etc.).
- Product data is hardcoded entirely within `CollectionPage.jsx`.

### Product Detail Page (`ProductDetailPage.jsx`) & Real Experience Detail Page (`RealExperienceDetailPage.jsx`)
- Displays images with a clickable, vertically scrollable thumb gallery (custom branded maroon `webkit-scrollbar`, restricted height `max-h-[340px]`).
- Product details including fabric type, description, and estimated breakdown costs.
- Portfolio details including client name, crafting time, and story.
- Includes a trigger to open the booking drawer.
- Data is currently hardcoded and does not dynamically change based on route ID.

### Booking Drawer (`BookingDrawer.jsx`)
- A sliding side drawer for booking appointments.
- Multi-step form (3 steps):
  1. Personal details (Name, Phone)
  2. Garment selection (Sherwani, Tuxedo, etc.)
  3. Appointment scheduling (Date, Time)
- Form validation ensures fields are populated before continuing steps.
- Uses `emailjs` to send booking details upon final confirmation.

## UI Enhancements
- **Dynamic Data Rendering:** Replace hardcoded properties with a headless CMS to allow non-developers to update products, experiences, and collections.
- **E-commerce Cart:** Allow users to directly pay a deposit online for their bespoke orders instead of just booking appointments.
- **Global State Management:** Wrap user appointment details or persistent preferences in Context or Redux before forms scale up.

## 🔌 Integrations & APIs
- **EmailJS:** Integrated into `BookingDrawer.jsx` (Service ID: `service_98xl0yn`, Template ID: `template_0ymowqy`) to send appointment emails to `samkhr1806@gmail.com`.
- **WhatsApp:** Direct `wa.me` external link integrated into the `Navbar.jsx` UI and Hero sections.

## 🗄️ Database / Data Models
*No real database is connected. All data relies on hardcoded JavaScript arrays and objects internally inside components.*
- **Products Schema:** Contains `id`, `title`, `tag`, `imageSrc`, `occasion`, `type`.
- **Product Details Schema:** Contains `fabricType`, `description`, `images` (array), `estimatedFabricCost`, `estimatedStitchingCost`.
- **Portfolio Schema:** Contains `id`, `clientName`, `garmentName`, `story`, `images` (array), `details` (object).

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
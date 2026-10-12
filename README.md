# CrispDental Clinic

A modern, mobile-responsive website for a dental clinic, built with React and Tailwind CSS.

>  **Status: still in building.** New pages and sections are being added, so some links and content are placeholders for now.

## Live preview

 **[crispdental.vercel.app](https://crispdental.vercel.app)**

## Features

- Responsive navbar with a mobile hamburger menu and active-page highlighting
- Hero section with a call to action and client social proof
- "Why clients trust us" section
- Step-by-step guide to getting our services, from booking to leaving the clinic
- FAQ accordion
- Services preview with a link to the full services page
- Team preview with a link to the full team page
- Client reviews
- Footer with quick links, resources, and contact details
- Accessible by design: keyboard focus styles, ARIA labels, and good color contrast

## Tech stack

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/) for page navigation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Vercel](https://vercel.com/) for hosting

## Pages

| Route       | Page                  | Status      |
| ----------- | --------------------- | ----------- |
| `/`         | Home                  | In progress |
| `/services` | Services              | In progress |
| `/team`     | Our team              | In progress |
| `/blog`     | Blog                  | In progress |
| `/about`    | About us              | Planned     |
| `/contact`  | Contact / book a visit | Planned     |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo-name>.git

# Move into the project folder
cd <your-repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local address shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

## Project structure

```
src/
├── component/    # Reusable sections (Navbar, Hero, Footer, and more)
├── pages/        # Route pages (Home, Services, OurTeam, Blog)
├── App.jsx       # Routes and layout
└── main.jsx      # App entry point
```

## Roadmap

- [ ] Finish the Services, Our team, and Blog pages
- [ ] Add the About us and Contact pages
- [ ] Add an online appointment booking form
- [ ] Add insurance information, privacy policy, and terms pages
- [ ] Replace placeholder images and copy with real content

## Author

Built by Devsam.

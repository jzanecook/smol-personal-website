1. Exported Variables:
   - `Header` from `components/Header.js`
   - `Footer` from `components/Footer.js`
   - `ProjectCard` from `components/ProjectCard.js`
   - `ContactForm` from `components/ContactForm.js`

2. Data Schemas:
   - `Project` schema for `ProjectCard` component, which includes properties like `title`, `description`, `image`, and `link`.

3. ID Names of DOM Elements:
   - `#header` for the Header component
   - `#footer` for the Footer component
   - `#project-card` for each ProjectCard component
   - `#contact-form` for the ContactForm component

4. Message Names:
   - `SUBMIT_SUCCESS` for successful form submission in `ContactForm`
   - `SUBMIT_ERROR` for form submission errors in `ContactForm`

5. Function Names:
   - `handleSubmit` in `ContactForm` for handling form submission
   - `getStaticProps` in `pages/index.js`, `pages/about.js`, `pages/projects.js`, and `pages/contact.js` for fetching data at build time in Next.js

6. Shared Styling:
   - `styles/globals.css` is shared across all pages
   - `tailwind.config.js` for Tailwind CSS configuration

7. Shared Dependencies in `package.json`:
   - `next` for Next.js
   - `react` and `react-dom` for React.js
   - `tailwindcss` for Tailwind CSS

8. Shared Configuration:
   - `next.config.js` for Next.js configuration
   - `.gitignore` for Git configuration

9. Shared Assets:
   - `public/favicon.ico` for the website favicon
   - `public/images/profile.jpg`, `public/images/project1.jpg`, `public/images/project2.jpg`, `public/images/project3.jpg` for website images.
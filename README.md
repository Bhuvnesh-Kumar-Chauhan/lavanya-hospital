# Lavanya Hospital Website — Node.js / Express

A responsive, modern hospital website starter for Lavanya Hospital, Kashipur. It includes a home page, hospital overview, specialities, doctor profiles, facilities, appointment enquiry form, FAQs, contact/location section and footer.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm start
```
Then open `http://localhost:3000`.

Health check: `http://localhost:3000/health`

## First edits before publishing
1. Edit `public/js/site-config.js` and replace hospital phone, email, address, visiting hours and verified Google Maps URL.
2. Replace `public/assets/logo.png` with the hospital's real logo (keep the same filename) and `public/assets/favicon.png` with the browser-tab icon. `apple-touch-icon.png` is used when the site is saved to a phone home screen.
3. Replace the illustrated placeholder files with approved real images, retaining the filenames below or updating the image references in `public/index.html`:
   - `hero-hospital.svg` — main hero visual
   - `hospital-care.svg` — about section image
   - `hospital-facility.svg` — facilities section image
   - `doctor-01.svg`, `doctor-02.svg`, `doctor-03.svg` — doctor portraits
4. Replace all sample service/speciality descriptions with actual, management-approved hospital services. Doctor names, degrees, credentials, schedules, emergency numbers and facilities must be verified before launch.
5. Add a real form backend or connect the enquiry form to an approved secure service before accepting real enquiries. Currently, the form validates fields locally and does not store or submit patient data. If a hospital WhatsApp number is added to `whatsappNumber` in `site-config.js`, the form opens a pre-filled WhatsApp message instead.
6. Replace the default metadata in `public/index.html` (page title, description, social preview) and add the final domain/canonical URL before launch.

## Important notes
- Specialities and doctor cards are demo content/placeholders, not assertions about actual services or personnel. Verify with the hospital.
- No patient database, admin panel, login, appointment booking engine, payment gateway or medical-record system is included.
- Hosting is configured as a normal Express app. For deployment, use a Node.js-compatible host and configure HTTPS, environment variables, backups and security appropriate to the chosen platform.
- `Designed & Maintained By 12TwentyOne WebCraft` credit is linked to https://www.1221webcraft.com.

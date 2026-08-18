# AgroProcureBD Frontend - Phase 1 to Phase 7

This is the ready-made React frontend source code for **AgroProcureBD: Smart Agricultural Marketplace and Government Procurement Platform**.

## Included Phases

1. Public Website
2. Authentication UI
3. Profile Management UI
4. Farmer Module
5. Buyer Module
6. Government Procurement Module
7. Bidding System

## Technology

- HTML
- CSS
- JavaScript
- React
- Vite

## Important

This package is frontend-only. Backend, SQL database, OTP, real login, file storage, payment, and shipping will be connected later.

All data is currently mock/demo data stored inside:

```text
src/data/mockData.js
```

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
```

## Vercel Deployment

1. Create a GitHub repository.
2. Upload/push this project.
3. Open Vercel.
4. Import the GitHub repository.
5. Select Framework: Vite.
6. Build command: `npm run build`
7. Output directory: `dist`
8. Deploy.

## Demo Roles

Because backend is not connected yet, login/register pages are only UI screens. You can navigate directly from the menu to test all pages.

## Main Routes

- `/`
- `/products`
- `/procurements`
- `/login`
- `/register/buyer`
- `/register/farmer`
- `/register/government-officer`
- `/farmer/dashboard`
- `/buyer/dashboard`
- `/government/dashboard`
- `/bids`
- `/admin/verification-requests`

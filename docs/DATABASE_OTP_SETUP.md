# AgroProcureBD Database and OTP Setup Plan

## Recommended Backend Stack

- Node.js
- Express.js
- PostgreSQL
- pg package for database connection
- bcrypt for password hashing
- jsonwebtoken for JWT authentication
- multer for ID card upload
- Brevo API or SMTP for email OTP

## Main Database Tables

1. users
2. email_otps
3. farmers
4. government_officers
5. products
6. procurements
7. bids
8. orders
9. order_items
10. payments
11. document_uploads
12. admin_actions

## OTP Registration Flow

1. User submits registration form.
2. Backend checks whether email already exists.
3. Backend creates a 6-digit OTP.
4. Backend hashes the OTP.
5. Backend stores the hashed OTP with 5-minute expiry.
6. Backend sends the OTP to the user email.
7. User submits OTP.
8. Backend verifies OTP.
9. Backend marks email as verified.
10. If user is buyer, account can be activated.
11. If user is farmer, account can wait for admin review.
12. If user is government officer, account must wait for ID card approval by admin.

## Government Officer Approval Flow

1. Government officer registers with employee ID and ID card upload.
2. Account status becomes pending.
3. Admin sees the request in the admin panel.
4. Admin opens uploaded ID card and officer information.
5. Admin approves or rejects the account.
6. Approved government officer can post procurement requests.
7. Rejected government officer cannot access procurement features.

## Login Rules

- Buyer can login after email verification.
- Farmer can login after email verification and admin approval if required.
- Government officer can login only after email verification and admin approval.
- Admin account should be created by a seed script or directly in the database.

## Required Environment Variables

```env
DATABASE_URL=
JWT_SECRET=
BREVO_API_KEY=
EMAIL_FROM=
CLIENT_URL=
```

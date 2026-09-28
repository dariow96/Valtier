# Valtier Jewelery

Bridal diamond rental website: React, TypeScript and Vinext.

## Run
Install Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```
Open http://localhost:5173/.

## Validate and build
```sh
pnpm exec tsc --noEmit
node --experimental-strip-types scripts/check-commerce.mjs
pnpm build
```

## GitHub
Extract this ZIP and upload its contents, including .gitignore and .openai/hosting.json. Uploading only the ZIP stores an archive, not a usable source repository. GitHub hosting is separate; this server-enabled project is not a static GitHub Pages export.

## Launch status
Sample inventory, generated illustrative imagery and sample prices. Minimum four-day rentals. Rental-value voucher valid for three years; 10% early-purchase discount is applied before the voucher. Voucher calculator and checkout scaffold included.

Payments are disabled. No orders, bookings or vouchers are created. Connect a payment gateway, verified webhooks, persistent orders, inventory holds and voucher issuance/redemption before enabling checkout. Replace sample products/prices/additional-day rates, provide showroom locations and appointment flow, and finalize delivery/return/deposit terms. Confirm the event starting voucher validity and redemption conditions.

Dependencies, generated output, caches, credentials and the private Sites identity are excluded. Neutral .openai/hosting.json is retained because the build imports it.

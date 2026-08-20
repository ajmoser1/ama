# Achieve More Academics

Marketing site for Achieve More Academics — 1-on-1 virtual tutoring.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Booking and interest form

Copy `.env.example` to `.env.local` and add:

- `NEXT_PUBLIC_BOOKING_URL` — your intro-call Cal.com link (opens as a popup)
- `NEXT_PUBLIC_TALLY_URL` — your Tally form link (embedded on the page)
- `NEXT_PUBLIC_ELFSIGHT_REVIEWS_WIDGET_ID` — your [Elfsight Google Reviews](https://elfsight.com/google-reviews-widget/) widget ID

Until those are set, the CTAs still render and show a short “coming soon” fallback.

## Google reviews widget

1. Create a free account at [Elfsight](https://elfsight.com/google-reviews-widget/)
2. Add the **Google Reviews** widget and connect your Google Business Profile
3. Customize layout/colors to match the site (navy `#0D1B2A`, cream `#F6F1E8`, gold `#B8956C`)
4. Click **Add to website** and copy the widget ID from the embed code (the part after `elfsight-app-`)
5. Add it to `.env.local`:

```bash
NEXT_PUBLIC_ELFSIGHT_REVIEWS_WIDGET_ID=your-widget-id-here
```

Restart `npm run dev` after updating env vars.

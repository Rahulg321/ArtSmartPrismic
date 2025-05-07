# Stripe Checkout Setup for ArtSmartPrismic

This guide will help you set up Stripe checkout for your ArtSmartPrismic website.

## Prerequisites

1. A Stripe account (you can sign up at [stripe.com](https://stripe.com))
2. Your Stripe API keys (available in your Stripe Dashboard)

## Setup Instructions

### 1. Environment Variables

Create or update your `.env.local` file with the following variables:

```
# Stripe API keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_SITE_URL` to your actual domain.

### 2. Stripe Dashboard Setup

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Make sure your account is activated and can accept payments
3. Configure your branding, email settings, and other preferences

### 3. Testing

1. For testing, use Stripe's test card numbers:
   - Card number: `4242 4242 4242 4242`
   - Expiration date: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

2. Run your application in development mode:
   ```
   npm run dev
   ```

3. Click on the "Buy Now" button for any product to test the checkout flow

### 4. Going Live

1. Replace your test API keys with live API keys in your environment variables
2. Update `NEXT_PUBLIC_SITE_URL` to your production domain
3. Deploy your application

## Customization

You can customize the checkout experience by modifying:

- `app/api/checkout/route.ts` - Backend API for creating checkout sessions
- `app/utils/stripe.ts` - Client-side utilities for Stripe
- `app/components/BuyNowButton.tsx` - The Buy Now button component
- `app/checkout/success/page.tsx` - The success page after checkout

## Troubleshooting

If you encounter issues:

1. Check your Stripe Dashboard for error logs
2. Verify your API keys are correctly set in `.env.local`
3. Make sure your product prices are valid numbers
4. Check the browser console for any JavaScript errors

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Checkout Guide](https://stripe.com/docs/checkout)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)


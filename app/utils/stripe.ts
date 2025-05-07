import { loadStripe } from '@stripe/stripe-js';

// Load the Stripe.js library with your publishable key
let stripePromise: Promise<any> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
  }
  return stripePromise;
};

export const redirectToCheckout = async (productName: string, productPrice: number, productId: string) => {
  try {
    // Create a checkout session on the server
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productName,
        productPrice,
        productId,
      }),
    });

    const { url } = await response.json();
    
    // Redirect to Stripe Checkout
    window.location.href = url;
  } catch (error) {
    console.error('Error redirecting to checkout:', error);
    alert('Something went wrong. Please try again.');
  }
};


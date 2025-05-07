'use client';

import React from 'react';
import { Button } from './Button';
import { redirectToCheckout } from '../utils/stripe';

type BuyNowButtonProps = {
  productName: string;
  productPrice: number;
  productId: string;
  className?: string;
};

const BuyNowButton = ({
  productName,
  productPrice,
  productId,
  className,
}: BuyNowButtonProps) => {
  const handleBuyNow = async () => {
    await redirectToCheckout(productName, productPrice, productId);
  };

  return (
    <Button onClick={handleBuyNow} classname={className}>
      Buy Now
    </Button>
  );
};

export default BuyNowButton;


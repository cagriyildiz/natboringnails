"use client";

import Link from 'next/link';
import {ReactNode} from "react";
import {sendGAEvent} from "@next/third-parties/google";

interface TrackedLinkProps {
  href: string;
  name: string;
  className?: string;
  children: ReactNode;
}

export default function TrackedLink({ href, name, children, className }: TrackedLinkProps) {
  const trackBookingClick = (buttonLabel: string) => {
    if (buttonLabel !== 'Book Now') {
      return;
    }
    sendGAEvent('event', 'click_booking_cta', {
      event_category: 'Conversion',
      event_label: buttonLabel,
      page_path: window.location.pathname,
    });
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackBookingClick(name)}
      className={className}
    >
      {children}
    </Link>
  );
}
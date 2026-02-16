'use client';

import { track } from '@vercel/analytics';
import { type MouseEvent, type ReactNode } from 'react';

interface HomeClickTrackerProps {
  children: ReactNode;
  userLocation: string;
}

const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6';

const normalizeValue = (value: string | null | undefined, fallback = 'unknown'): string => {
  const cleaned = value?.replace(/\s+/g, ' ').trim();
  return cleaned ? cleaned.slice(0, 255) : fallback;
};

const resolveTargetName = (element: HTMLAnchorElement | HTMLButtonElement): string => {
  const titleFromHeading = element.querySelector<HTMLElement>(HEADING_SELECTOR)?.textContent;

  return normalizeValue(
    element.getAttribute('data-analytics-name')
      ?? titleFromHeading
      ?? element.textContent
      ?? element.getAttribute('aria-label')
      ?? element.getAttribute('title'),
  );
};

const resolveTargetUrl = (element: HTMLAnchorElement | HTMLButtonElement): string => {
  if (element instanceof HTMLAnchorElement) {
    return normalizeValue(element.href || element.getAttribute('href'));
  }

  return normalizeValue(element.getAttribute('data-href'));
};

export const HomeClickTracker = ({ children, userLocation }: HomeClickTrackerProps) => {
  const handleClickCapture = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement | null;
    if (!target) {
      return;
    }

    const interactiveElement = target.closest('a, button');

    if (!(interactiveElement instanceof HTMLAnchorElement) && !(interactiveElement instanceof HTMLButtonElement)) {
      return;
    }

    if (interactiveElement instanceof HTMLButtonElement && interactiveElement.disabled) {
      return;
    }

    track('Homepage Click', {
      target_name: resolveTargetName(interactiveElement),
      target_url: resolveTargetUrl(interactiveElement),
      current_location: 'homepage',
      user_location: normalizeValue(userLocation),
    });
  };

  return (
    <div onClickCapture={handleClickCapture}>
      {children}
    </div>
  );
};

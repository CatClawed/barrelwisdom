import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export function getApiUrl(): string {
  const platformId = inject(PLATFORM_ID);
  return isPlatformBrowser(platformId)
    ? '/api'  // Browser uses relative URL
    : 'http://backend:8000/api';  // SSR uses internal Docker network
}
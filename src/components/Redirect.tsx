'use client';

import { useEffect } from 'react';

/** Client redirect for legacy routes (static export; Vercel redirects handle production). */
export function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

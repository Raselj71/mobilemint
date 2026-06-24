'use client';

import { useEffect, useState } from 'react';

/**
 * OAuth redirect bridge for the GoLive Studio app's Twitch connect.
 *
 * Twitch requires an HTTPS redirect URL and rejects custom schemes, but a
 * mobile app can only receive a custom scheme. So Twitch redirects here with
 * the access token in the URL fragment, and this page immediately forwards
 * that fragment to the app via its `golive://twitch-auth` deep link.
 *
 * The token lives only in the URL fragment (never sent to any server), so it
 * stays client-side.
 */
export default function TwitchAuthBridge() {
  const [appUrl, setAppUrl] = useState('golive://twitch-auth');

  useEffect(() => {
    const fragment = window.location.hash || '';
    const search = window.location.search || '';
    const url = `golive://twitch-auth${search}${fragment}`;
    setAppUrl(url);
    // Hand the OAuth result back to the app.
    window.location.replace(url);
  }, []);

  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        textAlign: 'center',
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Returning to GoLive Studio…</h1>
      <p style={{ opacity: 0.7, maxWidth: 360 }}>
        Connecting your Twitch channel. If the app doesn’t reopen automatically,
        tap the button below.
      </p>
      <a
        href={appUrl}
        style={{
          padding: '12px 22px',
          borderRadius: 999,
          background: '#9146FF',
          color: '#fff',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Open GoLive Studio
      </a>
    </main>
  );
}

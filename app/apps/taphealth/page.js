"use client";
import { useEffect } from "react";

export default function Page() {
    const playStore = "https://play.google.com/store/apps/details?id=com.taphealthapp";
    const appStore = "https://apps.apple.com/in/app/tap-health-ai-diabetes-care/id6478812140";

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const now = Date.now();

        if (/android/.test(ua)) {
            window.location.href = `intent://details?id=com.taphealthapp#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(playStore)};end`;
        } else if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href = appStore;
        }
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>Redirecting to app... If it doesn&apos;t happen, <a href={playStore}>Play Store</a> or <a href={appStore}>App Store</a>.</p>
        </div>
    );
}
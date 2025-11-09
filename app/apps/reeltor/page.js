"use client";
import { useEffect } from "react";

export default function Page() {
    const playStore = "https://play.google.com/store/apps/details?id=com.reeltor&hl=en";
    const appStore = "https://apps.apple.com/in/app/reeltor-com/id6739993219";

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        if (/android/.test(ua)) {
            window.location.href = `intent://details?id=com.reeltor#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(playStore)};end`;
        } else if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href = appStore;
        }
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>Redirecting...</p>
        </div>
    );
}
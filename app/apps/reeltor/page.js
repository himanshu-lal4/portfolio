"use client";
import { useEffect, memo } from "react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.reeltor&hl=en";
const APP_STORE = "https://apps.apple.com/in/app/reeltor-com/id6739993219";

function Page() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        if (/android/.test(ua)) {
            window.location.href = `intent://details?id=com.reeltor#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`;
        } else if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href = APP_STORE;
        }
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>Redirecting...</p>
        </div>
    );
}

export default memo(Page);

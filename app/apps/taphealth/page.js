"use client";
import { useEffect, memo } from "react";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.taphealthapp";
const APP_STORE = "https://apps.apple.com/in/app/tap-health-ai-diabetes-care/id6478812140";

function Page() {
    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();

        if (/android/.test(ua)) {
            window.location.href = `intent://details?id=com.taphealthapp#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE)};end`;
        } else if (/iphone|ipad|ipod/.test(ua)) {
            window.location.href = APP_STORE;
        }
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>
                Redirecting to app... If it doesn&apos;t happen,
                <a href={PLAY_STORE} rel="noopener noreferrer"> Play Store</a> or
                <a href={APP_STORE} rel="noopener noreferrer"> App Store</a>.
            </p>
        </div>
    );
}

export default memo(Page);

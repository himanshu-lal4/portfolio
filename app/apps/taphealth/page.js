"use client";
import { useEffect, useState } from "react";

export default function Page() {
    const playStore = "https://play.google.com/store/apps/details?id=com.taphealthapp";
    const appStore = "https://apps.apple.com/in/app/tap-health-ai-diabetes-care/id6478812140";
    const [showFallback, setShowFallback] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const isAndroid = /android/.test(ua);
        const isIOS = /iphone|ipad|ipod/.test(ua);

        // Show fallback links after 2 seconds if redirect doesn't work
        const fallbackTimer = setTimeout(() => {
            setShowFallback(true);
        }, 2000);

        if (isAndroid) {
            // Try to open Play Store app first, fallback to web
            window.location.href = `intent://details?id=com.taphealthapp#Intent;scheme=market;package=com.android.vending;S.browser_fallback_url=${encodeURIComponent(playStore)};end`;

            // Backup: direct Play Store link
            setTimeout(() => {
                window.location.href = playStore;
            }, 500);
        } else if (isIOS) {
            // Direct App Store link for iOS
            window.location.href = appStore;
        } else {
            setShowFallback(true);
        }

        return () => clearTimeout(fallbackTimer);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-6">
            {!showFallback ? (
                <p className="text-white text-sm">Redirecting to store...</p>
            ) : (
                <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Tap Health - AI Diabetes Care</h1>
                    </div>

                    <div className="space-y-3">
                        {/* Google Play Store */}
                        <a
                            href={playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <span className="font-medium">View on Google Play</span>
                        </a>

                        {/* Apple App Store */}
                        <a
                            href={appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                            </svg>
                            <span className="font-medium">View on App Store</span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
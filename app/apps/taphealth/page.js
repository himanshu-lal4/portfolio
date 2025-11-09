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
        const isMobile = isAndroid || isIOS;

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

            // Backup attempt
            setTimeout(() => {
                window.location.href = appStore;
            }, 500);
        } else {
            // Desktop or unknown platform: redirect to Play Store and try opening App Store in new tab
            setShowFallback(true);

            // Try to open App Store in new tab (may be blocked by popup blocker)
            try {
                const newWindow = window.open(appStore, '_blank');
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    // Popup was blocked, fallback UI will handle it
                    console.log('Popup blocked - using fallback UI');
                }
            } catch (e) {
                console.log('Error opening popup:', e);
            }

            // Redirect current page to Play Store
            setTimeout(() => {
                window.location.href = playStore;
            }, 1000);
        }

        return () => clearTimeout(fallbackTimer);
    }, []);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 p-6">
            <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8 text-center">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Tap Health</h1>
                    <p className="text-sm text-gray-500 mb-2">AI Diabetes Care</p>
                    <p className="text-gray-600">
                        {showFallback ? "Click below to download:" : "Redirecting to store..."}
                    </p>
                </div>

                <div className="space-y-4">
                    {/* Play Store Link */}
                    <a
                        href={playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                    >
                        📱 Open on Google Play Store
                    </a>

                    {/* App Store Link */}
                    <a
                        href={appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                    >
                        🍎 Open on Apple App Store
                    </a>
                </div>

                {!showFallback && (
                    <p className="mt-6 text-sm text-gray-500">
                        If automatic redirect doesn&apos;t work, click the buttons above
                    </p>
                )}
            </div>
        </div>
    );
}
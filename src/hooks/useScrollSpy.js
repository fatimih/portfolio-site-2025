import { useEffect, useState } from "react";

/**
 * useScrollSpy
 *
 * 06.01:
 * - Track scrollY
 * - Track isAtTop
 * - Track direction
 * - Compute activeId from section positions
 */
export function useScrollSpy(sectionIds = []) {
    const [state, setState] = useState(() => ({
        activeId: null,
        scrollY: 0,
        direction: "down",
        isAtTop: true,
    }));

    // We intentionally attach the scroll listener once.
    // sectionIds is stable in Layout; re-attaching listeners is unnecessary.
    useEffect(() => {
        if (typeof window === "undefined") return;

        let rafId = null;
        let latestY = window.scrollY;
        const offset = 120; // header/spacing buffer; tune later

        const computeActiveId = () => {
            let activeId = null;

            for (let i = 0; i < sectionIds.length; i += 1) {
                const id = sectionIds[i];
                const el = document.getElementById(id);
                if (!el) continue;

                const top = el.getBoundingClientRect().top;

                if (top - offset <= 0) {
                    activeId = id;
                } else {
                    break;
                }
            }

            // If we haven't crossed any sections yet, default to the first id (if present).
            return activeId ?? sectionIds[0] ?? null;
        };

        // Set initial values on mount (important if page loads scrolled).
        setState((prev) => {
            const activeId = computeActiveId();

            return {
                ...prev,
                scrollY: latestY,
                isAtTop: latestY <= 0,
                activeId,
            };
        });

        const onScroll = () => {
            latestY = window.scrollY;

            if (rafId != null) return;

            rafId = window.requestAnimationFrame(() => {
                rafId = null;

                setState((prev) => {
                    const direction = latestY > prev.scrollY ? "down" : "up";
                    const activeId = computeActiveId();

                    return {
                        ...prev,
                        activeId,
                        scrollY: latestY,
                        isAtTop: latestY <= 0,
                        direction,
                    };
                });
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (rafId != null) window.cancelAnimationFrame(rafId);
        };
    }, [sectionIds]);


    return state;
}

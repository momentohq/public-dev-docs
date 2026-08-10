import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';
import ThemedImage from '@theme/ThemedImage';

import styles from './styles.module.css';

// Font size the label is authored at, and the range the auto-fit is allowed to pick from.
// The ceiling is the size at which the English "Documentation" spans the logo exactly, so the
// default locale fills the width; it also stops a short translation (e.g. Japanese, 6
// characters) from being blown up to fill the same width and overpowering the logo. The floor
// keeps a long translation legible.
const BASE_FONT_SIZE_PX = 18;
const MIN_FONT_SIZE_PX = 13;
const MAX_FONT_SIZE_PX = 22;

/**
 * Scales the label to fill the logo's width. Text width is linear in font size, so measuring
 * once at the current size solves for the size that fits exactly — no iteration. Re-runs when
 * the webfont finishes loading (Manrope swaps in after first paint and changes the metrics)
 * and on resize.
 */
function useFitToWidth(
  ref: React.RefObject<HTMLElement>,
  targetRef: React.RefObject<HTMLElement>,
) {
  const [fontSize, setFontSize] = useState(BASE_FONT_SIZE_PX);

  const fit = useCallback(() => {
    const el = ref.current;
    const target = targetRef.current?.getBoundingClientRect().width;
    if (!el || !target) {
      return;
    }
    const current = parseFloat(getComputedStyle(el).fontSize);
    // Needs the text's own width, which is why .wordmark is inline-block.
    const width = el.getBoundingClientRect().width;
    if (!width || !current) {
      return;
    }
    const fitted = (target / width) * current;
    // Round down to avoid a sub-pixel overshoot past the logo's edge.
    setFontSize(
      Math.min(MAX_FONT_SIZE_PX, Math.max(MIN_FONT_SIZE_PX, Math.floor(fitted * 10) / 10)),
    );
  }, [ref, targetRef]);

  useEffect(() => {
    fit();
    // The webfont can land after the first measurement and shift the metrics.
    document.fonts?.ready.then(fit).catch(() => {});
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [fit]);

  return fontSize;
}

/**
 * The docs "wordmark" at the top of the left sidebar: the Momento company logo with
 * "Documentation" locked up underneath it so the pair reads as a single mark. The logo swaps
 * with the active color mode (forest on light, white on dark).
 *
 * The label is scaled to the logo's width rather than tracked out to it. Distributing the
 * slack as letter-spacing works for "Documentation" but falls apart on shorter translations
 * (Japanese is 6 characters, which would space out to ~12px per gap and stop reading as a
 * word), so the font size is fitted instead and the tracking stays fixed.
 */
export default function SidebarBrand(): ReactNode {
  const label = translate({
    id: 'sidebar.brand.documentation',
    message: 'Documentation',
    description: 'The word locked up under the logo at the top of the sidebar',
  });

  const wordmarkRef = useRef<HTMLSpanElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const fontSize = useFitToWidth(wordmarkRef, logoRef);

  return (
    <Link to="/" className={styles.brand}>
      {/* Wrapper because ThemedImage doesn't forward refs, and the fit needs the logo's box. */}
      <span ref={logoRef} className={styles.logoWrapper}>
        <ThemedImage
          className={styles.logo}
          sources={{
            light: useBaseUrl('/img/logo/momento-logo-forest.png'),
            dark: useBaseUrl('/img/logo/momento-logo-white.png'),
          }}
          alt="Momento"
        />
      </span>
      <span ref={wordmarkRef} className={styles.wordmark} style={{ fontSize: `${fontSize}px` }}>
        {label}
      </span>
    </Link>
  );
}

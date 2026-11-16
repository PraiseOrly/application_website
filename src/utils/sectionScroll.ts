import { animate } from 'framer-motion';

/** Height of the sticky header, so sections land just below it. */
export const HEADER_OFFSET = 80;

/** Fired with the target section id when a nav-driven scroll starts / ends. */
export const SECTION_NAV_START = 'section-nav:start';
export const SECTION_NAV_END = 'section-nav:end';

const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1]; // ease-in-out
const ARRIVE_CLASS = 'section-arrive';

let running: ReturnType<typeof animate> | null = null;

const targetY = (el: HTMLElement) =>
  Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET);

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

/** Briefly highlight the section that was just reached. */
function markArrival(el: HTMLElement) {
  if (prefersReducedMotion()) return;
  el.classList.remove(ARRIVE_CLASS);
  void el.offsetWidth; // restart the CSS animation if it is already applied
  el.classList.add(ARRIVE_CLASS);
  window.setTimeout(() => el.classList.remove(ARRIVE_CLASS), 1600);
}

/**
 * Animated scroll to a section by id. Duration scales with distance,
 * stops if the user scrolls themselves, and respects reduced motion.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  running?.stop();
  window.dispatchEvent(new CustomEvent(SECTION_NAV_START, { detail: id }));

  const finish = () => {
    running = null;
    removeCancelListeners();
    // Correct for any layout shift (e.g. images loading) during the scroll.
    const y = targetY(el);
    if (Math.abs(window.scrollY - y) > 4) window.scrollTo(0, y);
    window.dispatchEvent(new CustomEvent(SECTION_NAV_END, { detail: id }));
    if (id !== 'home') markArrival(el);
  };

  const from = window.scrollY;
  const to = targetY(el);
  const distance = Math.abs(to - from);

  if (prefersReducedMotion() || distance < 2) {
    window.scrollTo(0, to);
    finish();
    return;
  }

  // User input cancels the programmatic scroll.
  const cancel = () => {
    running?.stop();
    running = null;
    removeCancelListeners();
    window.dispatchEvent(new CustomEvent(SECTION_NAV_END, { detail: null }));
  };
  const opts: AddEventListenerOptions = { passive: true };
  function removeCancelListeners() {
    window.removeEventListener('wheel', cancel);
    window.removeEventListener('touchstart', cancel);
    window.removeEventListener('keydown', cancel);
  }
  window.addEventListener('wheel', cancel, opts);
  window.addEventListener('touchstart', cancel, opts);
  window.addEventListener('keydown', cancel, opts);

  const duration = Math.min(1.4, Math.max(0.55, distance / 2600));
  running = animate(from, to, {
    duration,
    ease: EASE,
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: finish,
  });
}

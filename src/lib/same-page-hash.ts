import type { MouseEvent } from "react";

interface Router {
  push: (href: string) => void;
}

/**
 * Click handler for header links such as "/", "/#stack" and "/projects".
 *
 * Next.js's router mishandles links that carry a "#": it can append the hash a
 * second time ("/#stack#stack"), and it remembers the hash on its cached copy
 * of the page, so a later plain "Home" click lands on "/#stack". So the router
 * is only ever given hash-free URLs here, and the "#..." part is applied by
 * hand: scroll to the target (honouring the page's smooth-scroll and
 * scroll-margin CSS) and set the address bar directly. Plain links to other
 * pages and modifier-clicks keep the normal link behaviour.
 */
export function handleNavClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  router: Router,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const url = new URL(href, window.location.href);
  const samePage = url.pathname === window.location.pathname;

  if (!url.hash) {
    if (!samePage) return; // ordinary page navigation
    event.preventDefault();
    window.scrollTo({ top: 0 });
    if (window.location.hash) {
      window.history.pushState(null, "", url.pathname);
    }
    return;
  }

  event.preventDefault();
  const id = decodeURIComponent(url.hash.slice(1));

  if (samePage) {
    document.getElementById(id)?.scrollIntoView();
    if (window.location.hash !== url.hash) {
      window.history.pushState(null, "", `${url.pathname}${url.hash}`);
    }
    return;
  }

  // Another page: navigate without the hash, then jump once it has rendered.
  router.push(url.pathname);
  const started = Date.now();
  const jumpWhenReady = () => {
    const target =
      window.location.pathname === url.pathname
        ? document.getElementById(id)
        : null;
    if (target) {
      target.scrollIntoView();
      window.history.replaceState(null, "", `${url.pathname}${url.hash}`);
    } else if (Date.now() - started < 3000) {
      window.setTimeout(jumpWhenReady, 50);
    }
  };
  window.setTimeout(jumpWhenReady, 50);
}

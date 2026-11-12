"use client";

import type { MouseEvent, ReactNode } from "react";

import { buttonClasses } from "@/components/ui/button-link";

interface CvWindowButtonProps {
  children: ReactNode;
  href: string;
  variant?: Parameters<typeof buttonClasses>[0];
  size?: Parameters<typeof buttonClasses>[1];
}

/**
 * Opens the CV in its own browser window, sized for reading a page.
 * Without JavaScript, or if the browser blocks the window, it falls back to a
 * normal new tab.
 */
export function CvWindowButton({
  children,
  href,
  variant,
  size,
}: CvWindowButtonProps) {
  function openWindow(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.button !== 0
    ) {
      return;
    }

    const width = Math.min(960, window.screen.availWidth - 40);
    const height = Math.min(1200, window.screen.availHeight - 40);
    const left = Math.max(0, (window.screen.availWidth - width) / 2);
    const top = Math.max(0, (window.screen.availHeight - height) / 2);

    const opened = window.open(
      href,
      "alan-man-cv",
      `popup,width=${width},height=${height},left=${left},top=${top}`,
    );
    if (opened) {
      event.preventDefault();
      opened.focus();
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={openWindow}
      className={buttonClasses(variant, size)}
    >
      {children}
    </a>
  );
}

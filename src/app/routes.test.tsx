import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import CvPage from "@/app/cv/page";
import ExperiencePage from "@/app/experience/page";
import HomePage, { metadata as homeMetadata } from "@/app/page";
import ProjectsPage from "@/app/projects/page";
import { navigation } from "@/data/navigation";

const { redirectMock } = vi.hoisted(() => ({
  redirectMock: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  redirect: redirectMock,
}));

const externalCvUrl =
  "https://drive.google.com/file/d/1n2YpgSzOHSykcdsZBV8Aj_wWznlcOlDX/view?usp=drive_link";

describe("portfolio routes", () => {
  it("uses the portfolio name as the homepage browser-tab title", () => {
    expect(homeMetadata.title).toEqual({ absolute: "Alan Man's Portfolio" });
  });

  it("gives visitors direct paths to contact and the external CV", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("img", { name: "Portrait of Alan Man" }),
    ).toHaveAttribute("src", expect.stringContaining("alan-man-profile.jpg"));
    expect(screen.queryByRole("link", { name: "View experience" })).toBeNull();
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByRole("link", { name: "View CV" })).toHaveAttribute(
      "href",
      externalCvUrl,
    );
    expect(screen.getByRole("link", { name: "View CV" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });

  it("keeps featured projects off the homepage", () => {
    render(<HomePage />);

    expect(
      screen.queryByRole("heading", { name: "Featured projects" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: "View all projects" }),
    ).not.toBeInTheDocument();
  });

  it("shows the complete professional skill groups and AI tools in the hero", () => {
    render(<HomePage />);

    for (const groupName of [
      "Frontend",
      "Backend and integration",
      "Cloud, data, identity, and delivery",
      "AI-assisted development tools",
    ]) {
      const heading = screen.getByRole("heading", { name: groupName });
      const group = heading.closest("section");

      expect(heading).toBeInTheDocument();
      expect(heading.querySelector("svg")).not.toBeNull();
      expect(group).not.toBeNull();

      for (const skill of group!.querySelectorAll("li")) {
        expect(skill.querySelector("svg")).not.toBeNull();
      }
    }

    for (const tool of [
      "Claude Code",
      "ChatGPT",
      "Gemini",
      "GitHub Copilot",
    ]) {
      expect(screen.getByText(tool)).toBeInTheDocument();
    }
  });

  it("keeps experience content off the personal-page template", () => {
    render(<HomePage />);

    expect(screen.queryByRole("heading", { name: "Work experience" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "System Developer" })).toBeNull();
    expect(screen.queryByRole("heading", { name: "Analyst Programmer" })).toBeNull();
  });

  it("shows at least three structured project cards", () => {
    render(<ProjectsPage />);

    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(3);
  });

  it("links About to the My journey section on the homepage", () => {
    render(<HomePage />);

    expect(navigation.find((item) => item.label === "About")?.href).toBe(
      "/#my-journey",
    );
    expect(
      screen.getByRole("heading", { name: "My journey" }).closest("section"),
    ).toHaveAttribute("id", "my-journey");
  });

  it("redirects the legacy About page to My journey", () => {
    AboutPage();

    expect(redirectMock).toHaveBeenCalledWith("/#my-journey");
  });

  it("presents anonymous professional engagements", () => {
    render(<ExperiencePage />);

    expect(
      screen.getByRole("heading", {
        name: "Enterprise case-management and AI workflow platform",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Arch-Partnership/i)).toBeNull();
    expect(screen.queryByText(/Eastech System Limited/i)).toBeNull();
  });

  it("opens the externally hosted public CV", () => {
    render(<CvPage />);

    const cvLink = screen.getByRole("link", { name: "View CV" });

    expect(cvLink).toHaveAttribute("href", externalCvUrl);
    expect(cvLink).toHaveAttribute("target", "_blank");
    expect(screen.queryByRole("link", { name: "Download CV" })).toBeNull();
    expect(screen.queryByText(/coming soon/i)).toBeNull();
  });

  it("lists verified contact channels without exposing a phone number", () => {
    render(<ContactPage />);

    const contactList = screen.getByRole("list", { name: "Contact channels" });
    expect(
      within(contactList).getByRole("link", {
        name: "alanmanyin919@outlook.com",
      }),
    ).toHaveAttribute("href", "mailto:alanmanyin919@outlook.com");
    expect(
      within(contactList).getByRole("link", { name: "alanmanyin-codespace" }),
    ).toHaveAttribute("href", "https://github.com/alanmanyin-codespace");
    expect(
      within(contactList).getByRole("link", { name: "alanmanyin919" }),
    ).toHaveAttribute("href", "https://www.linkedin.com/in/alanmanyin919");
    expect(screen.queryByText(/825-254-8929/)).toBeNull();
    expect(screen.queryByRole("form")).toBeNull();
  });
});

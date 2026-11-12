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

const cvUrl =
  "https://docs.google.com/document/d/1fsfFOsj-sbPBdbvaE4XIvoXVdEsfuq-RuR2Y6DocBRE/edit?usp=sharing";

describe("portfolio routes", () => {
  it("uses the portfolio name as the homepage browser-tab title", () => {
    expect(homeMetadata.title).toEqual({ absolute: "Alan Man's Portfolio" });
  });

  it("gives visitors direct paths to contact and the CV", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("img", { name: "Portrait of Alan Man" }),
    ).toHaveAttribute("src", expect.stringContaining("alan-man-profile.jpg"));
    expect(screen.queryByRole("link", { name: "View experience" })).toBeNull();
    for (const link of screen.getAllByRole("link", { name: "WhatsApp" })) {
      expect(link).toHaveAttribute("href", "https://wa.me/85266940106");
    }
    for (const link of screen.getAllByRole("link", { name: "LinkedIn" })) {
      expect(link).toHaveAttribute(
        "href",
        "https://www.linkedin.com/in/alanmanyin919",
      );
    }
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:alanmanyin919@outlook.com",
    );
    expect(
      screen.getByRole("heading", { name: "Contact Me" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View CV" })).toHaveAttribute(
      "href",
      cvUrl,
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

  it("shows the complete professional skill groups and AI tools on the homepage", () => {
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
        expect(skill.querySelector("svg, img")).not.toBeNull();
      }
    }

    for (const tool of ["Claude Code", "ChatGPT", "Gemini", "GitHub Copilot"]) {
      expect(screen.getByText(tool)).toBeInTheDocument();
    }
  });

  it("keeps experience content off the personal-page template", () => {
    render(<HomePage />);

    expect(
      screen.queryByRole("heading", { name: "Work experience" }),
    ).toBeNull();
    expect(
      screen.queryByRole("heading", { name: "System Developer" }),
    ).toBeNull();
    expect(
      screen.queryByRole("heading", { name: "Analyst Programmer" }),
    ).toBeNull();
  });

  it("shows at least three structured project cards", () => {
    render(<ProjectsPage />);

    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(3);
  });

  it("links Stack to the tech stack below My journey on the homepage", () => {
    render(<HomePage />);

    expect(navigation.find((item) => item.label === "Stack")?.href).toBe(
      "/#stack",
    );
    expect(
      screen.getByRole("heading", { name: "Frontend" }).closest("#stack"),
    ).not.toBeNull();
    expect(screen.getByRole("region", { name: "My journey" })).toHaveAttribute(
      "id",
      "my-journey",
    );
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
    // Assert the shape of an employer name rather than any specific one, so
    // this file never has to contain the names it is meant to keep off the page.
    expect(
      screen.queryByText(
        /\b(?:Ltd|Limited|Inc|LLC|LLP|Corp|Corporation|Partnership|GmbH|Pte)\b/i,
      ),
    ).toBeNull();
  });

  it("opens the CV served from the site itself", () => {
    render(<CvPage />);

    const cvLink = screen.getByRole("link", { name: "View CV" });

    expect(cvLink).toHaveAttribute("href", cvUrl);
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
      within(contactList).getByRole("link", { name: "+852 6694 0106" }),
    ).toHaveAttribute("href", "https://wa.me/85266940106");
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

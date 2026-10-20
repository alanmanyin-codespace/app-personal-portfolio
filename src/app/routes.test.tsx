import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import CvPage from "@/app/cv/page";
import ExperiencePage from "@/app/experience/page";
import HomePage, { metadata as homeMetadata } from "@/app/page";
import ProjectsPage from "@/app/projects/page";

const externalCvUrl =
  "https://drive.google.com/file/d/1n2YpgSzOHSykcdsZBV8Aj_wWznlcOlDX/view?usp=drive_link";

describe("portfolio routes", () => {
  it("uses the portfolio name as the homepage browser-tab title", () => {
    expect(homeMetadata.title).toEqual({ absolute: "Alan Man's Portfolio" });
  });

  it("gives visitors direct paths to experience, projects, contact, and the external CV", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("img", { name: "Portrait of Alan Man" }),
    ).toHaveAttribute("src", expect.stringContaining("alan-man-profile.jpg"));
    expect(
      screen.getByRole("link", { name: "View experience" }),
    ).toHaveAttribute("href", "/experience");
    expect(
      screen.getByRole("link", { name: "View all projects" }),
    ).toHaveAttribute("href", "/projects");
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

  it("presents each role as a detailed full-width experience entry", () => {
    render(<HomePage />);

    const systemDeveloper = screen
      .getByRole("heading", { name: "System Developer" })
      .closest("article");
    const analystProgrammer = screen
      .getByRole("heading", { name: "Analyst Programmer" })
      .closest("article");

    expect(systemDeveloper).not.toBeNull();
    expect(analystProgrammer).not.toBeNull();
    expect(within(systemDeveloper!).getByText("May 2025–Present")).toBeVisible();
    expect(
      within(systemDeveloper!).getByText(
        /Built production workflows for case pickup, assignment, reassignment/,
      ),
    ).toBeVisible();
    expect(
      within(analystProgrammer!).getByText("March 2021–January 2025"),
    ).toBeVisible();
    expect(
      within(analystProgrammer!).getByText(
        /Developed end-to-end policy application journeys/,
      ),
    ).toBeVisible();
  });

  it("summarizes CV-backed skill depth beside the work experience", () => {
    render(<HomePage />);

    const skillsPanel = screen
      .getByRole("heading", { name: "Skills" })
      .closest("aside");

    expect(skillsPanel).not.toBeNull();
    expect(
      within(skillsPanel!).getByText("Full-stack web development"),
    ).toBeVisible();
    expect(
      within(skillsPanel!).getByText("Enterprise integration and identity"),
    ).toBeVisible();
    expect(
      within(skillsPanel!).getByText("Cloud and delivery"),
    ).toBeVisible();
    expect(within(skillsPanel!).queryByText(/\d+%/)).not.toBeInTheDocument();
  });

  it("shows at least three structured project cards", () => {
    render(<ProjectsPage />);

    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(3);
  });

  it("presents verified background and education without placeholder copy", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { name: "BEng in Computer Engineering" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Hong Kong University of Science and Technology (HKUST)",
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText(/provisional/i)).toBeNull();
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

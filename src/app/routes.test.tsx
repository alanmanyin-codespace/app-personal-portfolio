import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/about/page";
import ContactPage from "@/app/contact/page";
import CvPage from "@/app/cv/page";
import ExperiencePage from "@/app/experience/page";
import HomePage from "@/app/page";
import ProjectsPage from "@/app/projects/page";

describe("portfolio routes", () => {
  it("gives visitors direct paths to projects and the CV", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("img", { name: "Portrait of Alan Man" }),
    ).toHaveAttribute("src", expect.stringContaining("alan-man-profile"));
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(
      screen.getByRole("link", { name: "Explore Experience" }),
    ).toHaveAttribute("href", "/experience");
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/cv",
    );
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

  it("provides view and download actions for the public CV", () => {
    render(<CvPage />);

    expect(screen.getByRole("link", { name: "View CV" })).toHaveAttribute(
      "href",
      "/cv/alan-man-cv.pdf",
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "download",
    );
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

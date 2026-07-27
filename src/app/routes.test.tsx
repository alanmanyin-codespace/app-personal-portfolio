import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ContactPage from "@/app/contact/page";
import CvPage from "@/app/cv/page";
import HomePage from "@/app/page";
import ProjectsPage from "@/app/projects/page";

describe("portfolio routes", () => {
  it("gives visitors direct paths to projects and the CV", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute(
      "href",
      "/projects",
    );
    expect(screen.getByRole("link", { name: "Download CV" })).toHaveAttribute(
      "href",
      "/cv",
    );
  });

  it("shows at least three structured project cards", () => {
    render(<ProjectsPage />);

    expect(screen.getAllByRole("article").length).toBeGreaterThanOrEqual(3);
  });

  it("explains why a CV download is not currently available", () => {
    render(<CvPage />);

    expect(
      screen.getByRole("complementary", {
        name: "Placeholder content notice",
      }),
    ).toHaveTextContent("No CV PDF has been added");
    expect(screen.queryByRole("link", { name: "Download CV" })).toBeNull();
  });

  it("lists provisional contact channels without adding a form", () => {
    render(<ContactPage />);

    const contactList = screen.getByRole("list", { name: "Contact channels" });
    expect(within(contactList).getByText("Email")).toBeInTheDocument();
    expect(within(contactList).getByText("GitHub")).toBeInTheDocument();
    expect(within(contactList).getByText("LinkedIn")).toBeInTheDocument();
    expect(screen.queryByRole("form")).toBeNull();
  });
});

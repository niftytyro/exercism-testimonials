import { render, screen } from "@testing-library/react";
import { useState } from "react";
import TopBar from "./TopBar";

const TopBarWrapper = () => {
  const [order, setOrder] = useState<"newest_first" | "oldest_first">(
    "newest_first"
  );
  const [, setFilterQuery] = useState("");
  const [selectedTrackSlug, setSelectedTrackSlug] = useState<string>();

  return (
    <TopBar
      order={order}
      setOrder={setOrder}
      setFilterQuery={setFilterQuery}
      selectedTrackSlug={selectedTrackSlug}
      setSelectedTrackSlug={setSelectedTrackSlug}
      tracks={[
        {
          course: false,
          icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/abap.svg",
          is_new: true,
          links: {
            self: "https://exercism.org/tracks/abap",
            exercises: "https://exercism.org/tracks/abap/exercises",
            concepts: "https://exercism.org/tracks/abap/concepts",
          },
          num_concepts: 0,
          num_exercises: 24,
          slug: "abap",
          tags: [
            "Object-oriented",
            "Procedural",
            "Static",
            "Strong",
            "Compiled",
            "Language-specific runtime",
            "Backends",
            "Financial systems",
          ],
          testimonialCount: 0,
          title: "ABAP",
          web_url: "https://exercism.org/tracks/abap",
        },
        {
          slug: "bash",
          title: "Bash",
          course: false,
          num_concepts: 0,
          num_exercises: 89,
          web_url: "https://exercism.org/tracks/bash",
          icon_url: "https://dg8krxphbh767.cloudfront.net/tracks/bash.svg",
          tags: [
            "Scripts",
            "Procedural",
            "Interpreted",
            "Weak",
            "Linux",
            "Mac OSX",
            "Windows",
          ],
          is_new: false,
          links: {
            self: "https://exercism.org/tracks/bash",
            exercises: "https://exercism.org/tracks/bash/exercises",
            concepts: "https://exercism.org/tracks/bash/concepts",
          },
          testimonialCount: 0,
        },
      ]}
    />
  );
};

test("Testing Order & Tracks Dropdown", async () => {
  render(<TopBarWrapper />);

  // Testing Order Dropdown
  const sortByDropdown = await screen.findByText(/sort by/i);
  sortByDropdown.click();
  const oldestFirst = await screen.findByText(/oldest first/i);
  oldestFirst.click();
  expect(sortByDropdown).toHaveTextContent(/sort by oldest first/i);

  // Testing Tracks Dropdown
  const trackSelector = await screen.findByTestId("track-selector");
  trackSelector.click();
  const abapTrack = await screen.findByText(/abap/i);
  const bashTrack = await screen.findByText(/bash/i);
  abapTrack.click();
  expect(await screen.findByAltText(/abap/i)).toBeInTheDocument();
});

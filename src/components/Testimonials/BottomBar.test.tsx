import { render, screen } from "@testing-library/react";
import crypto from "crypto";
import { useState } from "react";
import BottomBar from "./BottomBar";

Object.defineProperty(global.self, "crypto", {
  value: {
    getRandomValues: (arr: string | any[]) => crypto.randomBytes(arr.length),
  },
});

const BottomBarWrapper = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <BottomBar
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      totalPages={111}
    />
  );
};

test("Testing Bottom Bar", async () => {
  render(<BottomBarWrapper />);

  const prevPageButton = await screen.findByText(/prev/i);
  const nextPageButton = await screen.findByText(/next/i);
  const three = await screen.findByText("3");
  const last = await screen.findByText("111");

  expect(prevPageButton).toBeDisabled();
  expect(nextPageButton).toBeEnabled();

  three.click();
  expect(prevPageButton).toBeEnabled();
  expect(nextPageButton).toBeEnabled();

  last.click();
  expect(prevPageButton).toBeEnabled();
  expect(nextPageButton).toBeDisabled();
});

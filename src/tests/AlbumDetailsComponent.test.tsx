import { render, screen } from "@testing-library/react";
import AlbumDetailsComponent from "../components/AlbumDetailsComponent";
const album = {
  albumId: 2,
  id: 51,
  thumbnailUrl: "https://via.placeholder.com/150/8e973b",
  title: "non sunt voluptatem placeat consequuntur rem incidunt",
  url: "https://via.placeholder.com/600/8e973b",
};
describe("when rendered", () => {
  test("should show an image with a title below", () => {
    render(<AlbumDetailsComponent album={album} />);
    const displayedImage = screen.getByAltText('details-image');

    expect(displayedImage).toBeInTheDocument();
    expect(displayedImage).toHaveAttribute('src', album?.thumbnailUrl);
    expect(
      screen.getByText(album.title)
    ).toBeInTheDocument();
  });
});

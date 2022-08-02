import { render, screen } from "@testing-library/react";
import AlbumListItemComponent from "../components/AlbumListItemComponent";
const album = {
  id: 1,
  title: "quidem molestiae enim",
  userId: 1
};


describe("when rendered", () => {
  test("should show an avatar and a title", () => {
    render(<AlbumListItemComponent album={album} />);
    const displayedImage = screen.getByAltText('album-avatar');
    expect(displayedImage).toBeInTheDocument();
    expect(displayedImage).toHaveAttribute('src', 'https://cdn2.iconfinder.com/data/icons/instagram-filled-outline/19/16-512.png');
    expect(
      screen.getByText(album.title)
    ).toBeInTheDocument();
  });
});

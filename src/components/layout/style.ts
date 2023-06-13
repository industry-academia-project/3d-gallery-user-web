import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: overlay;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  .MuseumImage {
    width: 100%;
    filter: brightness(50%);
  }
`;

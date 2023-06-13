import { ReactNode } from "react";
import Header from "../header";
import MuseumImage from "@/assets/img/museum.jpg";
import Image from "next/image";
import * as LayoutStyle from "./style";

type layoutPorps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutPorps) {
  return (
    <LayoutStyle.LayoutContainer>
      <Header />
      <Image className="MuseumImage" src={MuseumImage} alt="MuseumImages" />
    </LayoutStyle.LayoutContainer>
  );
}

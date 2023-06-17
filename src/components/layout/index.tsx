import { ReactNode } from "react";
import Navbar from "../common/navbar";

type layoutPorps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutPorps) {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  );
}

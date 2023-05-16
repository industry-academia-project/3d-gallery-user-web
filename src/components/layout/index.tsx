import { ReactNode } from "react";
import Header from "../header";

type layoutPorps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutPorps) {
  return (
    <>
      <Header />
      <h1>hi</h1>
      <main>{children}</main>
    </>
  );
}

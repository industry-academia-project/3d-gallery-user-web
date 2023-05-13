import { ReactNode } from "react";

type layoutPorps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutPorps) {
  return (
    <>
      <h1>hi</h1>
      <main>{children}</main>
    </>
  );
}

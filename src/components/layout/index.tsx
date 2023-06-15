import { ReactNode } from "react";

type layoutPorps = {
  children: ReactNode;
};
export default function Layout({ children }: layoutPorps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

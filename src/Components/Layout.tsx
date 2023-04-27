import { ILayout } from "@/utils/Types";
import CategoryContainer from "./CategoryContainer";

export default function Layout(
  { children }: ILayout,
): JSX.Element
 {
  return (
    <>
      <CategoryContainer/>
      <main>{children}</main>
    </>
  );
}

import { myObj } from "@/utils/Types";
import Category from "./Subcomps/Category";

interface CategoryContainerType{
  setCurrentCategory: (arg: string)=> void
}

export default function CategoryContainer({setCurrentCategory}:CategoryContainerType): JSX.Element {
  const myObj:myObj[] = [
    {
      name: "All"
    },
    {
      name: "real korean bibimbab"
    },
    {
      name: "Bibimbab"
    },
    {
      name: "Category4"
    },
  ]
  return (
    <div className="m-[40px] flex gap-4">
      {myObj.map((item, index) => <Category data={item} key={index} setCurrentCategory={setCurrentCategory}/>)}
    </div>
  );
}

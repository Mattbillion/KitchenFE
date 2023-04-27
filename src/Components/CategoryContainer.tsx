import { ICategory, myObj } from "@/utils/Types";
import { useEffect, useState } from "react";
import Category from "./Subcomps/Category";


export default function CategoryContainer({filterData}:any): JSX.Element {
  const [data, setData] = useState<ICategory[]>();
  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  
  return (
    <div className="m-[40px] flex gap-4">
      {data &&
        data.map((item, index) => (
          <Category
            data={item}
            key={index}
            filterData={filterData}
          />
        ))}
    </div>
  );
}

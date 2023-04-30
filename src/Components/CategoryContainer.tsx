import { ICategory, myObj } from "@/utils/Types";
import { useEffect, useState } from "react";
import Category from "./Subcomps/Category";

export default function CategoryContainer({ filterData }: any): JSX.Element {
  const [data, setData] = useState<ICategory[]>();
  const [current, setCurrent] = useState<any>(0);
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
          <div
            key={index}
            onClick={() => {
              setCurrent(index);
            }}
          >
            {current === index ? (
              <div
                className="rounded border bg-blue-500 text-white p-4 px-6 flex w-full"
                onClick={() => filterData(item.name)}
              >
                {item.name}
              </div>
            ) : (
              <div
                className="rounded border p-4 px-6 flex"
                onClick={() => filterData(item.name)}
              >
                {item.name}
              </div>
            )}
          </div>
        ))}
    </div>
  );
}

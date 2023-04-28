import { ICategory } from "@/utils/Types";
import { useEffect, useState } from "react";

interface PropType {
  data: ICategory;
  filterData: any;
  current: number;
  index: number;
  setCurrent: (arg: number) => void;
}

export default function CategoryButton({
  data,
  filterData,
}: PropType) {
  return (
    <div onClick={() => filterData(data.name)}>
      <div>
    
      </div>
    </div>
  );
}

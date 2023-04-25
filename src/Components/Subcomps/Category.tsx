import { myObj } from "@/utils/Types";

interface PropType {
  data: myObj;
  setCurrentCategory: (arg: string)=> void
}

export default function Category({data, setCurrentCategory}:PropType) {

  return (
    <div className="border p-4 rounded-lg" onClick={()=>{setCurrentCategory(data.name)}}>
      {data.name}
    </div>
  )
}
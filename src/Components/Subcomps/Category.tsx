import { ICategory } from "@/utils/Types";

interface PropType {
  data: ICategory;
  filterData:any
}



export default function CategoryButton({ data, filterData }: PropType) {



// function buttonHandler () {
//   setData(data.filter(item=>item=));
//   localStorage.setItem("categoryname", data.name)
//   console.log(localStorage.getItem('current'))
// }

// `border p-4 rounded-lg ${data.name === localStorage.getItem('current') ? "bg-purple-600 text-white" : "bg-white"}`} onClick={() => {
//   setProducts(data.name)
// }


  return (
    <button className="" onClick={() => {filterData(data.name); console.log(data.name)}}>
         {data.name}
    </button>
  );
}

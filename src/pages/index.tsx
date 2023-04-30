import CardContainer from "@/Components/CardContainer";
import CategoryContainer from "@/Components/CategoryContainer";
import CreateCategory from "@/Components/CreateCategory";
import CreateFood from "@/Components/CreateFood";
import { ICard, ICategory } from "@/utils/Types";
import { useEffect, useState } from "react";

export default function Home({ data }: any) {
  const [products, setProducts] = useState<ICard[]>(data);
  const [currentCategory, setCurrentCategory] = useState<string>("All");
  console.log("test", data);
  function filterData(category: string) {
    setCurrentCategory(category);
  }

  useEffect(() => {
    if (currentCategory === "All") {
      setProducts(data);
    } else {
      setProducts(
        data.filter(
          (product: ICard) => product.category.name === currentCategory
        )
      );
    }
  }, [currentCategory]);

  return (
    <div>
      <CategoryContainer filterData={filterData} />
      <CardContainer myData={products} />
      <CreateFood />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/product");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

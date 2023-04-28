import CardContainer from "@/Components/CardContainer";
import CategoryContainer from "@/Components/CategoryContainer";
import { ICard, ICategory } from "@/utils/Types";
import { useEffect, useState } from "react";

export default function Home({ data }: any) {
  const [products, setProducts] = useState<ICard[]>(data);
  const [currentCategory, setCurrentCategory] = useState<string>("All");

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
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

import CardContainer from "@/Components/CardContainer";
import CategoryContainer from "@/Components/CategoryContainer";
import { ICard } from "@/utils/Types";
import { useEffect, useState } from "react";

export default function Home({ data }: any) {
  const [myData, setMyData] = useState<ICard[] | undefined>();
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setMyData(data);
    };
    fetchData();
  }, []);

  function filterData(category: string, data: ICard[]) {
    if (category === "All") {
      return data;
    } else {
      return data.filter((card) => card.foodname === category);
    }
  }

  const filteredData = filterData(currentCategory, myData || []);

  return (
    <div>
      <CategoryContainer setCurrentCategory={setCurrentCategory} />
      <CardContainer myData={filteredData} />
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

import CardContainer from "@/Components/CardContainer";
import CategoryContainer from "@/Components/CategoryContainer";
import { ICard } from "@/utils/Types";
import { useEffect, useState } from "react";

export default function Home({ data }: any) {
  const [myData, setMyData] = useState<ICard[] | undefined>();
  const [currentCategory, setCurrentCategory] = useState("");

  console.log("currentCategory:", currentCategory);

  useEffect(() => {
    const fetchData = async () => {
      setMyData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (myData) {
      const filteredData = myData.filter((item) => {
        return item.foodname === "real korean bibimbab";
      });

      setMyData(filteredData);
    } else if (myData!) {
      setMyData(data);
    }
  }, [currentCategory]);

  return (
    <div>
      <CategoryContainer setCurrentCategory={setCurrentCategory} />

      <CardContainer myData={myData} />
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

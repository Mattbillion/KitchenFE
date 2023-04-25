import { ICard } from "@/utils/Types";

export default function Card(props: { myData: ICard }) {
  const { myData } = props;
  // console.log(myData);
  return (
    <div className="h-[full] w-[260px] mx-auto overflow-hidden rounded-lg">
      <img
        className="w-full h-[250px] object-cover"
        src={myData.img}
        alt="image"
      />

      <h1 className="">{myData.foodname}</h1>
      <p>{myData.desc}</p>
      <p>{myData.price}</p>
    </div>
  );
}

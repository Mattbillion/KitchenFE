import Card from "./Subcomps/Card";

export default function CardContainer(props: { myData: any }) {
  const { myData } = props;

  return (
    <div className="grid grid-cols-5 gap-2 mx-[40px]">
      {myData &&
        myData.map((data: any, index: number) => (
          <Card myData={data} key={index} />
        ))}
    </div>
  );
}

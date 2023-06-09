import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import useGlobal from "../hooks/useGlobal";
import { $railway } from "../states/content";

export const Railway = () => {
  const railway = useGlobal($railway);
  return (
    <div className="flex flex-col gap-4">
      {/* <img src="./public/contact.jpeg" alt="" /> */}

      {railway.map((reference, index) => {
        return (
          <div className="max-w-3xl" key={index}>
            <Carousel slides={reference.slides}></Carousel>

            <Card><p>{reference.description}</p></Card>
          </div>
        );
      })}
    </div>
  );
};

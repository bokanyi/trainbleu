import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Form } from "../components/Form";
import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $railway } from "../states/content";

export const Railway = () => {
  const railway = useGlobal($railway);
  return (
    <Page custom="gap-4 py-40" customInner="gap-4">

    {/* <div className="flex flex-col gap-4"> */}
      {/* <img src="./public/contact.jpeg" alt="" /> */}

      {railway.map((reference, index) => {
        return (
          <div className="max-w-s md:max-w-3xl" key={index}>
            <Carousel slides={reference.slides}></Carousel>

            <Card>
              <h4>{reference.name}</h4>
              <p>{reference.description}</p>
              </Card>
          </div>
        );
      })}
      {/* <p>{import.meta.env.VITE_SECRET}</p> */}
    {/* </div> */}
    <Form></Form>
    </Page>
  );
};

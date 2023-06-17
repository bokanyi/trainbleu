import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";
import { Form } from "../components/Form";
import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $railway, $about } from "../states/content";

export const Railway = () => {
  const railway = useGlobal($railway);
  const about = useGlobal($about);

  return (
    <Page custom="gap-4 py-16 md:py-40 md:min-h-screen" customInner="gap-4">

    {/* <div className="flex flex-col gap-4"> */}
      {/* <img src="./public/contact.jpeg" alt="" /> */}
      <h1>Vasút</h1>
      <p>{about.services[1].description}</p>
            <p>{about.services[1].details}</p>

      {railway.map((reference, index) => {
        return (
          <div className="max-w-s md:max-w-3xl" key={index}>
           
            <Card>
              <h4>{reference.name}</h4>
              <p>{reference.description}</p>
            <Carousel slides={reference.slides}></Carousel>
            

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

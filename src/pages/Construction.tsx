import useGlobal from "../hooks/useGlobal";
import { $construction, $about } from "../states/content";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import { Form } from "../components/Form";

export const Construction = () => {
    const construction = useGlobal($construction);
    const about = useGlobal($about);

    return (
        <Page custom="gap-4 py-16 md:py-40 md:min-h-screen" customInner="gap-4" >

      <h1>Ház/ lakás felújítás</h1>
      {/* <div className="flex flex-col gap-4" > */}
      <p>{about.services[0].description}</p>
            <p>{about.services[0].details}</p>

         {construction.map((reference, index)=> {
          return <div className="max-w-s md:max-w-3xl " key={index}>

            <Card>
              <h4>{reference.name}</h4>
            <Carousel slides={reference.slides}></Carousel>
              </Card>
            
          </div>
        })}
       <Form></Form>
      {/* </div> */}
        </Page>
    )
  }
import useGlobal from "../hooks/useGlobal";
import { $construction } from "../states/content";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { Page } from "../components/Page";
import { Form } from "../components/Form";

export const Construction = () => {
    const construction = useGlobal($construction);
    return (
        <Page custom="gap-4 py-16 md:py-40 md:min-h-screen" customInner="gap-4" >

      <h1>Magasépítés</h1>
      {/* <div className="flex flex-col gap-4" > */}
         {construction.map((reference, index)=> {
          return <div className="max-w-s md:max-w-3xl " key={index}>

            <Carousel slides={reference.slides}></Carousel>
            <Card><p>{reference.description}</p></Card>
            
          </div>
        })}
       <Form></Form>
      {/* </div> */}
        </Page>
    )
  }
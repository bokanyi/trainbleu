import useGlobal from "../hooks/useGlobal";
import { $construction } from "../states/content";
import { Carousel } from "../components/Carousel";
import { Card } from "../components/Card";
import { Page } from "../components/Page";

export const Construction = () => {
    const construction = useGlobal($construction);
    return (
        <Page custom="flex flex-col gap-4 h-screen" >

      {/* <div className="flex flex-col gap-4" > */}
         {construction.map((reference, index)=> {
          return <div className="max-w-3xl" key={index}>

            <Carousel slides={reference.slides}></Carousel>
            <Card><p>{reference.description}</p></Card>
            
          </div>
        })}
       
      {/* </div> */}
        </Page>
    )
  }
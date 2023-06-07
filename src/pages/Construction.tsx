import useGlobal from "../hooks/useGlobal";
import { $construction } from "../states/content";

export const Construction = () => {
    const construction = useGlobal($construction);
    return (
      <div>
         {construction.map((reference, index)=> {
          return <div key={index}>
            <p>{reference.description}</p>
          </div>
        })}
       
      </div>
    )
  }
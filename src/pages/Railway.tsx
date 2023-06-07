import useGlobal from "../hooks/useGlobal";
import { $railway } from "../states/content";

export const Railway = () => {
  const railway = useGlobal($railway);
    return (
      <div>
        <img src="./public/contact.jpeg" alt="" />
       
        {railway.map((reference, index)=> {
          return <div key={index}>
            <p>{reference.description}</p>
          </div>
        })}
      </div>
    )
  }
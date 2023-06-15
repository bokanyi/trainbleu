import { navigate } from "../states/routes";
import useGlobal from "../hooks/useGlobal";
import { $contact } from "../states/content";


export const Footer = () => {
    const contact = useGlobal($contact)

  return (
    <div className=" max-w-3xl flex justify-between w-full sticky bottom-4 backdrop-blur-lg items-center px-4 py-2 z-10 rounded-lg" >
        <p className="cursor-pointer hidden md:inline" onClick={() => navigate("/")}>TRAIN BLEU</p>
        <p>Vizi Gábor</p>
        <p className="hidden md:inline">{contact.managingDirector}</p>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
     
    </div>
  )
}

import useGlobal from "../hooks/useGlobal";
import { $contact } from "../states/content";

export const Contact = () => {
  const contact = useGlobal($contact)

    return (
      <div className="w-full">
        <h1>Kapcsolat</h1>
        <h4>Székhely</h4>
        <p>{contact.headquarters}</p>
        <h4>Telephely</h4>
        <p>{contact.site}</p>
        <h4>Fióktelep</h4>
        <p>{contact.branchOffice}</p>
        <h4>Ügyvezető</h4>
        <p>{contact.managingDirector}</p>
        <h4>Adminisztráció</h4>
        <p>{contact.administration}</p>
        <h4>E-mail</h4>
        <p><a href={`mailto:${contact.email}`}
        >{contact.email}</a></p>
      <img src="./contact.jpeg" alt="" />
      </div>
    )
  }
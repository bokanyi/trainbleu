import useGlobal from "../hooks/useGlobal";
import { $contact } from "../states/content";
import { Page } from "../components/Page";
import { Card } from "../components/Card";

export const Contact = () => {
  const contact = useGlobal($contact);

  return (
    <Page custom="py-16 md:py-40 md:min-h-screen">
      <h1>Kapcsolat</h1>

    <div className="flex flex-wrap gap-4 mb-10">

      <Card custom="grow shrink">
        <h4>Székhely</h4>
        <p className="mb-4">{contact.headquarters}</p>
        <h4>Fióktelep</h4>
        <p className="mb-4">{contact.branchOffice}</p>
        <h4>E-mail</h4>
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </Card>

      <Card custom="grow shrink">
        <h4 >Ügyvezető</h4>
        <p className="mb-4">{contact.managingDirector}</p>
        <h4 >Adminisztráció</h4>
        <p className="mb-4">{contact.administration}</p>
        <h4 >Építésvezető</h4>
        <p className="mb-4">{contact.constructor}</p>
        
      </Card>
    </div>

      <img src="./contact.jpeg" alt="" />
    </Page>
  );
};

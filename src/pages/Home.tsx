import { Card } from "../components/Card";
import { CustomButton } from "../components/CustomButton";
import useGlobal from "../hooks/useGlobal";
import { $home, $about } from "../states/content";
import { navigate } from "../states/routes";

export const Home = () => {
  const home = useGlobal($home);
  const about = useGlobal($about);
  return (
    <div className=" flex flex-col gap-10">
            <h1 className="italic" >{home.motto}</h1>

      <div className="flex flex-wrap justify-between">
     
      <div className=" flex justify-center relative">

      <img  className=" w-88 h-128 object-cover" src="/construction.jpg" alt="" />
      
        <CustomButton custom="absolute bottom-10 bg-white" onPress={() => navigate("/construction")}><p>Magasépítés</p></CustomButton>
     

      </div>

      <div className=" flex justify-center relative">

        <img  className="w-88  h-128 object-cover" src="/railway.jpg" alt="" />
        <CustomButton custom="absolute bottom-10 bg-white" onPress={() => navigate("/railway")}><p>Vasút</p></CustomButton>
      </div>

      </div>

    
      <div className="flex justify-between">
        <div>
        <h2>{about.name}</h2>
        <h3 className="whitespace-pre-wrap">{about.position}</h3>

        </div>
        <img className="object-cover w-80 h-80 rounded-lg" src="/VG.jpg" alt="" />
      </div>
      
      <Card>

      {home.content.map((section) => {
        return (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.description.map((desc, index) => (
              <p key={index} >{desc}</p>
            ))}
            <p>{section.details}</p>
          </div>
        );
      })}
      </Card>
    </div>
  );
};

// import { Card } from "../components/Card";
// import { CustomButton } from "../components/CustomButton";
import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $home, $about } from "../states/content";
import { navigate } from "../states/routes";

export const Home = () => {
  const home = useGlobal($home);
  const about = useGlobal($about);
  return (
    <div className="">
      <Page custom={"h-screen"} >

        <div className="whitespace-pre-wrap">

        <h1 className="italic inline text-stone-700 transition-shadow ">{home.motto}</h1>
        </div>
        <div className="text-end"> 
        <h2  onClick={() => navigate("/about")} className="inline-block cursor-pointer text-end mt-20 shadow-none px-4 transition-all  duration-700 hover:shadow-inner underline text-red-00  border-stone-500">Kapcsolat</h2>
        </div>
        
      </Page>

      <Page custom={""}>
        <div className="w-[768px] flex flex-wrap justify-between ">
          <div className=" group flex gap-4 flex-col relative cursor-pointer ">
            <img
              className=" w-[380px] h-[590px] object-cover "
              src="/construction.jpg"
              onClick={() => navigate("/construction")}
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent to-stone-200 w-full " >
              <h2 className="transition-shadow shadow-none duration-700 underline group-hover:shadow-inner inline">Magasépítés</h2>

              <p>{home.content[0].description}</p>
             
            </div>
          
          </div>

          <div className="group flex relative cursor-pointer ">
            <img
              className=" w-[380px] h-[590px] object-cover"
              src="/railway.jpg"
              alt=""
              onClick={() => navigate("/railway")}
              
            />
            
            <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent  to-stone-200 w-full ">

              <h2 className=" transition-shadow shadow-none duration-500  underline group-hover:shadow-inner  inline">Vasút</h2>
              <p>{home.content[1].description}</p>
            </div>
            
          </div>
        </div>
      </Page>

    <Page custom={"h-screen"}>

      <div className="flex justify-between">
        <div>
          <h2>{about.name}</h2>
          <h3 className="whitespace-pre-wrap">{about.position}</h3>
          <h2  onClick={() => navigate("/about")} className="inline-block cursor-pointer text-end mt-20 shadow-none px-4 transition-shadow duration-700 hover:shadow-inner underline">Rólunk</h2>
        </div>
        <img
          className="object-cover w-80 h-80 rounded-full"
          src="/VG.jpg"
          alt=""
        />
      </div>


      {/* <Card>
        {home.content.map((section) => {
          return (
            <div key={section.title}>
              <h3>{section.title}</h3>
              {section.description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
              <p>{section.details}</p>
            </div>
          );
        })}
      </Card> */}
    </Page>
    </div>
  );
};

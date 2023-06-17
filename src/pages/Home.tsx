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
      <Page custom={"min-h-screen py-40"} >

        <div className="">

        {/* <h1 className="animate-back animate-text italic text-stone-700 bg-calc bg-no-repeat bg-clip-padding truncate transition-shadow ">{home.motto}</h1> */}
        <h1 className="italic inline-block transition-shadow ">{home.motto}</h1>
        </div>
        <div className="text-end"> 
        <h2  onClick={() => navigate("/contact")} className="inline-block cursor-pointer text-end mt-20 shadow-none px-4 transition-all  duration-700 hover:shadow-inner underline text-red-00  border-blue-500">Kapcsolat</h2>
        </div>
        
      </Page>

      <Page custom={""}>
        <div className="w-[300] flex flex-col md:w-[768px] md:flex-wrap md:flex-row justify-between gap-24 md:gap-0">
          <div className="group flex relative cursor-pointer ">
            <img
              className="md:w-[375px] h-[500px] md:h-[590px] object-cover "
              src="/construction.jpg"
              onClick={() => navigate("/construction")}
              alt=""
            />
            <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent to-blue-200 w-full " >
              <h2 className="transition-shadow shadow-none duration-700 underline group-hover:shadow-inner inline"
              onClick={() => navigate("/railway")}
              >Magasépítés</h2>

              <p>{home.content[0].description}</p>
             
            </div>
          
          </div>

          <div className="group flex relative cursor-pointer ">
            <img
              className="md:w-[375px] h-[500px] md:h-[590px] object-cover"
              src="/railway.jpg"
              alt=""
              onClick={() => navigate("/railway")}
              
            />
            
            <div className="absolute bottom-0 p-4 bg-gradient-to-b from-transparent  to-blue-200 w-full ">

              <h2 className=" transition-shadow shadow-none duration-500  underline group-hover:shadow-inner inline"
              onClick={() => navigate("/railway")}
              >Vasút</h2>
              <p>{home.content[1].description}</p>
            </div>
            
          </div>
        </div>
      </Page>

    <Page custom={"py-20 mb-40 md:py-0 min-h-screen"}>

      <div className="md:w-[768px] gap-4 flex flex-wrap md:justify-between md:items-center">
        <div className="grow shrink">
          <h2>{about.name}</h2>
          <h3 className="whitespace-pre-wrap">{about.position}</h3>
        </div>
      <div className="grow shrink md:flex md:flex-col md:items-center ">
        <img
          className="object-cover mb-4 w-52 h-52 md:w-80 md:h-80 rounded-full"
          src="/VG2011.jpg"
          alt=""
        />

          <h2  onClick={() => navigate("/about")} className="inline cursor-pointer mt-20 shadow-none px-4 transition-shadow duration-700 hover:shadow-inner underline">Rólunk</h2>
      </div>
      </div>

    </Page>
    </div>
  );
};

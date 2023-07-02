import { navigate } from "../states/routes";
import { CustomButton } from "./CustomButton";
import { Menu } from "./Menu";



export default function Navbar() {
  return (
   

    <div className="max-w-3xl flex justify-between w-screen fixed top-2 backdrop-blur-lg items-center px-4  py-2 z-10 rounded-lg">
   
      <div className="flex md:flex-col items-center">
        <img onClick={() => navigate("/")} src="/logo_trainbleu.png" alt="" className="w-14 md:w-32 cursor-pointer"/>
        {/* <p onClick={() => navigate("/")}>TRAIN BLEU</p> */}
      </div>
      <div  className="hidden md:flex gap-2 " >
        <CustomButton onPress={() => navigate("/")} custom="bg-white"><p>Főoldal</p></CustomButton>
        <CustomButton onPress={() => navigate("/about")} custom="bg-white" ><p>Rólunk</p></CustomButton>
        <CustomButton onPress={() => navigate("/construction")} custom="bg-blue-700 text-white" ><p>Ház/ lakás felújítás</p></CustomButton>
        <CustomButton onPress={() => navigate("/railway")} custom="bg-blue-700 text-white" ><p>Vasúti pálya építés</p></CustomButton>
        <CustomButton onPress={() => navigate("/contact")} custom="bg-white" ><p>Kapcsolat</p></CustomButton>
  
      </div>
      <div className="md:hidden">
        <Menu/>
      </div>
      
    </div>
  
  );
}

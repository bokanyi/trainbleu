import { navigate } from "../states/routes";
import { CustomButton } from "./CustomButton";

export default function Navbar() {
  return (
   

    <div className="max-w-3xl flex justify-between w-full fixed top-2 backdrop-blur-lg items-center px-4  py-2 z-10 rounded-lg">
   
      <div className="flex flex-col items-center">
        <img onClick={() => navigate("/")} src="/logo.png" alt="" className="w-20 cursor-pointer"/>
        <p onClick={() => navigate("/")}>TRAIN BLEU</p>
      </div>
      <div  className="flex gap-2 " >
        <CustomButton onPress={() => navigate("/")} custom="bg-white"><p>Főoldal</p></CustomButton>
        <CustomButton onPress={() => navigate("/about")} custom="bg-white" ><p>Rólunk</p></CustomButton>
        <CustomButton onPress={() => navigate("/construction")} custom="bg-stone-300" ><p>Magasépítés</p></CustomButton>
        <CustomButton onPress={() => navigate("/railway")} custom="bg-stone-300" ><p>Vasút</p></CustomButton>
        <CustomButton onPress={() => navigate("/contact")} custom="bg-white" ><p>Kapcsolat</p></CustomButton>
  
      </div>
    </div>
  
  );
}

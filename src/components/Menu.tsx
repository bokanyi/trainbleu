import { useState } from 'react'
import { CustomButton } from './CustomButton'
import { navigate } from "../states/routes";


export const  Menu = () => {

const [open, setOpen] = useState(false)

  return (
    <div className='relative'>
      <CustomButton custom="bg-white"
      onPress={()=> setOpen(!open)}
      ><p>Menü</p></CustomButton>
      { open && <div className='absolute top-20 right-0 flex flex-col gap-4 ' >
        <CustomButton onPress={() => {navigate("/"), setOpen(!open)}} custom="bg-white"><p>Főoldal</p></CustomButton>
        <CustomButton onPress={() => {navigate("/about"), setOpen(!open)}} custom="bg-white" ><p>Rólunk</p></CustomButton>
        <CustomButton onPress={() => {navigate("/construction"), setOpen(!open)}} custom="bg-stone-300" ><p>Magasépítés</p></CustomButton>
        <CustomButton onPress={() => {navigate("/railway"), setOpen(!open)}} custom="bg-stone-300" ><p>Vasút</p></CustomButton>
        <CustomButton onPress={() => {navigate("/contact"), setOpen(!open)}} custom="bg-white" ><p>Kapcsolat</p></CustomButton>
      </div>}
    </div>
  )
}

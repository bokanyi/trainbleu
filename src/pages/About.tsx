import useGlobal from "../hooks/useGlobal";
import { $railway, $about, $construction } from "../states/content";


export const About = () => {
  const about = useGlobal($about);
  const railway = useGlobal($railway);
  const construction = useGlobal($construction);
  return (
    <div className="py-40">
      <div className="flex justify-between ">
        <div>
        <h2>{about.name}</h2>
        <h3>{about.position}</h3>

        </div>
        <img className="object-cover w-80 h-80 rounded-lg" src="./public/VG.jpg" alt="" />
      </div>
      <div  className="flex flex-col gap-4"> 
      <h2>Munkakörök</h2>
        {about.experiences.map((experience,index)=> {
          return <div key={index}>
            <h3>{experience.years}</h3>
            <p>{experience.position}</p>
            <p>{experience.company}</p>
          </div>
        })}
        <h2>Referenciák</h2>
        {construction.map((reference, index)=> {
          return <div key={index}>
            <p>{reference.description}</p>
          </div>
        })}
        {railway.map((reference, index)=> {
          return <div key={index}>
            <p>{reference.description}</p>
          </div>
        })}
       
        <h2>Publikációk</h2>
        {about.publications.map((publication, index) => {
          return <div key={index}>
            <p>{publication.year}</p>
            <p>{publication.title}</p>
          </div>
        })}
      </div>
      </div>
  )
}

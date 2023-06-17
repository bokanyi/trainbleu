import { Card } from "../components/Card";
import { Page } from "../components/Page";
import useGlobal from "../hooks/useGlobal";
import { $about, } from "../states/content";


export const About = () => {
  const about = useGlobal($about);

  return (
    <Page custom="py-16 md:py-40 md:min-h-screen">
      <div className="md:flex md:justify-between ">
        <div className='pb-10 md:pb-0'>
        <h1>{about.name}</h1>
        <h3>{about.position}</h3>

        </div>
        <img className="object-cover w-80 h-80 rounded-lg" src="./VG2011.jpg" alt="" />
      </div>
      <div  className="flex flex-col gap-4 "> 
        <h2>Munkakörök</h2>
        
          {about.experiences.map((experience,index)=> {
            return <Card custom= {"max-w-md"} key={index}>
              <h3>{experience.years}</h3>
              <p>{experience.position}</p>
              <p>{experience.company}</p>
            </Card>
          })}
       
        
        <h2>Szolgáltatásaink</h2>
        {about.services.map((service, index)=> {
          return <Card key={index}>
            <h3 className="mb-4">{service.name}</h3>
            <p>{service.description}</p>
            <p>{service.details}</p>
          </Card>
        })}

        
        {/* {railway.map((reference, index)=> {
          return <Card key={index}>
            <p>{reference.description}</p>
          </Card>
        })} */}
       
        <h2>Publikációk</h2>
        {about.publications.map((publication, index) => {
          return <div key={index}>
            <p>{publication.year}</p>
            <p>{publication.title}</p>
          </div>
        })}
      </div>
      
    </Page>
  )
}

import useGlobal from "../hooks/useGlobal";
import { $home, $about } from "../states/content";

export const Home = () => {
  const home = useGlobal($home);
  const about = useGlobal($about);
  return (
    <div className="">
      <div></div>
      <img src="/building-construction-worker-site.jpg" alt="" />
      <h1 className="italic" >{home.motto}</h1>
      <div className="flex justify-between">
        <div>
        <h2>{about.name}</h2>
        <h3 className="whitespace-pre-wrap">{about.position}</h3>

        </div>
        <img className="object-cover w-80 h-80 rounded-lg" src="/VG.jpg" alt="" />
      </div>
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
    </div>
  );
};

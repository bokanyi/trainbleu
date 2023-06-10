import { BehaviorSubject } from "rxjs";

type Experience = {
  years: string;
  position: string;
  company: string;
};

type Reference = {
  name: string;
  date: string;
  description: string;
  details: string;
  link: string;
  slides: string[]
};

type Publication = {
  year: string;
  title: string;
};

type About = {
  name: string;
  position: string;
  about: string;
  resume: string;
  experiences: Experience[];
  // references: Reference[];
  publications: Publication[];
};

type Contact = {
  email: string;
  headquarters: string;
  site: string;
  branchOffice: string;
  managingDirector: string;
  administration: string;
};

type BasicContent = {
  title: string;
  description: string[];
  details: string;
};

const about: About = {
  name: "Vizi Gábor",
  position: `Közlekedésépítő mérnök\nFelelős műszaki vezető`,
  about: "",
  resume: "",
  experiences: [
    {
      years: "2020-",
      position: "Ügyvezető, felelős műszaki vezető",
      company: "Train Bleu Kft.",
    },
    {
      years: "1997–2020",
      position: "Vállalkozási főmérnök, telepvezető, régióvezető",
      company: "MÁV-THERMIT Hegesztő Kft.",
    },
    {
      years: "1990–1997",
      position: "Szakaszmérnök",
      company: "MÁV Rt. Szolnoki Pályagazdálkodási Főnökség",
    },
  ],
  // references: [
  //   {
  //     name: "",
  //     date: "2022-2023",
  //     description: `Szabad kapacitásainkat a magasépítés területén, kőműves munkák  végzésére fordítottuk. \n- nyílászárók cseréje\n- falazás (gipszkarton rendszerek telepítése, Ytong, kerámia falazatok)\n- betonozás (sorompósziget kialakítása, zajvédőfal alapozása,  vízelvezető akna készítés, aljzat, födém beton készítés. \n- teljeskörű lakás felújítás gépészteammel\n- Dryvit hőszigetelő homlokzati vakolatrendszer készítése (a fal javítástól a nemesvakolat felhordásával bezárólag. )`,
  //     details: "",
  //     link: "",
  //   },
  //   {
  //     name: "",
  //     date: "2007-2022",
  //     description: `Vasúti pályaépítés, karbantartás.\n- felelős műszaki vezető – sínek összekötő hegesztése, sínek feltöltő-javító ívhegesztése, vasbetonaljak javításának kivitelezése, ágyazatragasztás\n- felelős műszaki vezető – karbantartás több ezer, Oetli-féle sínvándorlást gátló kengyelek felszerrelését végeztük el \n- kitérőfa csere, vasbetonalj csere, talpfa csere, vágánytisztítás, síncsere`,
  //     details: "",
  //     link: "",
  //   },
  //   {
  //     name: "",
  //     date: "",
  //     description: `Az Észak Erdő Zrt. tulajdonában lévő LÁÉV és Pálházai keskenynyomtávú vasúti pályában is végeztünk pályakarbantartási feladatokat, irányításom alatt.`,
  //     details: "",
  //     link: "",
  //   },
  //   {
  //     name: "",
  //     date: "",
  //     description: `Horvátországban, Zabno-Gradec állomásközben hegesztések geometriai mérését, méretre köszörülését, hibás hegesztések kiváltását irányítottam.  Valamint a műszaki átadást bonyolítottam le a sínhegesztések témában.`,
  //     details: "",
  //     link: "",
  //   },
  //   {
  //     name: "",
  //     date: "",
  //     description: `Nagykanizsa vasútállomáson, vasútikocsimosó vágányban Green Track környezetvédelmi gyűjtőtálca telepítését koordináltam, műszaki átadásán dolgoztam.`,
  //     details: "",
  //     link: "",
  //   },
  // ],
  publications: [
    {
      year: "2009",
      title: "Sínek világa • Műanyagok jelentősége a vasútépítésben",
    },
  ],
};

type Home = {
  motto: string;
  content: BasicContent[];
};

const home: Home = {
  motto: "Szenvedélyünk a munkánk, forduljon hozzánk bizalommal!",
  content: [
    {
      title: "Bontás és kivitelezés,\nház és kertépítés, lakásfelújítás",
      description: [
        `- betonozás\n- falazás (gipszkarton, Ytong, kerámia falazatok)\n- nyílászárócsere\n- homlokzati hőszigetelés\n- energetikai felújítás`,
      ],
      details: "",
    },
    {
      title: "Vasútépítés",
      description: [
        `- vasútépítés\n- városi vasút\n- kis vasútépítés`,
      ],
      details: "",
    },
  ],
};


const railway: Reference[] = [
  {
        name: "",
        date: "2007-2022",
        description: `Vasúti pályaépítés, karbantartás.\n- felelős műszaki vezető – sínek összekötő hegesztése, sínek feltöltő-javító ívhegesztése, vasbetonaljak javításának kivitelezése, ágyazatragasztás\n- felelős műszaki vezető – karbantartás több ezer, Oetli-féle sínvándorlást gátló kengyelek felszerrelését végeztük el \n- kitérőfa csere, vasbetonalj csere, talpfa csere, vágánytisztítás, síncsere`,
        details: "",
        link: "",
        slides: ["/sample01.jpg", "/sample02.jpg",],
      },
    {
      name: "",
      date: "",
      description: `Az Észak Erdő Zrt. tulajdonában lévő LÁÉV és Pálházai keskenynyomtávú vasúti pályában is végeztünk pályakarbantartási feladatokat, irányításom alatt.`,
      details: "",
      link: "",
      slides: ["/sample02.jpg", "/sample01.jpg",],
    },
    {
      name: "",
      date: "",
      description: `Horvátországban, Zabno-Gradec állomásközben hegesztések geometriai mérését, méretre köszörülését, hibás hegesztések kiváltását irányítottam.  Valamint a műszaki átadást bonyolítottam le a sínhegesztések témában.`,
      details: "",
      link: "",
      slides: ["/sample01.jpg", "/sample02.jpg",],
    },
    {
      name: "",
      date: "",
      description: `Nagykanizsa vasútállomáson, vasútikocsimosó vágányban Green Track környezetvédelmi gyűjtőtálca telepítését koordináltam, műszaki átadásán dolgoztam.`,
      details: "",
      link: "",
      slides: ["/sample01.jpg", "/sample02.jpg",],
    },
];

const construction: Reference[] = [
  {
    name: "",
    date: "2022-2023",
    description: `Szabad kapacitásainkat a magasépítés területén, kőműves munkák  végzésére fordítottuk. \n- nyílászárók cseréje\n- falazás (gipszkarton rendszerek telepítése, Ytong, kerámia falazatok)\n- betonozás (sorompósziget kialakítása, zajvédőfal alapozása,  vízelvezető akna készítés, aljzat, födém beton készítés. \n- teljeskörű lakás felújítás gépészteammel\n- Dryvit hőszigetelő homlokzati vakolatrendszer készítése (a fal javítástól a nemesvakolat felhordásával bezárólag. )`,
    details: "",
    link: "",
    slides:["/sample01.jpg", "/sample02.jpg",],
  },
]

const contact: Contact = {
  email: "trainbleukft@gmail.com",
  headquarters: "1202 XX. Kerület. Budapest Vécsei út 55.",
  site: "5008 Szolnok Vörösmező u. 15.",
  branchOffice: "5235 Tiszabura Kossuth L. út 111.",
  managingDirector: "+36 20 9643 597",
  administration: "+36 20 382 7726",
};

export const $about = new BehaviorSubject<About>(about);
export const $home = new BehaviorSubject<Home>(home);
export const $contact = new BehaviorSubject<Contact>(contact);
export const $railway = new BehaviorSubject<Reference[]>(railway);
export const $construction = new BehaviorSubject<Reference[]>(construction);

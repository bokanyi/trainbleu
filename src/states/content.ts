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
  // link: string;
  slides: string[];
};

type Publication = {
  year: string;
  title: string;
};

type About = {
  name: string;
  position: string;
  about: string;
  description: string;
  experiences: Experience[];
  services: Reference[];
  publications: Publication[];
};

type Contact = {
  email: string;
  headquarters: string;
  site: string;
  branchOffice: string;
  managingDirector: string;
  administration: string;
  constructor: string;
};

type BasicContent = {
  title: string;
  description: string[];
  details: string;
};

const about: About = {
  name: "Vizi Gábor",
  position: `Közlekedésépítő mérnök\nFelelős műszaki vezető\nMV-KÉ 1650529`,
  about: "Cégünk 2007 áprilisában alakult.",
  description:
    "Cégünk reklámtevékenységre minimális költséget fordít, az elvégzett munkák minőségét tartja legfőbb reklámhordozójának.",
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
  services: [
    {
      name: "Ház/Lakás felújítás",
      date: "",
      description: `Vasúti munkáink mellett, megmaradó szabad kapacitásainkat a magasépítés területén, kőműves munkák végzésére fordítjuk.`,
      details: `- Hőszigetelés (fal, födém, padló)\n- Nyílászárók cseréje\n- Dryvit hőszigetelő homlokzati vakolatrendszer készítése (a fal javítástól a nemesvakolat
      felhordásával bezárólag. )\n- Belső terek átalakítása\n- Falazás (gipszkarton rendszerek telepítése, Ytong, kerámia falazatok)\n- Betonozás ( alapozás, vasbeton készítés, áthidalók, betonfelületjavítás)\n- Teljeskörű lakás felújítás, festés, mázolás\n- Térkövezés\n- Kerítés-, járda-, kertépítés`,
      slides: [],
    },
    {
      name: "Vasúti pályaépítés, karbantartás, felügyeleti tevékenység",
      date: "2007-2022",
      description: ``,
      details: `– Vasbetonaljak furatainak javítása\n- Sínek feltöltő-javító ívhegesztése\n- Ágyazatragasztás\n- Talpfa-, kitérőfa-, vasbetonalj csere\n- Oetl-féle sínvándorlás gátló felszerelése\n- Iparvágányok felügyelete\n- Lefejtő tálcák magánaljainak javítása`,
      slides: [],
    },
    // {
    //   name: "",
    //   date: "",
    //   description: `Az Észak Erdő Zrt. tulajdonában lévő LÁÉV és Pálházai keskenynyomtávú vasúti pályában is végeztünk pályakarbantartási feladatokat, irányításom alatt.`,
    //   details: "",
    //   slides: [],
    // },
    // {
    //   name: "",
    //   date: "",
    //   description: `Horvátországban, Zabno-Gradec állomásközben hegesztések geometriai mérését, méretre köszörülését, hibás hegesztések kiváltását irányítottam.  Valamint a műszaki átadást bonyolítottam le a sínhegesztések témában.`,
    //   details: "",
    //   slides: [],
    // },
    // {
    //   name: "",
    //   date: "",
    //   description: `Nagykanizsa vasútállomáson, vasútikocsimosó vágányban Green Track környezetvédelmi gyűjtőtálca telepítését koordináltam, műszaki átadásán dolgoztam.`,
    //   details: "",
    //   slides: [],
    // },
  ],
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
        `- Betonozás\n- Falazás (gipszkarton, Ytong, kerámia falazatok)\n- Nyílászárócsere\n- Homlokzati hőszigetelés\n- Energetikai felújítás\n- Térkövezés\n- Kerítés-, járda-, kertépítés`,
      ],
      details: "",
    },
    {
      title: "Vasútépítés",
      description: [
        `- Nagyvasút pályakarbantartás\n- Kisvasutak pályakarbantartása\n- Városi vasutak ( villamos, HÉV, Metró) pályakarbantartása\n- Iparvágányok pályafelügyelete, karbantartása`,
      ],
      details: "",
    },
  ],
};

const railway: Reference[] = [
  {
    name: "Vasbetonaljak furatjavítása:",
    date: "",
    description: `Százezres nagyságrendű referenciánk van a vasúti vasbetonaljak javítása területén.\nValamennyi, MÁV Zrt. által elfogadott technológiát ismerjük, és gyakorlatban használjuk.\nKiemelném költséghatékonysága miatt a vasbetonaljas kitérők esetét. Ebben az esetben a kitérők vasbetonaljaiban, a beszakadt síncsavarok kiszedéséről, a roncsolódott műanyag (kívül-belül menetes) betét kiszereléséről, és a furat új anyaggal történő javítását végezzük el, a kitérőben lévő betonalj cseréje, ágyazati gerendájának fellazítása nélkül.
    `,
    details: "",
    slides: [
      "/furatjavitas3.jpg",
      "/furatjavitas2.jpg",
      "/furatjavitas4.jpg",
      "/vasbetonaljjavitas.jpg"],
  },
  {
    name: "Sínek feltöltő-javító ívhegesztése",
    date: "",
    description: `
    `,
    details: "",
    slides: [
      "/feltoltoheg.jpg",
      "/feltoltoheg2.jpg",
      "/feltoltoheg3.jpg",
      "/feltoltoheg4.jpg",
],
  },
  {
    name: "Ágyazatragasztás, apró kövek ragasztása műgyantával:",
    date: "",
    description: `Terek díszítésére, (különböző színekben gyártják). Laza kavicsos felületek megszüntetésére (lábazati járdák, szikkasztók kavics felületének járhatóvá tételére). Járdák mellett, a fatörzsek körbe burkolására javasoljuk, mivel a ragasztástól nem veszti el a vízáteresztő tulajdonságát a zúzottkő vagy kavicsréteg.\nVillamos megállókban is alkalmaztuk, ahol a kő ágyazat felületének ragasztásával lehetővé tettük a felület porszívózhatóságát, csikkek, falevelek, papír szemét eltávolítását.
      `,
    details: "",
    slides: [
      "/agyazatragasztas01.jpeg", 
    "/agyazatragasztas02.jpg",
    "/agyazatragasztas03.jpeg",
    "/agyazatragasztas04.jpeg",
  ],
  },
  {
    name: "Talpfa-, kitérőfa-, vasbetonalj csere",
    date: "",
    description: ``,
    details: "",
    slides: [
      "/talpfacsere.jpg", 
      "/talpfacsere2.jpg", 
      "/talpfacsere3.jpg", 
      "/talpfacsere4.jpg", 
  ],
  },

  {
    name: "Oetl féle sínvándorlásgátló felszerelése:",
    date: "",
    description: `A hosszirányú dilatációs erők leküzdése különösen fontos a következő vágányrészeken:
      - Hídmérlegek, tolópadok, fordítókorongok működésének védelmében
      - Kitérők zárszerkezetének környékén
      - Nyílt lemezes leerősítésű vágányok végein.
      - Szigetelt kötések védelmében.
      - Hosszúsinek alkalmazása esetén.\nCégünk korszerű és hatékony melegítéssel, (több tízezres referenciával), elvégzi az Oetl féle sínvándorlástgátló kengyelek felszerelését.
      `,
    details: "",
    slides: [
      "/oetl.png",
      "/oetl2.jpg",
      "/oetl3.jpg",
    ],
  },
  {
    name: "Lefejtő tálcákon, vasbetonlemezeken lévő vasúti leerősítések javítása, magánalj betonjavítása:",
    date: "2007-2022",
    description: `Gyakori probléma a vasbeton pályákon, a beton romlásából származó (vegyi és/vagy fizikai erőhatásokból adódó) leerősítő erő vesztés. Ennek visszaállítását, a leerősítés és a beton javítását szakszerűen elvégzi cégünk. A metró építésénél alkalmazott anyagokkal dolgozunk, a technológia szigorú betartásával.
      `,
    details: "",
    slides: [
      "/lefejto.jpeg",
      "/lefejto2.jpg",
      "/lefejto3.jpg",
  
  ],
  },
];

const construction: Reference[] = [
  {
    name: `Hőszigetelés (fal, födém, padló)`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_dryvit.jpeg",
      "/construct_01_hoszigeteles.jpg",
      "construct_01_hoszigeteles02.jpg",
      "construct_01_hoszigeteles03.jpg",
      "construct_01_hoszigeteles04.jpeg",
    ],
  },
  {
    name: `Nyílászárók cseréje`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_nzilaszaro.jpeg",
      "/construct_01_nzilaszaro2.jpg",
      "/construct_01_nzilaszaro3.jpg",
      "construct_01_nzilaszaro4.jpeg",
      "construct_01_nzilaszaro5.jpeg",
      "construct_01_nzilaszaro6.jpeg",
      "construct_01_nzilaszaro7.jpg",
    ],
  },
  {
    name: "Dryvit hőszigetelő homlokzati vakolatrendszer készítése ",
    date: "",
    description: `Dryvit hőszigetelő homlokzati vakolatrendszer készítése `,
    details: "",
    slides: ["/construct_01_dryvit02.jpeg", "/construct_01_dryvit03.jpeg"],
  },
  {
    name: `Belső terek átalakítása`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_02_belso.jpeg",
      "/construct_02_belso2.jpeg",
      "/construct_02_belso3.jpeg",
      "/construct_01_tapeta.jpg",
      "/construct_02_furdo.jpg",
      "/construct_02_kandallo.jpg",
      "/construct_02_toloajto.jpg",
      "/construct_02_toloajto2.jpg",
    ],
  },
  {
    name: `Falazás`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_nzilaszaro6.jpeg",
      "/construct_01_dryvit02.jpeg",
    ],
  },
  {
    name: `Betonozás`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_beton.jpg",
      "/construct_01_beton2.jpg",
      "/construct_01_beton3.jpg",
      "/construct_01_beton4.jpg",
      "/construct_01_beton5.jpg",
    ],
  },
  {
    name: `Teljeskörű lakás felújítás, festés, mázolás`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_lakas.jpg", 
      "/construct_01_lakas2.jpeg", 
      "/construct_01_lakas3.jpeg",
      "/construct_02_belso.jpeg",
      "/construct_02_belso2.jpeg",
      "/construct_02_belso3.jpeg", 
    ],
  },
  
  {
    name: `Térkövezés`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_01_terko.jpg",
      "/construct_01_terko2.jpg",
      "/construct_01_terko3.jpg",
      "/construct_01_terko4.jpg",
    ],
  },
  {
    name: `Járda-, kerítés-, kertépítés`,
    date: "",
    description: "",
    details: "",
    slides: [
      "/construct_03_kert.jpg",
      "/construct_03_kert2.jpg",
      "/construct_03_kert3.jpg",
      "/construct_03_kert4.jpg",
      "/construct_03_kert5.jpg",
      "/construct_01_utepites.jpg",
      "/construct_03_terko.jpg",
      "/construct_03_kerites.jpg",
      "/construct_03_kavics.jpg",
    ],
  },

  // {
  //   name: "",
  //   date: "",
  //   description: `Járda-, kerítés-, kertépítés`,
  //   details: "",
  //   slides:["/construct_01_dryvit.jpeg", "/construct_01_hoszigeteles.jpg", "/construct_01_nzilaszaro.jpeg", "/construct_01_nzilaszaro2.jpg", "/construct_01_nzilaszaro3.jpg", "/construct_01_teto.jpeg","/construct_01_tapeta.jpg" , "/construct_01_utepites.jpg" , "/construct_02_furdo.jpg" ,"/construct_02_futes.jpg", "/construct_02_kandallo.jpg", "/construct_02_toloajto.jpg" , "/construct_02_toloajto2.jpg", "/construct_03_terko.jpg", "/construct_03_kerites.jpg", "/construct_03_kavics.jpg"],
  // },
];

const contact: Contact = {
  email: "trainbleukft@gmail.com",
  headquarters: "1202 XX. Kerület. Budapest Vécsey utca 55.",
  site: "5008 Szolnok Vörösmező u. 15.",
  branchOffice: "5235 Tiszabura Kossuth L. út 111.",
  managingDirector: "+36 20 9643 597",
  administration: "+36 20 382 7726",
  constructor: "+36 20 808 9132",
};

export const $about = new BehaviorSubject<About>(about);
export const $home = new BehaviorSubject<Home>(home);
export const $contact = new BehaviorSubject<Contact>(contact);
export const $railway = new BehaviorSubject<Reference[]>(railway);
export const $construction = new BehaviorSubject<Reference[]>(construction);

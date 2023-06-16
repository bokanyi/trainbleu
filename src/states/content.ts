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
  references: Reference[];
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
  references: [
    {
      name: "",
      date: "2022-2023",
      description: `Szabad kapacitásainkat a magasépítés területén, kőműves munkák  végzésére fordítottuk. \n- nyílászárók cseréje\n- falazás (gipszkarton rendszerek telepítése, Ytong, kerámia falazatok)\n- betonozás (sorompósziget kialakítása, zajvédőfal alapozása,  vízelvezető akna készítés, aljzat, födém beton készítés. \n- teljeskörű lakás felújítás gépészteammel\n- Dryvit hőszigetelő homlokzati vakolatrendszer készítése (a fal javítástól a nemesvakolat felhordásával bezárólag. )`,
      details: "",
      slides: [],
    },
    {
      name: "",
      date: "2007-2022",
      description: `Vasúti pályaépítés, karbantartás.\n- felelős műszaki vezető – sínek összekötő hegesztése, sínek feltöltő-javító ívhegesztése, vasbetonaljak javításának kivitelezése, ágyazatragasztás\n- felelős műszaki vezető – karbantartás több ezer, Oetli-féle sínvándorlást gátló kengyelek felszerrelését végeztük el \n- kitérőfa csere, vasbetonalj csere, talpfa csere, vágánytisztítás, síncsere`,
      details: "",
      slides: [],
    },
    {
      name: "",
      date: "",
      description: `Az Észak Erdő Zrt. tulajdonában lévő LÁÉV és Pálházai keskenynyomtávú vasúti pályában is végeztünk pályakarbantartási feladatokat, irányításom alatt.`,
      details: "",
      slides: [],
    },
    {
      name: "",
      date: "",
      description: `Horvátországban, Zabno-Gradec állomásközben hegesztések geometriai mérését, méretre köszörülését, hibás hegesztések kiváltását irányítottam.  Valamint a műszaki átadást bonyolítottam le a sínhegesztések témában.`,
      details: "",
      slides: [],
    },
    {
      name: "",
      date: "",
      description: `Nagykanizsa vasútállomáson, vasútikocsimosó vágányban Green Track környezetvédelmi gyűjtőtálca telepítését koordináltam, műszaki átadásán dolgoztam.`,
      details: "",
      slides: [],
    },
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
        name: "Lefejtő tálcákon, vasbetonlemezeken lévő vasúti leerősítések javítása, magánalj betonjavítása:",
        date: "2007-2022",
        description: `Gyakori probléma a vasbeton pályákon, a beton romlásából származó (vegyi és/vagy fizikai erőhatásokból adódó) leerősítő erő vesztés. Ennek visszaállítását, a leerősítés és a beton javítását szakszerűen elvégzi cégünk. A metró építésénél alkalmazott anyagokkal dolgozunk, a technológia szigorú betartásával.
        `,
        details: "",
        slides: ["/vasbetonaljjavitas.jpg", ],
      },
    {
      name: "Ágyazatragasztás, apró kövek ragasztása műgyantával:",
      date: "",
      description: `Terek díszítésére, (különböző színekben gyártják). Laza kavicsos felületek megszüntetésére (lábazati járdák, szikkasztók kavics felületének járhatóvá tételére). Járdák mellett, a fatörzsek körbe burkolására javasoljuk, mivel a ragasztástól nem veszti el a vízáteresztő tulajdonságát a zúzottkő vagy kavicsréteg.\nVillamos megállókban is alkalmaztuk, ahol a kő ágyazat felületének ragasztásával lehetővé tettük a felület porszívózhatóságát, csikkek, falevelek, papír szemét eltávolítását.
      `,
      details: "",
      slides: ["/agyazatragasztas01.jpeg", "/agyazatragasztas02.jpg",],
    },
    {
      name: "Vasbetonaljak furatjavítása:",
      date: "",
      description: `Százezres nagyságrendű referenciánk van a vasúti vasbetonaljak javítása területén.\nValamennyi, MÁV Zrt. által elfogadott technológiát ismerjük, és gyakorlatban használjuk.\nKiemelném költséghatékonysága miatt a vasbetonaljas kitérők esetét. Ebben az esetben a kitérők vasbetonaljaiban, a beszakadt síncsavarok kiszedéséről, a roncsolódott műanyag (kívül-belül menetes) betét kiszereléséről, és a furat új anyaggal történő javítását végezzük el, a kitérőben lévő betonalj cseréje, ágyazati gerendájának fellazítása nélkül.
      `,
      details: "",
      slides: ["/furatjavitas.jpg",],
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
      slides: ["/maganjavitas.jpeg", "/strailutatjaroepites.jpg", "/iparvaganyfelugyelet.jpg"],
    },
];

const construction: Reference[] = [
  {
    name: "",
    date: "2022-2023",
    description: `Szabad kapacitásainkat a magasépítés területén, kőműves munkák  végzésére fordítottuk. \n- nyílászárók cseréje\n- falazás (gipszkarton rendszerek telepítése, Ytong, kerámia falazatok)\n- betonozás (sorompósziget kialakítása, zajvédőfal alapozása,  vízelvezető akna készítés, aljzat, födém beton készítés. \n- teljeskörű lakás felújítás gépészteammel\n- Dryvit hőszigetelő homlokzati vakolatrendszer készítése (a fal javítástól a nemesvakolat felhordásával bezárólag. )`,
    details: "",
    slides:["/construct_01_dryvit.jpeg", "/construct_01_hoszigeteles.jpg", "/construct_01_nzilaszaro.jpeg", "/construct_01_nzilaszaro2.jpg", "/construct_01_nzilaszaro3.jpg", "/construct_01_teto.jpeg","/construct_01_tapeta.jpg" , "/construct_01_utepites.jpg" , "/construct_02_furdo.jpg" ,"/construct_02_futes.jpg", "/construct_02_kandallo.jpg", "/construct_02_toloajto.jpg" , "/construct_02_toloajto2.jpg", "/construct_03_kavics.jpg", "/construct_03_kerites.jpg", "/construct_03_kavics.jpg"],
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

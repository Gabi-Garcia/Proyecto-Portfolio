import "./style.css" ;

import { linkPage } from "./utils/linkPage";
import { changeTheme } from "./utils/changeTheme";


import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Divider } from "./components/Divider/Divider";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About"
import { Projects } from "./pages/Projects/Projects";
import { Certificados } from "./pages/Certificados/Certificados";
import { CurriculumVitae } from "./pages/CV/CurriculumVitae";


const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
// footer.innerHTML = Footer();
linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#aboutlink", About)
linkPage("#certificados", Certificados)
linkPage("#curriculum", CurriculumVitae)
Home();
changeTheme();
// footer.insertAdjacentHTML("beforebegin", Divider());

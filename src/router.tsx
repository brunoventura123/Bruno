import { BrowserRouter, Route } from "react-router-dom";
import {About} from './pages/About'
import { Technology } from "./pages/Technology";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Certificates } from "./pages/Certificates";
import { NotFound } from "./pages/NotFound";


export const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route  path="/" exact component={About} />
            <Route path="/technology"  component={Technology} />
            <Route path="/projects"  component={Projects} />
            <Route path="/contact"  component={Contact} />
            <Route path="/certificates"  component={Certificates} />
            <Route path="*" component={NotFound} />
        </BrowserRouter>
    )
}
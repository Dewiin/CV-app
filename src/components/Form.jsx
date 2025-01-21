import "../styles/form.css"
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header/Header";

export function Form() {
    return (
        <div className="form">
            <Header></Header>
            <Education></Education>
            <Experience></Experience>
        </div>
    );
}
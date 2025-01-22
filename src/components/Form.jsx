import "../styles/form.css"
// import { useState } from "react";
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header/Header";

export function Form( {formData, onChange} ) {
    return (
        <div className="form">
            <Header 
                formData={formData.header} 
                onChange={onChange}
            />
            <Education
                formData={formData.education}
                onChange={onChange}
            />
            <Experience
                formData={formData.experience}
                onChange={onChange}
            />
        </div>
    );
}
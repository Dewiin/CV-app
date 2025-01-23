import "../styles/preview.css"
import { HeaderPreview } from "./Header/HeaderPreview";
import { EducationPreview } from "./Education/EducationPreview";
import { ExperiencePreview } from "./Experience/ExperiencePreview";

export function Preview({ formData }) {
    return (
        <>
            <HeaderPreview formData={formData.header} />
            <EducationPreview formData={formData.education} />
            <ExperiencePreview formData={formData.experience} />
        </>
    );
}
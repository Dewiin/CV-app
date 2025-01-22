import "../styles/preview.css"
import { HeaderPreview } from "./Header/HeaderPreview";
import { EducationPreview } from "./Education/EducationPreview";

export function Preview({ formData }) {
    return (
        <>
            <HeaderPreview formData={formData.header} />
            <EducationPreview formData={formData.education} />
        </>
    );
}
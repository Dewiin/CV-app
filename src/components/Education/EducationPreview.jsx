export function EducationPreview({ formData }) {
    return (
        <div className="education-preview">
            <h2>Education</h2>
            <div className="education-info">
                <div className="university-info">
                    <h4>{formData.school || "Massachusetts Institute of Technology"}</h4>
                    <span>{formData.degree || "Bachelor of Science in Computer Science"}</span>
                </div>
                <div className="university-time-location-info">
                    <h4>{formData.location || "Cambridge, Massachusetts"}</h4>
                    <span>{((formData.start || formData.end) && `${formData.start} - ${formData.end}`) || "01/25/2022 - Present"}</span>
                </div>
            </div>
        </div>
    );
}
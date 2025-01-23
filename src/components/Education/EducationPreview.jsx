export function EducationPreview({ formData }) {
    return (
        <div className="education-preview">
            <h2>Education</h2>
            {formData.map((education, index) => (
                <div key={index} className="education-info">
                    <div className="university-info">
                        <h4>{education.school || "Massachusetts Institute of Technology"}</h4>
                        <span>{education.degree || "Bachelor of Science in Computer Science"}</span>
                    </div>
                    <div className="university-time-location-info">
                        <h4>{education.location || "Cambridge, Massachusetts"}</h4>
                        <span>{((education.start || education.end) && `${education.start} - ${education.end}`) || "01/25/2022 - Present"}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
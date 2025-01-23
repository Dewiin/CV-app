export function EducationPreview({ formData }) {
    return (
        <div className="education-preview">
            {formData.length > 0 ? (
                <>
                <h2>Education</h2>
                {formData.map((education, index) => (
                    <div key={index} className="education-info">
                        <div className="university-info">
                            <h4>{education.school}</h4>
                            <span>{education.degree}</span>
                        </div>
                        <div className="university-time-location-info">
                            <h4>{education.location}</h4>
                            <span>{((education.start || education.end) && `${education.start} - ${education.end}`)}</span>
                        </div>
                    </div>
                ))}
                </>
                ) : (
                <span></span>
                )
            }
        </div>
    );
}
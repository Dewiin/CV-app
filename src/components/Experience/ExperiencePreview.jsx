export function ExperiencePreview({ formData }) {
    return (
        <div className="experience-preview">
            {formData.length > 0 ? (
                <>
                <h2>Experience</h2>
                {formData.map((experience, index) => (
                    <div key={index} className="preview-experience-section">
                        <div className="experience-info">
                            <div className="company-info">
                                <h4>{experience.company}</h4>
                                <span>{experience.position}</span>
                            </div>
                            <div className="company-time-location-info">
                                <h4>{experience.location}</h4>
                                <span>{((experience.start || experience.end) && `${experience.start} - ${experience.end}`)}</span>
                            </div>
                        </div>
                        <div className="company-description">
                            <p>{experience.description}</p>
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
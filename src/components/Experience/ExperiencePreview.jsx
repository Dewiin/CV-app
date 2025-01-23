export function ExperiencePreview({ formData }) {
    return (
        <div className="experience-preview">
            <h2>Experience</h2>
            {formData.map((experience, index) => (
                <div key={index} className="preview-experience-section">
                    <div className="experience-info">
                        <div className="company-info">
                            <h4>{experience.company || "Google"}</h4>
                            <span>{experience.position || "Software Engineer"}</span>
                        </div>
                        <div className="company-time-location-info">
                            <h4>{experience.location || "Boston, Massachusetts"}</h4>
                            <span>{((experience.start || experience.end) && `${experience.start} - ${experience.end}`) || "04/14/2023 - Present"}</span>
                        </div>
                    </div>
                    <div className="company-description">
                        <p>{experience.description || `Collaborated with cross-functional teams to design and implement scalable web applications serving millions of users globally. ` + 
                        `Led the development of a machine learning pipeline that improved ad targeting accuracy by 15%, resulting in a $5M increase in annual revenue.
                        Spearheaded the migration of legacy systems to a modern microservices architecture, reducing system downtime by 25%. Optimized search algorithms for Google Maps, improving location` +
                        `retrieval speeds by 30% and enhancing user experience. Conducted code reviews and mentored junior engineers, fostering a culture of high-quality software development.`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
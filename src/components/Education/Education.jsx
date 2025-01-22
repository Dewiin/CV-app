import { Input } from "../Input.jsx";


export function Education({formData, onChange}) {
    return (
        <div className="education-form form-section">
            <h1>Education</h1>
            <Input 
                label="School" 
                placeholder="Enter School/University"
                value={formData.school}
                onChange={e => onChange(e, "education", "school")}
            />

            <Input 
                label="Degree" 
                placeholder="Enter Degree/Field of Study"
                value={formData.degree}
                onChange={e => onChange(e, "education", "degree")}
            />

            <Input 
                label="Start Date" 
                placeholder="Enter Start Date"
                value={formData.start}
                onChange={e => onChange(e, "education", "start")}
            />

            <Input 
                label="End Date" 
                placeholder="Enter End Date"
                value={formData.end}
                onChange={e => onChange(e, "education", "end")}
            />

            <Input 
                label="Location" 
                placeholder="Enter Location"
                value={formData.location}
                onChange={e => onChange(e, "education", "location")}
            />

        </div>
    );
}
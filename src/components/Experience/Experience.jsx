import { Input } from "../Input.jsx";

export function Experience( {formData, onChange }) {
    return (
        <div className="work-experience-form form-section">
            <h1>Work Experience</h1>
            <Input 
                label="Company Name" 
                placeholder="Enter Company Name" 
                value={formData.company}
                onChange={e => onChange(e, "company")} 
            />

            <Input 
                label="Position Title" 
                placeholder="Enter Position Title"
                value={formData.position} 
                onChange={e => onChange(e, "position")}
            />

            <Input 
                label="Start Date" 
                placeholder="Enter Start Date"
                value={formData.start} 
                onChange={e => onChange(e, "start")}
            />

            <Input 
                label="End Date" 
                placeholder="Enter End Date"
                value={formData.end} 
                onChange={e => onChange(e, "end")}
            />

            <Input 
                label="Location" 
                placeholder="Enter Location"
                value={formData.location} 
                onChange={e => onChange(e, "location")}
            />

            <Input 
                label="Description" 
                type="textarea" 
                placeholder="Enter Description"
                value={formData.description} 
                onChange={e => onChange(e, "description")}
            />

        </div>
    );
}

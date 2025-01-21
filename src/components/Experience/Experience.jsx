import { Input } from "../Input.jsx";

export function Experience({onChange=null, company="", position="", start="", end="", location="", description=""}) {
    return (
        <div className="work-experience-form form-section">
            <h1>Work Experience</h1>
            <Input label="Company Name" placeholder="Enter Company Name" onChange={onChange}>{company}</Input>

            <Input label="Position Title" placeholder="Enter Position Title" onChange={onChange}>{position}</Input>

            <Input label="Start Date" placeholder="Enter Start Date" onChange={onChange}>{start}</Input>

            <Input label="End Date" placeholder="Enter End Date" onChange={onChange}>{end}</Input>

            <Input label="Location" placeholder="Enter Location" onChange={onChange}>{location}</Input>

            <Input label="Description" type="textarea" placeholder="Enter Description" onChange={onChange}>{description}</Input>
        </div>
    );
}

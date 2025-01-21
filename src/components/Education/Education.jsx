import { Input } from "../Input.jsx";


export function Education({school, degree, start, end, location}) {
    return (
        <div className="education-form form-section">
            <h1>Education</h1>
            <Input label="School" placeholder="Enter School/University">{school}</Input>

            <Input label="Degree" placeholder="Enter Degree/Field of Study">{degree}</Input>

            <Input label="Start Date" placeholder="Enter Start Date">{start}</Input>

            <Input label="End Date" placeholder="Enter End Date">{end}</Input>

            <Input label="Location" placeholder="Enter Location">{location}</Input>
        </div>
    );
}
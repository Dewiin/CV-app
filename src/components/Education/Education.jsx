import { useState } from "react";
import { Input } from "../Input.jsx";

export function Education({formData, arrayChange, addNewItem, removeItem, isEditing, saveItem, toggleExpand}) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="education-form form-section">
            <div className="education-header" onClick={toggleActive}>
                <h1>Education</h1>
                <span>{isActive ? "▲" : "▼"}</span>
            </div>
            {formData.map((education, index) => (
                <div key={index} className={`education-section ${isActive ? "form-section" : ""}`}>
                    {education.expanded ? (
                        <>
                            <Input 
                                label="School" 
                                placeholder="Enter School/University"
                                value={education.school}
                                onChange={e => arrayChange(e, "education", index, "school")}
                            />

                            <Input 
                                label="Degree" 
                                placeholder="Enter Degree/Field of Study"
                                value={education.degree}
                                onChange={e => arrayChange(e, "education", index, "degree")}
                            />

                            <div className="timeline">
                                <Input 
                                    label="Start Date" 
                                    placeholder="Enter Start Date"
                                    value={education.start}
                                    onChange={e => arrayChange(e, "education", index, "start")}
                                />

                                <Input 
                                    label="End Date" 
                                    placeholder="Enter End Date"
                                    value={education.end}
                                    onChange={e => arrayChange(e, "education", index, "end")}
                                />
                            </div>

                            <Input 
                                label="Location" 
                                placeholder="Enter Location"
                                value={education.location}
                                onChange={e => arrayChange(e, "education", index, "location")}
                            />

                            {isEditing[0] && (
                                <div className="edit-controls">
                                    <button onClick={() => removeItem("education", index)}>Remove</button>
                                    <button onClick={() => {toggleExpand("education", index); saveItem("education", false)}}>Save</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className="collapsed-item" onClick={() => {toggleExpand("education", index), saveItem("education", true)}}>
                                <p>{education.school} - {education.degree}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
            {isActive && !isEditing[0] && <button onClick={() => addNewItem("education")}>+ Education</button>}
        </div>
    );
}
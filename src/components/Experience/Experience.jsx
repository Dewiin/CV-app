import { useState } from "react";
import { Input } from "../Input.jsx";

export function Experience( {formData, arrayChange, addNewItem, removeItem, isEditing, saveItem, toggleExpand }) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="work-experience-form form-section">
            <div className="work-experience-header" onClick={toggleActive}>
                <h1>Work Experience</h1>
                <span>{isActive ? "▲" : "▼"}</span>
            </div>
            {formData.map((experience, index) => (
                <div key={index} className={`work-experience-section ${isActive ? "form-section" : ""}`}>
                    {experience.expanded ? (
                        <>
                            <Input 
                                label="Company Name" 
                                placeholder="Enter Company Name" 
                                value={experience.company}
                                onChange={e => arrayChange(e, "experience", index, "company")} 
                            />

                            <Input 
                                label="Position Title" 
                                placeholder="Enter Position Title"
                                value={experience.position} 
                                onChange={e => arrayChange(e, "experience", index, "position")}
                            />

                            <div className="timeline">
                                <Input 
                                    label="Start Date" 
                                    placeholder="Enter Start Date"
                                    value={experience.start} 
                                    onChange={e => arrayChange(e, "experience", index, "start")}
                                />

                                <Input 
                                    label="End Date" 
                                    placeholder="Enter End Date"
                                    value={experience.end} 
                                    onChange={e => arrayChange(e, "experience", index, "end")}
                                />
                            </div>

                            <Input 
                                label="Location" 
                                placeholder="Enter Location"
                                value={experience.location} 
                                onChange={e => arrayChange(e, "experience", index, "location")}
                            />

                            <Input 
                                label="Description" 
                                type="textarea" 
                                placeholder="Enter Description"
                                value={experience.description} 
                                onChange={e => arrayChange(e, "experience", index, "description")}
                            />

                            {isEditing[1] && (
                                <div className="edit-controls">
                                    <button onClick={() => removeItem("experience", index)}>Remove</button>
                                    <button onClick={() => {toggleExpand("experience", index); saveItem("experience", false)}}>Save</button>
                                </div>
                            )}
                        </>
                        ) : (
                            <>
                                <div className="collapsed-item" onClick={() => {toggleExpand("experience", index), saveItem("experience", true)}}>
                                    <p>{experience.company} - {experience.position}</p>
                                </div>
                            </>
                        )
                    }
                </div>
            ))}
            {isActive && !isEditing[1] && <button onClick={() => addNewItem("experience")}>+ Experience</button>}
        </div>
    );
}

import "../styles/form.css"
import { Education } from "./Education/Education";
import { Experience } from "./Experience/Experience";
import { Header } from "./Header/Header";

export function Form( {formData, onChange, arrayChange, addNewItem, removeItem, isEditing, saveItem, toggleExpand} ) {
    return (
        <div className="form">
            <Header 
                formData={formData.header} 
                onChange={onChange}
            />
            <Education
                formData={formData.education}
                arrayChange={arrayChange}
                addNewItem={addNewItem}
                removeItem={removeItem}
                isEditing={isEditing}
                saveItem={saveItem}
                toggleExpand={toggleExpand}
            />
            <Experience
                formData={formData.experience}
                arrayChange={arrayChange}
                addNewItem={addNewItem}
                removeItem={removeItem}
                isEditing={isEditing}
                saveItem={saveItem}
                toggleExpand={toggleExpand}
            />
        </div>
    );
}
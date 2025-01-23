import { useState } from 'react'
import { Form } from "./components/Form.jsx"
import { Preview } from "./components/Preview.jsx"

export function App() {
  const [formData, setFormData] = useState({
    "header": {
      "name": "",
      "email": "",
      "phone": "",
      "address": ""
    },
    "education": [],
    "experience": [],
  }); 

  const handleChange = (e, section, fieldName) => {
    if(e.target.value[0] != ' ') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [section]: {
          ...prevFormData[section],
          [fieldName]: e.target.value,
        },
      }));
    }
  };

  const handleArrayChange = (e, section, index, field) => {
    const updatedArray = formData[section].map((item, i) =>
      i === index ? { ...item, [field]: e.target.value } : item
    );
  
    setFormData({
      ...formData,
      [section]: updatedArray,
    });
  };

  const [experienceEditing, setExperienceEditing] = useState(false);  
  const [educationEditing, setEducationEditing] = useState(false);

  // Add
  const addNewItem = (section) => {
    const newItem =
      section === "education"
        ? { school: "", degree: "", start: "", end: "", location: "", expanded: true }
        : { company: "", position: "", start: "", end: "", location: "", description: "", expanded: true };
  
    setFormData({
      ...formData,
      [section]: [...formData[section], newItem],
    });

    section === "education"
      ? setEducationEditing(true) 
      : setExperienceEditing(true);
  };
  
  // Remove 
  const removeItem = (section, index) => {
    const updatedArray = formData[section].filter((_, i) => i !== index);
  
    setFormData({
      ...formData,
      [section]: updatedArray,
    });

    section === "education"
      ? setEducationEditing(false) 
      : setExperienceEditing(false);
  };

  // Expand
  const toggleExpand = (section, index) => {
    const updatedArray = formData[section].map((item, i) =>
      i === index ? { ...item, expanded: !item.expanded } : item
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      [section]: updatedArray,
    }));
  };

  const saveItem = (section, isEditing) => {
    section === "education"
      ? setEducationEditing(isEditing) 
      : setExperienceEditing(isEditing);
  }


  return (
    <>
      <div className="app">
        <Form 
          formData={formData}
          onChange={handleChange}
          arrayChange={handleArrayChange}
          addNewItem={addNewItem}
          removeItem={removeItem}
          isEditing={[educationEditing, experienceEditing]}
          saveItem={saveItem}
          toggleExpand={toggleExpand}
        />
      </div>
      <div className="preview">
        <Preview formData={formData} />
      </div>
    </>
  )
}

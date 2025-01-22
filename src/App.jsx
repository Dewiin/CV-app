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
    "education": {
      "school": "",
      "degree": "",
      "start": "",
      "end": "",
      "location": ""
    },
    "experience": {
      "company": "",
      "position": "",
      "start": "",
      "end": "",
      "location": "",
      "description": ""
    }
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

  return (
    <>
      <div className="app">
        <Form 
          formData={formData}
          onChange={handleChange}
        />
      </div>
      <div className="preview">
        <Preview formData={formData} />
      </div>
    </>
  )
}

import "./styles/sidebar.css"
import { useState } from 'react'
import { Form } from "./components/Form.jsx"
import { Preview } from "./components/Preview.jsx"
import { Sidebar } from './components/Sidebar/Sidebar.jsx';

export function App() {
  const [formData, setFormData] = useState({
    "header": {
      "name": "Jane Smith",
      "email": "janesmith89@outlook.com",
      "phone": "123-456-7890",
      "address": "Boston, Massachusetts"
    },
    "education": [
      {
        "school": "Massachusetts Institute of Technology",
        "degree": "Bachelor of Science in Computer Science", 
        "start": "Jan 2022", 
        "end": "Present", 
        "location": "Cambridge, Massachusetts", 
        "expanded": false
      },
    ],
    "experience": [
      {
        "company": "Google", 
        "position": "Software Engineer", 
        "start": "04/14/2023", 
        "end": "Present", 
        "location": "Cambridge, Massachusetts", 
        "description": `Collaborated with cross-functional teams to design and implement scalable web applications serving millions of users globally. ` + 
                `Led the development of a machine learning pipeline that improved ad targeting accuracy by 15%, resulting in a $5M increase in annual revenue.
                Spearheaded the migration of legacy systems to a modern microservices architecture, reducing system downtime by 25%. Optimized search algorithms for Google Maps, improving location` +
                `retrieval speeds by 30% and enhancing user experience. Conducted code reviews and mentored junior engineers, fostering a culture of high-quality software development.`, 
        "expanded": false
      },
      {
        "company": "Microsoft", 
        "position": "Software Engineer", 
        "start": "06/20/2020", 
        "end": "03/31/2023", 
        "location": "Burlington, Massachusetts", 
        "description": `Designed and implemented scalable cloud-based solutions on Azure, improving system reliability and reducing downtime by 20%. ` + 
                `Developed and optimized microservices using .NET Core and C#, resulting in a 15% increase in application performance.
                Collaborated with cross-functional teams to develop new features for Microsoft Teams, enhancing user engagement by 25%.` +
                `Spearheaded the integration of machine learning models into Microsoft Power BI to automate anomaly detection in data visualizations, saving over 100 hours of manual analysis per quarter.`, 
        "expanded": false
      },
      {
        "company": "Apple", 
        "position": "Software Engineer", 
        "start": "10/01/2016", 
        "end": "06/14/2020", 
        "location": "Auburn, Massachusetts", 
        "description": `Spearheaded the development of advanced features for macOS and iOS, optimizing app performance and reducing latency by 25%, ensuring seamless user experiences. ` + 
                `Led the design and implementation of scalable APIs for iCloud, improving data synchronization speeds by 30% and enhancing multi-device user experience.
                Enhanced the security and encryption protocols for Apple Pay, contributing to a 20% reduction in fraud incidents while maintaining high transaction efficiency. ` +
                `Utilized Swift and Objective-C to deliver key improvements for Apple Music, increasing user retention by 15% through personalized recommendations and offline playback enhancements.`, 
        "expanded": false
      },
    ],
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
      i === index ? { ...item, expanded: !item.expanded } : { ...item, expanded: false}
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

  // Load
  const loadSample = () => {
    setFormData({
      "header": {
        "name": "Jane Smith",
        "email": "janesmith89@outlook.com",
        "phone": "123-456-7890",
        "address": "Boston, Massachusetts"
      },
      "education": [
        {
          "school": "Massachusetts Institute of Technology",
          "degree": "Bachelor of Science in Computer Science", 
          "start": "Jan 2022", 
          "end": "Present", 
          "location": "Cambridge, Massachusetts", 
          "expanded": false
        },
      ],
      "experience": [
        {
          "company": "Google", 
          "position": "Software Engineer", 
          "start": "04/14/2023", 
          "end": "Present", 
          "location": "Cambridge, Massachusetts", 
          "description": `Collaborated with cross-functional teams to design and implement scalable web applications serving millions of users globally. ` + 
                  `Led the development of a machine learning pipeline that improved ad targeting accuracy by 15%, resulting in a $5M increase in annual revenue.
                  Spearheaded the migration of legacy systems to a modern microservices architecture, reducing system downtime by 25%. Optimized search algorithms for Google Maps, improving location` +
                  `retrieval speeds by 30% and enhancing user experience. Conducted code reviews and mentored junior engineers, fostering a culture of high-quality software development.`, 
          "expanded": false
        },
        {
          "company": "Microsoft", 
          "position": "Software Engineer", 
          "start": "06/20/2020", 
          "end": "03/31/2023", 
          "location": "Burlington, Massachusetts", 
          "description": `Designed and implemented scalable cloud-based solutions on Azure, improving system reliability and reducing downtime by 20%. ` + 
                  `Developed and optimized microservices using .NET Core and C#, resulting in a 15% increase in application performance.
                  Collaborated with cross-functional teams to develop new features for Microsoft Teams, enhancing user engagement by 25%.` +
                  `Spearheaded the integration of machine learning models into Microsoft Power BI to automate anomaly detection in data visualizations, saving over 100 hours of manual analysis per quarter.`, 
          "expanded": false
        },
        {
          "company": "Apple", 
          "position": "Software Engineer", 
          "start": "10/01/2016", 
          "end": "06/14/2020", 
          "location": "Auburn, Massachusetts", 
          "description": `Spearheaded the development of advanced features for macOS and iOS, optimizing app performance and reducing latency by 25%, ensuring seamless user experiences. ` + 
                  `Led the design and implementation of scalable APIs for iCloud, improving data synchronization speeds by 30% and enhancing multi-device user experience.
                  Enhanced the security and encryption protocols for Apple Pay, contributing to a 20% reduction in fraud incidents while maintaining high transaction efficiency. ` +
                  `Utilized Swift and Objective-C to deliver key improvements for Apple Music, increasing user retention by 15% through personalized recommendations and offline playback enhancements.`, 
          "expanded": false
        },
      ],
    });
  }

  const clearResume = () => {
    setFormData({
      "header": {
          "name": "",
          "email": "",
          "phone": "",
          "address": ""
      },
      "education": [],
      "experience": [],
    });
  }

  // Return
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
      <div className="sidebar">
        <Sidebar loadSample={loadSample} clearResume={clearResume} />
      </div>
    </>
  )
}

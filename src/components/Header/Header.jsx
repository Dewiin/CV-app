import { Input } from "../Input.jsx";

export function Header( {formData, onChange} ) {
    return (
        <>
            <div className="personal-information-form form-section">
                <h1>Personal Details</h1>
                <Input 
                    label="Full Name" 
                    placeholder="Enter First and Last Name" 
                    value={formData.name} 
                    onChange={(e) => onChange(e, "header", "name")} 
                />

                <Input 
                    label="Email"  
                    placeholder="Enter Email" 
                    value={formData.email} 
                    onChange={(e) => onChange(e, "header", "email")} 
                />

                <Input 
                    label="Phone Number" 
                    placeholder="Enter Phone Number" 
                    value={formData.phone} 
                    onChange={(e) => onChange(e, "header", "phone")} 
                />

                <Input 
                    label="Address" 
                    placeholder="City, Country" 
                    value={formData.address} 
                    onChange={(e) => onChange(e, "header", "address")} 
                />
            </div>
        </>
    );
}

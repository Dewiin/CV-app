import { Input } from "../Input.jsx";

export function Header({onChange=null, name="", email="", phone="", address=""}) {
    return (
        <div className="personal-information-form form-section">
            <h1>Personal Details</h1>
            <Input label="Full Name" type="text" placeholder="Enter First and Last Name" onChange={onChange}>{name}</Input>

            <Input label="Email" type="text" placeholder="Enter Email" onChange={onChange}>{email}</Input>

            <Input label="Phone Number" type="text" placeholder="Enter Phone Number" onChange={onChange}>{phone}</Input>

            <Input label="Address" type="text" placeholder="City, Country" onChange={onChange}>{address}</Input>
        </div>
    );
}

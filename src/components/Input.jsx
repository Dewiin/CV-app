// import "../styles/input.css"

export function Input({label, type="text", placeholder=""}) {
    return (
        <div>
            <label>{label}</label>
            {type==="text" && <input type={type} placeholder={placeholder}></input>}
            {type==="textarea" && <textarea rows="4" cols="50" placeholder={placeholder}></textarea>}
        </div>
    );
}
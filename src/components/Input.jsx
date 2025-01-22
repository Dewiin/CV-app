export function Input({label, onChange=null, type="text", placeholder="", value=""}) {
    return (
        <div>
            <label>{label}</label>
            {type==="text" && 
                <input 
                    type={type} 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                ></input>
            }
            {type==="textarea" && 
                <textarea 
                    rows="4" 
                    cols="50" 
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                ></textarea>
            }
        </div>
    );
}
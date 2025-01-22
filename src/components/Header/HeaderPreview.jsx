// import { useState } from "react";

export function HeaderPreview({formData}) {
    return (
        <div className="header-preview">
            <h1>{formData.name || "Jane Smith"}</h1>
            <div className="basic-info">
                <div>
                    <img></img>
                    <span>{formData.email || "janesmith89@outlook.com"}</span>
                </div>
                <div>
                    <img></img>
                    <span>{formData.phone || "123-456-7890"} </span>
                </div>
                <div>
                    <img></img>
                    <span>{formData.address || "Los Angeles, California"}</span>
                </div>
            </div>
        </div>
    );
}
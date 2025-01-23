// import { useState } from "react";

export function HeaderPreview({formData}) {
    return (
        <div className="header-preview">
            <h1>{formData.name}</h1>
            <div className="basic-info">
                <div>
                    <img></img>
                    <span>{formData.email}</span>
                </div>
                <div>
                    <img></img>
                    <span>{formData.phone} </span>
                </div>
                <div>
                    <img></img>
                    <span>{formData.address}</span>
                </div>
            </div>
        </div>
    );
}
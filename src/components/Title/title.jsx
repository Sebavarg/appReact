import React from "react";

export const Title = (props) =>{
    return (
        <div className="container-fluid">
            <h1 className=" py-4">Hola Bienvenido a {props.greeting}</h1>
        </div>
        
    );
}

export default Title;
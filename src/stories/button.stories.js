import React from 'react';
import Button from '../components/Button'


export default {
    title: "Button",
    component: Button    
}

export const BtnLg = () => (
    <Button
        value={"BUTTON Large"}
        style={{padding: "10px 100px", backgroundColor:"blue" }}
        onClick={() => alert("Click me")}

    />
)
export const BtnMd = () => (
    <Button
        value={"BUTTON Medium"}
        style={{padding: "10px 50px", backgroundColor:"skyblue" }}
        onClick={() => alert("Click me BUTTON Medium")}

    />
)
export const Small = () => (
    <Button
        value={"BUTTON Small"}
        style={{padding: "10px 5px", backgroundColor:"green" }}
        onClick={() => alert("Click me BUTTON Small")}

    />
)
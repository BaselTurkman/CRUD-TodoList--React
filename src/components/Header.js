import React from "react";
import "./css/Header.css";

export const Header = () =>{
    return(
        <header className="todo-header">
            <h1 className="todo-title">My To-Do List</h1>
            <p className="todo-subtitle">Stay organized and productive!</p>
        </header>
    )
}
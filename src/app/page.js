"use client";

import Link from "next/link";
import {ToDoList} from "./component/ToDoList"


export default function Home() {

    return (
        <div className="container mx-auto text-white text-xl">
            <ToDoList />
        </div>
    );
}
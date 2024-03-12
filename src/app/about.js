import "./globals.css";
import React from 'react';
import Link from 'next/link';

export default function About(){
    return(
        <div>
            <div className="container mx-auto lg grid grid-cols-4">
                <h1>Box1</h1>
                <h1>Box2</h1>
                <h1>Box3</h1>
                <h1>Box4</h1>
            </div>
            <Link href="/">
                <p>Go to Other Page</p>
            </Link>
        </div>
    )
}
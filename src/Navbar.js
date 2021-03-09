import React from 'react'
import './index.css';

export default function Navbar() {

    return (
        <div className="flex bg-biru-fuki">
            <nav className="flex p-4 items-center w-full justify-between">
                <div className="float-left md:pl-10">
                    <a href="/" className="text-white text-xl font-DMSans">Matkulku</a>
                </div>
                <div className="rounded-full bg-white float-right mr-10 pr-6">
                    <h2 className="text-biru-fuki p-2 pl-6 hidden md:flex font-DMSans">+ Tambah Matkul</h2>
                </div>
                <div className="rounded-full h-10 w-10 bg-white flex items-center justify-center md:hidden mr-2">
                    <h2 className="text-biru-fuki text-xl font-bold text-center pb-1">+</h2>
                </div>
            </nav>
        </div>
    )
}

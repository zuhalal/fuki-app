import React, { Component } from 'react'
import Jadwal from './Jadwal'

export default class Formulir extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            nama : "",
            dosen : "",
            sks : 0,
            deskripsi : "",
            tugas : "Tidak ada Tugas",
            semester : "Genap",
            tahunAjar : "2020/2021"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = (event) => {
        this.setState({

            [event.target.name] : event.target.value

        })
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log('data:', this.state)
        return (
            <Jadwal
                nama={this.props.nama}
                dosen={this.props.dosen}
                sks={this.props.sks}
                deskripsi={this.props.deskripsi}
                tahunAjar={this.props.tahunAjar}
            />)
    }

    render() {
        return (
        <div className="formulir-fuki md:w-1/2 w-full flex flex-col items-start md:pl-36 pl-8 pt-16">
            <div className="formulir-title mb-7">
                <h2 className="text-hijau-fuki text-lg font-bold">Tambah Mata Kuliah</h2>
            </div>  
            <form className="flex flex-col gap-5" onSubmit={this.handleSubmit}>
                    <label>
                        <p className="flex items-start">Nama Mata Kuliah</p>
                        <input type="text" name="nama" required className="border-2 rounded-md w-80  h-8 border-black border-opacity-60 bg-putih-fuki " value={this.props.nama} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p className="flex items-start">Dosen</p> 
                        <input type="text" name="dosen" required className="border-2 rounded-md w-80  h-8 border-black border-opacity-60 bg-putih-fuki " value={this.props.dosen} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p className="flex items-start">Jumlah SKS</p>
                        <input type="number" name="sks" required className="border-2 rounded-md w-80  h-8 border-black border-opacity-60 bg-putih-fuki " value={this.props.sks} onChange={this.handleChange}/>
                    </label>
                    <label>
                        <p className="flex items-start">Deskripsi</p>
                        <textarea type="text" name="deskripsi" required className="border-2 rounded-md w-80  h-24 border-black border-opacity-60 bg-putih-fuki " value={this.props.deskripsi} onChange={this.handleChange}></textarea>
                    </label>
                    <label>
                        <p className="flex items-start">Semester</p>
                        <select className="border-2 rounded-md w-80  h-8 border-black border-opacity-60 bg-putih-fuki " required value={this.props.semester} onChange={this.handleChange} name="semester">
                            <option value={this.props.semester}>Genap</option>
                            <option value={this.props.semester}>Ganjil</option>
                        </select>
                    </label>
                    <label >
                        <p className="flex items-start">Tahun Ajar</p>
                        <select className="border-2  rounded-md w-80  ml20 h-8 border-black border-opacity-60 bg-putih-fuki " required  onChange={this.handleChange} name="tahunAjar">
                            <option value={this.props.tahunAjar} >2020/2021</option>
                            <option value={this.props.tahunAjar} >2021/2022</option>
                        </select>
                    </label>
                    <div className="text-center flex items-center justify-center ml-8 ">
                        <button className="bg-biru-fuki p-2 text-white mt-6 rounded w-28 mb-20 md:ml-6 md:mr-12 mr-8" value="submit">Tambah</button>
                    </div>
            </form>
        </div>
        )
    }
}
    
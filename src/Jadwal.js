import React from 'react'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Jadwal({nama, sks, dosen, tugas }) {
    return (
        <div className="jadwal  mt-10 md:mt-16 md:mr-40  md:pr-auto flex mx-3 md:mx-auto">
            <div className="detail-jadwal bg-putih-fuki shadow-2xl md:p-8 p-6 flex flex-col items-start ">
                <div className="jadwal-title mb-4">
                    <h2 className="text-biru-fuki font-bold">{nama} <span className="font-normal">({sks} SKS)</span></h2>
                </div>
                <div className="jadwal-detail flex flex-col items-start gap-2 w-full">
                    <div className="dosen w-full flex">
                        <div className="md:w-1/6 w-1/3 flex ">
                            <h3 className="font-bold">Dosen</h3>
                        </div>
                        <div className="md:w-5/6 flex w-2/3 ">
                            <span className=" ">{dosen}</span>
                        </div>
                    </div>
                    <div className="w-full flex ">
                        <div className="md:w-1/6 w-1/3 flex justify-start">
                            <h3 className=" font-bold">Deskripsi</h3>
                        </div>
                        <div className="md:w-5/6 w-2/3 flex">
                            <span className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id elit eu nibh lobortis pellentesque. Mauris mollis lorem vel lacus dictum, ut tempus nunc ultricies. Morbi venenatis magna a justo porta sagittis vel id dolor. Vivamus eget dictum dui, eu rutrum dolor. Suspendisse commodo pulvinar lacus. Pellentesque pretium tempor quam, ac ultricies est rutrum vel. Cras vel fermentum enim, sit amet luctus justo. Curabitur dignissim odio vel tortor pulvinar gravida eget ac felis.</span>
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="md:w-1/6 w-1/3 flex">
                            <h3 className="font-bold">Semester</h3>
                        </div>
                        <div className="md:w-5/6 w-2/3 flex">Genap 2020/2021</div> 
                    </div>
                    <div className="w-full flex gap-5">
                        <div className="md:w-1/6 w-1/3 ">
                            <h3 className="font-bold flex">Tugas</h3>
                        </div>                                
                        <ul className="md:w-5/6 w-2/3 flex flex-col items-start">
                        {
                            tugas.map((t) => {
                            return <li className="list-disc">{t}</li>
                            })
                        }                                
                        </ul>
                    </div>
                </div>
                <div className="tambah-tugas-title w-full md:mt-6 flex mb-1 mt-3">
                    <h2 className="text-hijau-fuki font-bold">Tambah Tugas</h2>
                </div>
                <form className="tambah-tugas flex flex-col gap-3 w-full">
                    <div className="nama-tugas flex justify-between ">
                            <div className="flex flex-col items-start">
                                <p className="">Nama Tugas</p>
                                <input type="text" className="border-2  md:w-56 w-36 md:mr-0 mr-2 rounded bg-putih-fuki"></input>
                            </div>
                            <div className="flex flex-col  items-start">
                                <p className="">Deadline</p>
                                <div className="relative flex justify-end">
                                    <span className="absolute px-2"><FontAwesomeIcon icon={faCalendar} /></span>
                                    <input type="text" className="border-2 md:w-56 w-36 rounded bg-putih-fuki"></input>
                                </div>
                            </div>
                        </div>  
                    <div className="tambah-tugas-button ">
                        <button type="submit" className="bg-hijau-fuki text-white px-4 py-1 rounded-md md:mr-0 mr-5 md:mb-0 mb-8 ">Tambah</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

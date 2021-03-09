import './App.css';
import FooterFuki from './Footer';
import Formulir from './Formulir';
import Jadwal from './Jadwal';
import Navbar from './Navbar';
import React from 'react';

const dataJadwal = {
  nama : 'Dasar-Dasar Pemograman 2',
  sks : '4',
  dosen : 'Altof',
  tugas : [ 'TP1 - Deadline: 2021-03-20',
  'TP2 - Deadline: 2021-04-05']
                
}

const dataJadwal2 = {
  nama : 'Struktur Data dan Algoritma',
  sks : '4',
  dosen : 'Mahdia Aliyya, S.ITF',
  tugas : [ 'TP 1 - Deadline: 2021-03-20',
  'Demo Lab 2 - Deadline: 2021-04-05']
                
}

const dataJadwal3 = {
  nama : 'Matematika Diskrit 2',
  sks : '3',
  dosen : 'Fahdii Ajmalal Fikrie, S.ITF',
  tugas : [ 'Tidak ada tugas']
                
}


function App() {
  return (
    <React.Fragment>
      <div className="App w-full h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-col lg:flex-row w-full font-DMSans">
            
            <Formulir />
            
              <div className="md:block mb-28 flex-row lg:flex-row md:w-1/2 w-full ">
              <Jadwal {...dataJadwal}/>
              <Jadwal {...dataJadwal2}/> 
              <Jadwal {...dataJadwal3}/>
              </div>
          </div>
          <footer>
            <FooterFuki />
          </footer>
        </div>
      </React.Fragment>
  )
}

export default App;

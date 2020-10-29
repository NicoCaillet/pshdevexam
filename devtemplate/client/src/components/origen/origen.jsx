import React,{useEffect,useState} from 'react';
import s from './origen.module.css'
import uno from '../../fotos/2.png'
import dos from '../../fotos/2.jpg'
import tres from '../../fotos/3.png'
import { Component } from "react"
import axios from 'axios'


export default function Origen() {

    const [playersss, setPlayersss] = useState([]);
    


    var csvContent = "data:text/csv;charset=utf-8,"

    let nico = function(){ 
        let random = Math.floor(Math.random() * (10 - 0)) + 0; 
        fetch(`https://randomuser.me/api/?results=${random}`)
        .then(res => res.json())
        .then(data => { 
            const players = []
            data.results.map(player => {
                console.log(player)
                players.push({
                    name: player.name.first + " " + player.name.last,
                    image: player.picture.thumbnail
                })
                console.log("arreglo de player: " + " " + {players} )
            })
            
            axios.post("http://localhost:3005/players", {players})
            .then(player => {
                console.log("Se agrego de manera correcta")
            })
            .catch(player => {
                console.log("No se agrego correctamente")
            })
                
            
        })
        
        axios.get("http://localhost:3005/players")
        .then(player => {
            console.log(player.data)
            setPlayersss(playersss.concat(player.data))
        })
        .catch(player => {
            console.log("No hizo el get correctamente")
        })
        
     }


useEffect(() =>{
    nico()
    setInterval(nico, 300000);
  },[])
  


return(
    <div className={s.container}>
        
        <div className={s.botones }>
        <div className={s.leader}>
            <p> LeaderBoard: </p>
        </div>
        {
            playersss && playersss.map((player, index) => 
            { 
                 
                
                csvContent+=`${index + 1}, ${player.name}, ${player.score}` + "\r\n";

                console.log(csvContent)

            return (<div className={s.unicos}>
                <img className={s.fotos} src={player.image} alt="image"/>
                <button className={s.boton }> {index + 1 } . Nickname: {player.name} <br/> Score: {player.score} </button>
            </div> )
            })  
        }
        
        </div>

        <div>
            <button className={s.csv} onClick={() => {var encodedUri = encodeURI(csvContent) 
                window.open(encodedUri)}}> 
                Descargar CSV
            </button>
            <p className={s.parrafo}> Developed by: Nicolas Caillet-Bois</p>
        </div>
       
        
    </div>
)}


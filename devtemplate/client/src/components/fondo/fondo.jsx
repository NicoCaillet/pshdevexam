import React from 'react'
import s from './fondo.module.css'
import fondo from '../../fotos/fondo.jpg'
export default function Fondo() {


    return(
        <div className={s.fondo}>
            <img src={fondo} alt="sackboy"/>
        </div>




    )
}
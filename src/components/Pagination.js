import React from 'react';
import direita from '../assets/img/direita.png'
import esquerda from '../assets/img/esquerda.png'


const Pagination = (props) => {
const {page, totalPages, onLeftClick, onRightClick} = props
return(

    <div className='pagination-container'>
       <button className='btn' onClick={onLeftClick}><img src={esquerda} className='img-btn' alt="" /></button>

       <div className='number'><b>{page} de {totalPages}</b></div>

       <button className='btn' onClick={onRightClick}><img src={direita} className='img-btn' alt="" /></button>
    </div>
)

} 

export default Pagination
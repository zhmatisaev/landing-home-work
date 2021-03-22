import React from 'react'
import css from './blockTen.module.css'

export const BlockTen = ({z,t}) => {
    return <div className={css.allText}>
       <h3 className={css.zoga}>{z}</h3>
       <p className={css.textTen}>{t}</p>
    </div>
}
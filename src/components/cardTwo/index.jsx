import React from 'react'
import css from './cardTwo.module.css'

export const CardTwoo = ({theme,text}) => {
    return (
        <div className={css.ttt}>
            <h2 className={css.Theme}> {theme}</h2>
            <p className={css.textOne}>{text}</p>
        </div>
    )
}
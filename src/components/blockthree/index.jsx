
import React from 'react' 
import css from './blockSix.module.css'

 export  const Block = ({title,bg}) => {
         return <div style = {{background: bg}} className={css.bloks}>
             <hr/>
             <h3 className={css.cardItems}>{title}</h3>
             


         </div>
    }

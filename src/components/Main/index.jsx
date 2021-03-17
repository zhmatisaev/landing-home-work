import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'
import { Block } from '../blockSix'


export const MainPage = () => {

    const data = [
        {bg: "#FFE2DE",title: 'Weight Lifting'},
        {bg: "#C4E769",title: "Running  & Spinning"},
        {bg: "#62D0DF",title: "Pumping Iron"},
        {bg: "#0052C1",title: "Pumping Iron"}
    ];

    
       let dataElem =  data.map(item =>  <HelpCard bg={item.bg} title={item.title}/>);

       

       let CardContent = [
        {bg:'#22356F', title: 'Physical Health'},
        {bg:'#0052C1', title: 'Mental Health'},
        {bg:'#666', title: 'Nutrition'},
        {bg:'#62D0DF', title: 'Gymnastics'},
        {bg:'#DEE1FF', title: 'Crossfit'},
        {bg:'#8F00FF', title: 'Aerobics'},
    ]

    let blockCard = CardContent.map(item => <Block bg={item.bg} titlt={item.title}/>)


    

    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p>Thrivetalk</p>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you with a range of
                    issues including relationships, sex, PTSD, depression, social
              anxiety, or even just caring for yourself more.</p>
                    <div>
                        <button>WHO AM I</button>
                        <button>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
                    <img src={mainPic} alt="" />
                </div>
            </div>
        

        <div className={css.text}>
            <h5>WE CAN HELP YOU WITH</h5>

        </div>

            <div className={css.blockFour}>
                
                {dataElem}
            </div>

            <div className={css.blockStyle}>
            {blockCard}
            
            </div>
        

    </div>


    </div>
}
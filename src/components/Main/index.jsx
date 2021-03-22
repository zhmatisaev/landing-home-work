import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/bg.png'
import { HelpCard } from '../HelpCard'
import { Block } from '../blockthree'
import {CardTwoo} from '../cardTwo'
import photo from  '../../images/chris.png'
import mainPhoto from '../../images/linkedin.png'
import mainCharles from '../../images/charles.png'


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
       
    ]

    let blockCard = CardContent.map(el => <Block bg={el.bg} title={el.title}/>)


    let three =  [
        {bg:'#62D0DF', title: 'Gymnastics'},
        {bg:'#DEE1FF', title: 'Crossfit'},
        {bg:'#8F00FF', title: 'Aerobics'},
    ]

    let blockCard2 = three.map(el => <Block bg={el.bg} title={el.title}/>)





    let cardtext  = [ 
                {theme: 'Nutritional Plans',
                    text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                },
                {theme: 'Weight Loss',
                    text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                },
                {theme: 'Mental Peace',
                    text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
                },
               
            ];



         let cardRen = cardtext.map(e => <CardTwoo theme={e.theme} text={e.text}/>)

         let cardtext2 =[
            {theme: 'Home Training',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            },
            {theme: 'Work/Life Balance',
                text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
            },
            {theme: 'Cardio',
            text: 'Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        },
            ]
            let cardRen2 = cardtext2.map(e => <CardTwoo theme={e.theme} text={e.text}/>)
    

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
                    <h1 className={css.zagolovok}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p className={css.desc}>Our highly talented therapists can help you with a range of
                    issues including relationships, sex, PTSD, depression, social
              anxiety, or even just caring for yourself more.</p>
                    <div>
                        <button className={css.btn}>WHO AM I</button>
                        <button className={css.what}>WHAT DO I DO</button>
                    </div>
                </div>
           



                <div>
                    <img src={mainPic} alt="" />
                </div>
            </div>

            <div className={css.secondBlock}>
         
                <div className={css.someText}>
                    <h2>Why Thrive?</h2>
                Want to improve your well-being from the comfort of your own couch? 
                Are you having trouble finding the right therapist?  Here at ThriveTalk, 
                our licensed therapists provide the same quality care you would get in office
                 from anywhere you can access your laptop or mobile phone. Become your best self 
                 with ThriveTalk.  Start therapy now with a licensed therapist!
                </div>
                <div>
                    <img src={photo} className={css.photoChriss}/>
                </div>
            </div>

            <div className={css.contentText}>

                <div className={css.about}>
                ABOUT US
                </div>
                <div className={css.twoText}>
                We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.


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

        <div className={css.blockStyle}>
            {blockCard2}
            
        </div>
        
  
    
        <div className={css.descript} > 
            {cardRen}
        </div>

        <div className={css.descript} > 
            {cardRen2}
        </div>

        <div className={css.block_Five}>
            <div>
                <img src={mainPhoto} alt=""/>
            </div>
            <h2 className={css.youshould}>YOU SHOULD ALSO KNOW</h2> <br/>
            <div className={css.blockIn}>
            MDD affects more than 16.1 million American adults, or about 6.7%of the U.S. population age 18 and older in a given year. We at ThriveTalk can help you.    
            </div>
            {/* <p>GET HELP NOW</p> */}
        </div>

        <div  className={css.blokc_six}>
            <div>
                <p>CONTACT US</p>
                <div className={css.Ready}>Ready. Set. Smile</div>
                <div className={css.Take}>Take the free online assessment to see if you are a candidate and get started on your journey.</div>
            </div>
            <div>
                <img className={css.mainChar} src={mainCharles} alt=""/>
            </div>
        </div>
        







        

    </div>


    </div>
}
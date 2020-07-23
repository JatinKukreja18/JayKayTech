import classes from './banner.module.scss';
import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { Title, Text } from '../atoms';
import { RichText, Date } from 'prismic-reactjs'

function Banner(props) {
    const [scrollLevel,setScrollLevel] = useState(0)
    useEffect(()=>{
        const a = window.addEventListener('scroll',function(){
            if(document.scrollingElement.scrollTop > 400){
               setScrollLevel(2);
            }
            else if(document.scrollingElement.scrollTop > 50){
                setScrollLevel(1);
            }
            else{
               setScrollLevel(0);
            }
        })
        if(document.scrollingElement.scrollTop > 400){
            setScrollLevel(2);
         }
         else if(document.scrollingElement.scrollTop > 50){
             setScrollLevel(1);
         }
         else{
            setScrollLevel(0);
         }
        return ()=>{
            console.log(a);
        }
    },[])
    return (
        <div className={classes.jkBannerContainer  + " "+ (scrollLevel===1? classes.scrolled1:scrollLevel===2?classes.scrolled2:'')}>
            <div className="container">
                <h1 className={classes.jkBannerHeading}>
                    Hello
                </h1>
                <div className="row flex flex-ac">
                    <div className={classes.bio + ' col-md-5'}>
                        <Title tag="h3" spacing="md" uppercase="true">
                            {RichText.asText(props.data.data.bio_heading)}
                        </Title>
                        <p>{RichText.asText(props.data.data.bio_description)}</p>
                    </div>
                    <div className={classes.picture + ' col-md-7'}>
                        <img src={props.data.data.profile_picture?.url} alt="avatar image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

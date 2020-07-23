import classes from './experience.module.scss';
import React, { useEffect, useState } from 'react';
// import { withRouter } from 'react-router-dom';
import { Title, Text } from '../atoms';
import { RichText, Date as ParsedDate } from 'prismic-reactjs'

function Experience(props) {
    const [activeExp,setActiveExp]= useState(0);
    const [linesStatus,setLinesStatus] = useState([]);
    useEffect(()=>{
            const allItems = props.items
            let arr = []
            for (let i = 0; i < allItems.length; i++) {
                arr.push({status:0})
            }
            setLinesStatus(arr);
            let index = allItems.length -1;
            const transitionInterval = setInterval(() => {
                if(index < 0){
                    clearInterval(transitionInterval)
                }else{
                    arr[index].status = 1;
                    setLinesStatus([...arr])
                    index = index - 1;
                }
            }, 700);
            return ()=>{
                clearInterval(transitionInterval)
            }
    },[])
    return (
        <div className={`jk-container-full start ${classes.experienceContainer} container`}>
                
                <div className="jk-watermark-container bottom-right">
                    <h1 className="jk-watermark">
                        {RichText.asText(props.primary.experience_title)}
                    </h1>
                </div>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <div className={classes.experienceList}>
                        {
                            props.items.map((v,i)=>{
                                return(
                                <div 
                                    key={'work-'+i} 
                                    className={`    
                                                ${linesStatus.length && linesStatus[i].status === 1  ? classes.slide : ''} 
                                                ${classes.experienceItem} 
                                                ${activeExp===i?classes.active:''}
                                            `} 
                                    onClick={()=>setActiveExp(i)}>
                                        <span className={classes.line}></span>
                                        <div className={classes.date}>
                                            <Title tag="h3" theme={`${activeExp===i? 'red':'dark'}`} >
                                                {RichText.asText(v.company)}
                                            </Title>
                                            {v.end_date}
                                            -
                                            {v.start_date}
                                        </div>
                                </div>
                                )
                            })
                        }
                    </div>
                    </div>
                    <div className="col-md-4 offset-md-3">
                        <div className={classes.experienceListDetail}>
                            {
                                props.items.map((v,i)=>{
                                    return(
                                    <div key={'work-'+i} className={`${classes.experienceItem} ${activeExp===i?classes.active:''}` } onClick={()=>setActiveExp(i)}>
                                        <div className={classes.content}>
                                            <div className={classes.extraContent}>
                                                <Text theme="gray">
                                                    {RichText.asText(v.role)}
                                                </Text>
                                                {RichText.asText(v.description)}
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="row flex flex-ac">
                    <div className={classes.bio + ' col-md-5'}>
                        <Title tag="h3" spacing="md" uppercase="true">
                            {RichText.asText(props.data.data.bio_heading)}
                        </Title>
                        <p>{RichText.asText(props.data.data.bio_description)}</p>
                    </div>
                    <div className={classes.picture + ' col-md-7'}>
                        <img src={props.data.data.profile_picture?.url} alt="avatar image" />
                    </div>
                </div> */}
        </div>
    );
}

export default Experience;

import React from 'react'
import Prismic from 'prismic-javascript'
import { RichText, Date } from 'prismic-reactjs'
import { client, linkResolver, hrefResolver } from '../prismic-configuration'
import Link from 'next/link'
import { Title } from "../components/atoms";
import Banner from "../components/banner";
import Experience from '../components/experience'
const BlogHome = props => (
  <div>
    <div  style={{height:'calc(100vh + 400px)',position:'relative'}}>

    <Banner data={props.bio}/>
    </div>
    {props.bio.data.body && props.bio.data.body.map((v,i)=>{
      
      if(v.slice_type === 'work_experience'){
       return <Experience key={'exp-'+i} primary={v.primary} items={v.items}/>
      }else{
          return <p>others</p>
        }
     
      
      })
    }
  
  {console.log(props)}
  </div>
)

BlogHome.getInitialProps =  async context => {
  var ids = [];

  const bio = await client.getSingle('bio');
  bio.data.body[1].items.map(v=>{
    console.log(v.project_list.id)
    ids.push(v.project_list.id)
  })
  console.log(ids);
  const projects = await client.getByIDs(ids,{ fetch : ['projects.banner_image', 'projects.project_title'] })
  if (context.res) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  }

  return { bio , projects}
}

export default BlogHome
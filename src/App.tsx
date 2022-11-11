import React from 'react';
import {Nav,Banner,Banner_footer,Info,ExploreSearch,Cards} from "./components/home/main"
import love from "./components/assets/icons/love.svg"
import manbinary from "./components/assets/icons/manbinary.svg"
import aichip from "./components/assets/icons/aichip.svg"
import carddata from "./components/carddata"
import {Routes,Route,HashRouter} from "react-router-dom"
import Event from "./components/event/main"
import Create from "./components/create/main"
import {nanoid} from  "nanoid"
import Edit from "./components/edit/main"

import dataimg from "./components/assets/cardimage/data.png"

export function App() {
  const [pridata,setpridata]=React.useState(carddata)
  
  const [data,setdata]=React.useState(pridata)

  const [addformdata,setformdata]=React.useState({
    "FormCreateName":'',
    "FormCreateStartDate":'',
    "FormCreateEndDate":'',
    "FormCreateDesc":'',
    "FormCreateImage":'',
    "FormCreateDiff":''
  })


  function createchange(event:any){
    event.preventDefault()
    const feildName=event.target.getAttribute("name")
    let feildValue=event.target.value

    const newFormData:any={...addformdata}
    newFormData[feildName]=feildValue;

    setformdata(newFormData)
    
  }
  
  function editsubmit(formdata:any){
    formdata.start=new Date(formdata.start)
    formdata.end=new Date(formdata.end)
    const searchcard=pridata.filter((att)=>{
      if(att.id!=formdata.id){
        return att
      }
    })
    const newdata=[...searchcard,formdata]
    console.log(newdata)
    setpridata(newdata)
    setdata(newdata)
  }


  function createsubmit(){
    const newaddformdata={
      "id":nanoid(),
      "title":addformdata.FormCreateName,
      "start":new Date(addformdata.FormCreateStartDate),
      "end":new Date(addformdata.FormCreateEndDate),
      "desc":addformdata.FormCreateDesc,
      "img":dataimg,
      "difficulty":addformdata.FormCreateDiff
    }
    const newdata:any=[...data,newaddformdata]
    setpridata(newdata)
    setdata(newdata)
  }


  function del(id:any){
    const searchcard=pridata.filter((att)=>{
      if(att.id!=id){
        return att
      }
    })
    const newdata=searchcard
    setpridata(newdata)
    setdata(newdata)
  }
  function search(searchContext:any){
    const searchcard=pridata.filter((att:any)=>{
      if (att.title.toLowerCase().includes(searchContext.toLowerCase())){
        return att
      }
      else if(searchContext===""){
        return att
        
      }
    })
    setdata(searchcard)
  }
  
  const cards = data.map(item=>{
    let vari:any=item.title.split(" ");
    vari='/'+ vari.join("")
    return(
      <Cards img={item.img} title={item.title} link={vari} start={item.start} end={item.end} />
    )
  })
  const page = data.map((item)=>{
    let vari:any=(item.title).split(" ");
    vari=vari.join("")

    return(
      <Route path={vari} element={
        <div className='d-flex flex-column'>
          <Event id={item.id} title={item.title} difficulty={item.difficulty} desc={item.desc} Delete={del} start={item.start} end={item.end} img={item.img} editsubmit={editsubmit}/>
        </div>
      }/>
    )
  })

  return (
    <HashRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={
           <div className='d-flex flex-column'>
           <Banner/>
           <div className='container-fluid' style={{backgroundColor:"#002b3a"}}>
               <div className='row m-5 d-flex flex-wrap justify-content-center'>
                 <Banner_footer
                   img={aichip}
                   title="100K+"
                   footer="AI model submissions"
                 />
                 <Banner_footer
                   img={manbinary}
                   title="50K+"
                   footer="Data Scientists"
                 />
                 <Banner_footer
                   img={love}
                   title="100+"
                   footer="AI Challenges hosted"
                 />
               </div>
           </div>
           <Info/>
           <ExploreSearch change={search}/>
           <div className='container-fluid pb-5' style={{backgroundColor:"#013045"}}>
              <div className='row gap-5 mt-5 d-flex justify-content-center'>
                  {cards}
              </div>
            </div>
         </div>
      }/>
      {page}
      <Route path='/create' element={<Create change={createchange} submit={createsubmit}/>}/>
      <Route path="/edit" element={<Edit/>} />
    </Routes>
    </HashRouter>
  );
}



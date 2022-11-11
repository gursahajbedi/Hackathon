import "./main.css"
import React from "react"
import logo_img from "../assets/logo.png"
import img_banner from "../assets/icons/rocket.svg"
import nb from "../assets/icons/nb.svg"
import people from "../assets/icons/people.svg"
import robot from "../assets/icons/Robot.svg"
import card from "../assets/icons/id.svg"
import grad from "../assets/cardimage/grads.png"
import participate from "../assets/participate.svg"

import Card from "react-bootstrap/Card"
import { Button, Container, FormCheck } from "react-bootstrap"
import Countdown from "react-countdown"
import {Link} from "react-router-dom"

import {Dropdown,Form} from "react-bootstrap"





export function Nav(){
    return(
        <Link to="/">
        <div className="container-fluid d-flex flex-row py-2 ps-5" style={{backgroundColor:"white"}}>
            <img src={logo_img} id="logo"></img>
        </div>
        </Link>
    )
}

export function Banner(){
    return(
        <div className="p-5 container-fluid d-flex flex-row" id="banner">
            <div className="m-5 container" id="b-text-media">
                <div className="container">
                    <p className="display-6 fw-bold ps-5 py-1 mb-4" id="inner_head">Accelerate Innovation <br/> with Global AI Challenges</p>
                    <p className="fw-light fs-5 ms-5 lh-base" id="inner_text">AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing yout to foster learning through competitions.</p>
                    <Link to="/create">
                    <button className="btn py-1 btn-light text-primary ms-5 mt-4 rounded rounded-4">
                        <h1 className="fs-5 pt-2 fw-bold" id="btn_create">Create Challenge</h1>
                    </button>
                    </Link>
                </div>
            </div>
            <div>
                <img className="container img-responsive m-5 ms-0 my-4 " id="banner_img" src={img_banner}></img>
            </div>
        </div>
    )
}

export function Banner_footer(props:any){
    return(
        <div className="col-md-4 d-flex flex-row justify-content-center border-start border-end text-light px-3">
            <div className="mt-1 rounded-3 me-4"><img src={props.img} id="img_footer"></img></div>
            <div className="d-flex flex-column">
                <div className="fs-5 fw-bold">{props.title}</div>
                <div className="fs-6 fw-light">{props.footer}</div>
            </div>
        </div>
    )
}
export function Info_content(prop:any){
    return(
        <div style={{backgroundColor:"#f9f9fc"}} className="container card rounded-3 d-flex flex-column text-start border-0 py-5 px-4 m-4 w-50">
                <div className="mb-4 mt-2"><img src={prop.img}></img></div>
                <div className="h4 fw-bold mb-4">{prop.title}</div>
                <div className="h6 fw-light">{prop.subtitle}</div>
        </div>
    )
}

export function Info(){
    return(
        <div className="container-fluid text-center p-5 d-flex flex-column" style={{backgroundColor:"white"}}>
            <p className="h3 fw-bold p-2 pb-5">Why Participate In <span style={{color:"#45934c"}}>AI Challenges?</span></p>
            <div className="d-flex justify-content-center">
                <Info_content
                    img={nb}
                    title="Prove Your Skills"
                    subtitle="Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions."
                />
                <Info_content
                    img={people}
                    title="Learn From Community"
                    subtitle="One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them."
                />
            </div>
            <div className="d-flex justify-content-center">
                <Info_content
                    img={robot}
                    title="Challenge yourself"
                    subtitle="There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bouce back harder."
                />
                <Info_content
                    img={card}
                    title="Earn Recognition"
                    subtitle="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards."
                />
            </div>
        </div>
    )
}


export function ExploreSearch(prop:any){

    return(
        <div>
        <div className="container-fluid d-flex flex-column text-center p-5" style={{backgroundColor:"#002a3b"}}>
            <div className="h3 fw-bold text-light">Explore Challenges</div>
            <div className="container d-flex flex-row mt-5" id="search">
                <input type="search" className="form-control rounded-3 me-4" onChange={(e)=>prop.change(e.target.value)}/> 
            </div>
        </div>
        </div>


        
        
    )
}
export function Cards(prop:any){
    const timenow=new Date()
    let textContent=null
    if (prop.start<timenow && prop.end>timenow){
        textContent="Active"
    }
    if(prop.start>timenow && prop.end>timenow){
        textContent="Upcoming"
    }
    if(prop.start<timenow && prop.end<timenow){
        textContent="Past"
    }


    const statestyle={width:"fit-content",fontSize:"0.8rem",backgroundColor:"white"}
    return(
        <Card className="rounded-4 border-0 col-sm-5 col-lg-3 p-0" id="card">
                <Card.Img src={prop.img}></Card.Img>
                <Card.Body className="container d-flex flex-column justify-content-center">
                    <Card.Text className="container rounded-4" style={statestyle}>{textContent}</Card.Text>
                    <Card.Text className="container fw-bold text-center">{prop.title}</Card.Text>
                    <Card.Text className="container rounded-4" style={{fontSize:"1rem",width:"fit-content"}}>{textContent==="Active"?<span>Ends In</span>:textContent==="Upcoming"?<span>Starts In</span>:<span>Ended On</span>}</Card.Text>
                    <Card.Text className="container text-center pb-3">
                        {textContent==="Active"?
                        <Countdown date={prop.end} renderer={({days,hours,minutes,seconds})=>{
                            return(
                                <div className="">
                                <div className="row h3 fw-bold d-flex justify-content-center">
                                    <div className="col-sm-3">{days}</div>:
                                    <div className="col-sm-2">{hours}</div>:
                                    <div className="col-sm-2">{minutes}</div>:
                                    <div className="col-sm-3">{seconds}</div>
                                </div>
                                <div className="row d-flex fw-bold justify-content-center">
                                    <div className="col-sm-3">Days</div>
                                    <div className="col-sm-2">Hrs</div>
                                    <div className="col-sm-2">Min</div>
                                    <div className="col-sm-3">Secs</div>
                                </div>
                                </div>
                            )
                        }}></Countdown>
                        :
                        textContent==="Upcoming"?
                        <Countdown date={prop.start} renderer={({days,hours,minutes,seconds})=>{
                            return(
                                <div className="">
                                <div className="row h3 fw-bold d-flex justify-content-center">
                                    <div className="col-sm-3">{days}</div>:
                                    <div className="col-sm-2">{hours}</div>:
                                    <div className="col-sm-2">{minutes}</div>:
                                    <div className="col-sm-3">{seconds}</div>
                                </div>
                                <div className="row d-flex fw-bold justify-content-center">
                                    <div className="col-sm-3">Days</div>
                                    <div className="col-sm-2">Hrs</div>
                                    <div className="col-sm-2">Min</div>
                                    <div className="col-sm-3">Secs</div>
                                </div>
                                </div>
                            )
                        }}></Countdown>
                        :
                        <div className="my-3 h5 fw-bold">
                            {prop.end.toString()}
                        </div>
                        }
                    </Card.Text>
                    <Card.Text className="container text-center">
                        <Button className="p-0 rounded-3" variant="light">
                            <Link to={prop.link}><img src={participate}></img></Link>
                        </Button>
                    </Card.Text>

                </Card.Body>
        </Card>
    )
}
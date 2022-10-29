import {Link} from "react-router-dom"

export default function Event(prop:any){
    return(
        <div className="d-flex flex-column">
            <div className="container-fluid d-flex flex-column text-light" style={{backgroundColor:'#003145'}}>
                <div className="container d-flex flex-column no-wrap py-5">
                    <div className="rounded-3 my-4 p-2 px-5 text-dark fw-bold" style={{fontSize:"0.8rem",width:"fit-content",backgroundColor:"#fece5d"}}>Starts on 17th Jun'22 9:00 PM(Indian Standard Time)</div>
                    <div className="h1 fw-bold mb-4">{prop.title}</div>
                    <div className="mb-4 fs-5">Identify the class to which the butterfly belongs to</div>
                    {prop.difficulty==="Easy"?
                    <div className="bg-white text-dark p-2 px-4 d-flex rounded-3" style={{width:"fit-content"}}>
                        <div className="material-symbols-outlined pe-2">signal_cellular_1_bar</div>
                        <div className="fw-bold">{prop.difficulty}</div>
                    </div>
                    :
                    prop.difficulty==="Medium"?
                    <div className="bg-white text-dark p-2 px-4 d-flex rounded-3" style={{width:"fit-content"}}>
                        <div className="material-symbols-outlined pe-2">signal_cellular_3_bar</div>
                        <div className="fw-bold">{prop.difficulty}</div>
                    </div>
                    :
                    <div className="bg-white text-dark p-2 px-4 d-flex rounded-3" style={{width:"fit-content"}}>
                        <div className="material-symbols-outlined pe-2">signal_cellular_4_bar</div>
                        <div className="fw-bold">{prop.difficulty}</div>
                    </div>
                    }
                </div>
            </div>
            <div className="container-fluid shadow-sm bg-light text-dark">
                <div className="container my-3">
                    <div className="float-start p-2 px-3 fw-bold fs-5" style={{borderBottom:"6px solid green"}}>Overview</div>
                    <div className="float-end d-flex">
                        <div className="btn btn-success me-3" style={{width:"7rem"}}>Edit</div>
                        <Link to="/"><div className="btn btn-outline-danger" onClick={()=>prop.Delete(prop.id)} style={{width:"7rem"}}>Delete</div></Link>
                    </div>
                </div>
            </div>
            <div className="container p-5 ps-3 fs-4">
                {prop.desc}
            </div>
        </div>
    )
}
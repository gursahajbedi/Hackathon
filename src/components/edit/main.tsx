import React from "react"
import {Form,FormControl} from "react-bootstrap"
import {useLocation } from "react-router-dom"
import moment from "moment"


export default function Edit(){
    const prop=useLocation().state
    const [data,setdata]=React.useState({
        "id":prop.id,
        "difficulty":prop.diff,
        "desc":prop.desc,
        "title":prop.head,
        "start":prop.start,
        "end":prop.end,
        "img":prop.img
    })
    function change(event:any){
        event.preventDefault()
        const feildName=event.target.getAttribute("name")
        let feildValue=event.target.value

        const newFormData:any={...data}
        newFormData[feildName]=feildValue;

        setdata(newFormData)
    }
    return(
        <Form className="container-fluid" onSubmit={(e)=>{
            e.preventDefault()
            alert("Succesfully Updated")
            console.log(data)
            prop.submit(data)
            
        }}>
            <div className="h4 fw-bold p-5" style={{backgroundColor:"#f8f8fc"}}>Challenge Details</div>
            <Form.Group className="mx-5">
                    <Form.Group>
                        <Form.Label className="pt-3">Challenge Name</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={data.title} onChange={(e)=>change(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Start Date</Form.Label>
                        <Form.Control type="datetime-local" name="start" defaultValue={moment(data.start).format('YYYY-MM-DDTHH:mm')} onChange={(e)=>change(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">End Date</Form.Label>
                        <Form.Control type="datetime-local" name="end" defaultValue={moment(data.end).format('YYYY-MM-DDTHH:mm')} onChange={(e)=>change(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group className="pt-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={8} name="desc" defaultValue={prop.desc} onChange={(e)=>change(e)}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Image</Form.Label>
                        <FormControl type="file" name="FormEditImage" accept="image/png, image/jpg, image/jpeg"></FormControl>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Difficulty</Form.Label>
                        <Form.Select name="difficulty" defaultValue={prop.diff} onChange={(e)=>change(e)}>
                            <option>Select Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </Form.Select>
                    </Form.Group>   
                    <input className="btn btn-success my-4" type="submit"/>
            </Form.Group>
        </Form>
    )
}
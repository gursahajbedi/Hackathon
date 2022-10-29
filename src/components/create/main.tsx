import { Form, FormControl, InputGroup } from "react-bootstrap";
import {Link} from "react-router-dom"

export default function Create(prop:any){
    return(
        <Form className="container-fluid" onSubmit={(e)=>{
            e.preventDefault()
            alert("Your Hackathon is now live")
            prop.submit(e)
        }}>
            <div className="h4 fw-bold p-5" style={{backgroundColor:"#f8f8fc"}}>Challenge Details</div>
            <Form.Group className="mx-5">
                    <Form.Group>
                        <Form.Label className="pt-3">Challenge Name</Form.Label>
                        <Form.Control type="text" onChange={(e)=>prop.change(e)} name="FormCreateName"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Start Date</Form.Label>
                        <Form.Control type="datetime-local" onChange={(e)=>prop.change(e)} name="FormCreateStartDate"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">End Date</Form.Label>
                        <Form.Control type="datetime-local" onChange={(e)=>prop.change(e)} name="FormCreateEndDate"></Form.Control>
                    </Form.Group>
                    <Form.Group className="pt-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={8} onChange={(e)=>prop.change(e)} name="FormCreateDesc"></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Image</Form.Label>
                        <FormControl type="file" onChange={(e)=>prop.change(e)} name="FormCreateImage" accept="image/png, image/jpg, image/jpeg"></FormControl>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="pt-3">Difficulty</Form.Label>
                        <Form.Select onChange={(e)=>prop.change(e)} name="FormCreateDiff">
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
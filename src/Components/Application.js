import React, { useEffect, useState } from 'react';
import { Tab, Row, Col, ListGroup } from 'react-bootstrap';
import humanized_time_span from '../time';
const thumb_up = require('../thumb-up.png');
const thumb_down = require('../thumbs-down.png');
const Application = () => {
    const [page, setPage] = useState(1);
    const [result,setResult] = useState([]);
    const [reRender, setReRender] = useState(false);
    useEffect(() => {
        fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30')
            .then(response => response.json())
            .then(res => { 
                res.hits.map(item=>{
                    item.isUpVoted = false;
                })
                setResult(res.hits);  
            });
    }, [])
    return (
        <div style={{ padding: "100px 0px" }}>
            <Row>
                <Col></Col>
                <Col sm={12} lg = {8}>
                    <ListGroup>
                        {
                            result.map((item,index) => {
                                let url = item.url.split("www.")[1];
                                url = !!url ? url : item.url.split("//")[1]; 
                                return (
                                    <ListGroup.Item key={index}>
                                        <div>
                                            <span style={{fontSize:"1.5rem"}}>{index + 1}. {item.title}</span> ({url.split("/")[0]}) 
                                            <br></br>
                                            <span className="smallHeading">
                                                <img 
                                                    src={item.isUpVoted ? thumb_down : thumb_up} 
                                                    height="30px" 
                                                    width="30px" 
                                                    style={{padding:"5px", cursor:"pointer"}}
                                                    onClick={()=>{item.isUpVoted = !item.isUpVoted; setReRender(!reRender)}}
                                                />
                                                | {item.points} points by {item.author} { humanized_time_span(item.created_at) + " "}
                                                | {item.num_comments} comments |
                                                <span onClick={()=>{
                                                    setResult(result.filter(item1=>item1!=item))
                                                }} style={{cursor:'pointer'}}>{" "}hide</span>
                                            </span>
                                        </div>
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
export default Application;
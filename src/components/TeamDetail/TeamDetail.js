import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TeamDetail.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {faTwitterSquare, faFacebook, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';

const TeamDetail = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState([]);
   console.log(team)

    useEffect(()=> {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then (res => res.json())
        .then (data => setTeam(data.teams));
        console.log(teamId, "id");
    }, [teamId])
     
      const {strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN} = team.length && team[0]; 
    return (
     
        <div className= "background-style">
            
            <Header></Header>
            
<br></br>
        
            <Container style={{marginLeft: "200px"}} className="detail-container">

               <Row className="detail-section">

                   <Col className="detail-style">
                              <div className="text-style">
                                <h2>{strTeam}</h2>
                                <h6> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h6>
                                <h6> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                                <h6> <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                                <h6> <FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                            </div>  
                   </Col>
                   <Col className="detail-style">
                            <Image src="https://i1.wp.com/news.1app.online/wp-content/uploads/2020/05/epl.jpg?fit=860%2C395&ssl=1" rounded/>

                   </Col>           
                        

               </Row>
 
            </Container>
            
            <p  className= "description-style"> <small>{strDescriptionEN}</small> </p> 
            
            <footer >
                <div className= "footer-style">
                   <p>
                      <a style={{color: "rgb(97, 133, 253)"}} href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitterSquare} /></a> 
                       </p> 
                    <p>
                      <a style={{color: "rgb(80, 80, 172)"}} href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                    </p>
                    <p>
                        <a style={{color: "rgb(219, 0, 0)"}} href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutubeSquare} /></a>
                    </p>
                    
            </div>
            </footer>

        </div>
    
    );
};

export default TeamDetail;
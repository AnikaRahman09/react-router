
import React from 'react';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardGroup, Container,  Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Details = (props) => {
    const {strTeam, idTeam, strTeamBadge } = props.team;

    return (
        
        <Container className ="team-container">
            
            <Card className ="team-body"  >
                <div > 
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    
                    <Link to = {`/team/${idTeam}`}> 
                    <Button variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                    </Link>

                </Card.Body>
                </div>
                </Card>
            
        </Container>
            
       
    );
};

export default Details;
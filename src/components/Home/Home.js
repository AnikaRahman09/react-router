import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Home.css';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then (res => res.json())
        .then (data => setTeams(data.teams)); 
    }, [])
    return (
        <div className= "home-bg">
            <Header></Header>
            <Row className="justify-content-md-center">
            

            {
                teams.map(team => <Col md = {3} xs= {12} sm = {6} xl = {4}>

                <Team team = {team}> </Team>
                </Col>)
                
            }
            </Row>
            
            
        </div>
    );
};

export default Home;
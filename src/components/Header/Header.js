import React from 'react';
import './Header.css'
import { Card, Container, Image } from 'react-bootstrap';

const Header = () => {
    return (
        

            <Card className="text-white header-style">
        <Card.Img src="https://www.fcbarcelona.com/fcbarcelona/photo/2018/08/21/5ab8a7d9-b2d6-4c4d-92bf-1cd7444b69a9/VO180820A19034.jpg" alt="Card image" />
        <Card.ImgOverlay className="overlay-style">
          <h1 className="text-center text-style">Sports Mania</h1>
        
         
        </Card.ImgOverlay>
      </Card>
       

        
              
       
    );
};

export default Header;
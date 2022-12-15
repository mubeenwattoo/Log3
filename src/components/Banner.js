import React from 'react'
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import 'animate.css';
import TrackerVisibility from 'react-on-screen';
import { isVisible } from '@testing-library/user-event/dist/utils';
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }





  return (
    <section className='banner' id='home'>
    <Container>
    <Row className='align-items-center'>
    <Col xs={12} md={6} xl={7}>
    <TrackerVisibility>
    {({ isVisible }) =>
    <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
<span className='tagline'>Welcome to my Portfolio</span>
<h1>{'Hi I am React JS ' }<span className='wrap'>{text}</span></h1>
   <p>Hi, my name is M.Mobeen Ahmad. And I am working as a Senior React JS developer with a practical experience of 4+ years in creating awesome, modern and fully Mobile Responsive designs.</p>
<button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
</div> }
</TrackerVisibility>
</Col>
<Col xs={12} md={6} xl={5}>

<img src={headerImg} alt="Header Img"/>

</Col>



    </Row>
    </Container>
    </section>
  )
}

export default Banner
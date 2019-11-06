import React, { Component } from "react";
import styled from 'styled-components';

const Boxcontent = styled.button`
    margin-top:1em;
    background-color: #FFCC66; 
    color: white; 
    border: 8px solid #FFCC66	;
    border-radius: 8px;
    width: 170px;
    height: 55px;
    @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
    font-family: 'Niramit', sans-serif;
    &:hover {
        background-color: gray	;
        color: white;
        border: 8px solid gray
        width: 170px;
        height: 55px;
        @import url('https://fonts.googleapis.com/css?family=Niramit:500&display=swap');
        font-family: 'Niramit', sans-serif;
      }
`
export default class Homebutton extends Component {


    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <Boxcontent class="button button1" width="40%" height="80%">ลักษณะของเสือดาว</Boxcontent>
                </div>
                <div className="row">
                    <Boxcontent class="button button1" width="40%" height="80%">ลักษณะนิสัย</Boxcontent>
                </div>
                <div className="row">
                    <Boxcontent class="button button1" width="40%" height="80%">อาหาร</Boxcontent>
                </div>
                <div className="row">
                    <Boxcontent class="button button1" width="40%" height="80%">ที่อยู่อาศัย</Boxcontent>
                </div>
                <div className="row">
                    <Boxcontent class="button button1" width="40%" height="80%">CREDIT</Boxcontent>
                </div>
                
                    
                    {/*
                    <div className="con2-container">
                    <span className="content2-btn"><img src="/static/images/content-b02.png" width="40%" height="80%"/></span>
                    <span className="content2-btn2"><img src="/static/images/content02.png" width="40%" height="80%"/></span>
                    </div>
                    
                    
                    
                    <div className="con3-container">      
                    <span className="content3-btn"><img src="/static/images/content-b03.png" width="40%" height="80%"/></span>
                    <span className="content3-btn2"><img src="/static/images/content03.png" width="40%" height="80%"/></span>
                    </div>
                    
                    <div className="con4-container">      
                    <span className="content4-btn"><img src="/static/images/content-b04.png" width="40%" height="80%"/></span>
                    <span className="content4-btn2"><img src="/static/images/content04.png" width="40%" height="80%"/></span>
                    </div>

                    <div className="con5-container">      
                    <span className="content5-btn"><img src="/static/images/content-b05.png" width="40%" height="80%"/></span>
                    <span className="content5-btn2"><img src="/static/images/content05.png" width="40%" height="80%"/></span>
                    </div>

                    <div className="con6-container">      
                    <span className="content6-btn"><img src="/static/images/content-b06.png" width="40%" height="80%"/></span>
                    <span className="content6-btn2"><img src="/static/images/content06.png" width="40%" height="80%"/></span>
                    </div>
                    </div>
                    */}
                </div>
                );
            }
}
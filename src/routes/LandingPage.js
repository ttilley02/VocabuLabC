import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Main1 from '../components/Main1'
import LangChoice from '../components/LangChoice'


export default class LandingPage extends Component{
    render(){
        return(
            <>
            <Nav
            login="login"
            signup="signup"
            home="home"
            >
            </Nav>
            <Main1></Main1>
            <LangChoice></LangChoice>
            </>
        )
    }
}
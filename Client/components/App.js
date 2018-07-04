import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Component/Home';
import SearchJobs from './Component/searchJobs';
import ScheduledInterviews from './Component/scheduledInterviews';
import Feedback from './Component/feedback';
import UserProfile from './Component/userProfile';

const LoginService = require('../services/login-service');

class App extends Component {
    constructor(props) {
        super(props);
        this.loginClick = this.login.bind(this);
        const me = this;
        this.state = {
            candidateObject:''
        };
        
    }
    login(){
        console.log('Login ID', this.candidateId.value);
        console.log('Password', this.password.value);
        //console.log();
        this.loader.style.display = 'block';
        LoginService
            .login(this.candidateId.value)
            .then(res => {
                this.loader.style.display = 'none';
                console.log(res);
                //me.setState({data: res});
                // me.setState({userData:res});
                //console.log(me.state);
                if(res.contactNo == this.password.value){
                    console.log('Authenticated');
                    this.loaderMask.style.display = 'none';
                    this.userName.innerHTML =res.candidateName;
                    this.invalidLoginMsg.style.display = 'none';
                    //this.state.candidateObject = res;
                    this.setState({candidateObject:res});
                }else{
                    this.invalidLoginMsg.style.display = 'inline-block';
                }
                return;
            })
            .catch(error => {
                this.loader.style.display = 'none';
                console.log(error);
                return;
            });
    }
    render() {
        return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h1 className="App-title">Welcome to React</h1>
        //   </header>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>
        // </div>
            <Router>
                <div className="App">
                    <div id="loaderMask" ref={el => this.loaderMask=el}>
                        <div className="loader" ref={el => this.loader=el}></div>
                        <h2>Welcome to ABC Careers...</h2>
                        <form id="loginForm" action="javascript:void(0);">
                            <span className="fBold">Enter Email ID:</span>
                            <input type="text" placeholder="Enter your ID"   ref={el => this.candidateId=el}/>
                            <span className="fBold">Enter Password:</span>
                            <input type="password" placeholder="Enter your Mobile Number" ref={el => this.password=el}/><br/>
                            <span ref={el => this.invalidLoginMsg=el} id="invalidLoginMsg">* Invalid UserName / Password</span>
                            <button onClick={this.loginClick}>Login</button>
                        </form>
                    </div>
                    <header className="App-header">
                        <div  className="VZlogo">
  
                        </div>
                        <div className="headerTitle">
                            <h2>CAREERS</h2>
                        </div>
                        <div className="headerWelcomeMsg">
                            <h3>Welcome</h3>
                            <p ref={el => this.userName=el} className="redText"></p>
                        </div>
                    </header>
                    <ul className="breadcrumb">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/jobsSearch'}>Jobs Search</Link></li>
                        <li><Link to={'/scheduledInterviews'}>Interviews Details</Link></li>
                        <li><Link to={'/feedback'}>Interview Feedback</Link></li>
                        <li><Link to={'/userProfile'}>User Profile</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/jobsSearch' component={() => (<SearchJobs UserProfiledata={this.state.candidateObject} />)} />
                        <Route exact path='/scheduledInterviews' component={ScheduledInterviews} />
                        <Route exact path="/userProfile" component={() => (<UserProfile UserProfiledata={this.state.candidateObject} />)}/>
                    </Switch>
                </div>
            </Router>


        );
    }
}

export default App;

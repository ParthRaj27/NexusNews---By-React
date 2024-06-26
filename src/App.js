import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize=6
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        
          <Routes>
            {/* key is for unique link identifire */}
            <Route exact path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country="in" category="General"/>} />
            <Route exact path='/Business' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Business" pageSize={this.pageSize} country="in" category="Business"/>} />
            <Route exact path='/Entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>} />
            <Route exact path='/General' element={<News setProgress={this.setProgress} apikey={this.apikey} key="General" pageSize={this.pageSize} country="in" category="General"/>} />
            <Route exact path='/Health' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Health" pageSize={this.pageSize} country="in" category="Health"/>} />
            <Route exact path='/Science' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Science" pageSize={this.pageSize} country="in" category="Science"/>} />
            <Route exact path='/Sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>} />
            <Route exact path='/Technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>} />
          </Routes>
       </Router>
      </div>
    )
  }
}

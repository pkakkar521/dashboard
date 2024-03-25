import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom"
import About from "./components/about/About"
//import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Hme"



function App() {
  return (
    <>
      <Router>
       
        <Header />
        
        <Switch>
         
          <Route  path='/' component={Home} />
         
          <Route  path='/about' component={About} />
         
          <Route  path='/team' component={Team} />
          <Route  path='/pricing' component={Pricing} />
          <Route  path='/journal' component={Blog} />
          <Route  path='/contact' component={Contact} />
         
        
       
       
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

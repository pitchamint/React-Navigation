import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navigation from "./component/Navigation"
import Home from "./component/page/Home"
import Member from "./component/page/Member"
import Product from "./component/page/Product"
//เข้าถึง path โดยการสร้าง switch และ Route
import './App.css'

function App() {
  return (
      <div>
          <Router>
            <Navigation/>
            <Switch>
              <Route path="/" component={Home}exact/>
              <Route path="/member" component={Member}/>
              <Route path="/product" component={Product}/>
            </Switch>
          </Router>
      </div>
  )
}

export default App

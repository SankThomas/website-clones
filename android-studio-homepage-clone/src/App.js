import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  Header,
  Showcase,
  Download,
  Featured,
  PlatfromUpdates,
  Tools,
  Explore,
  News,
  Videos,
  Community,
  Footer,
} from "./components"

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Showcase />
          <Download />
          <Featured />
          <PlatfromUpdates />
          <Tools />
          <Explore />
          <News />
          <Videos />
          <Community />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

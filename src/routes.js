import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './Pages/Home'
import Header from './Components/Header'
import Filme from './Pages/Filme'
import Salvos from './Pages/Salvos'
import Error from './Pages/Error'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/filme/:id' component={Filme} />
                <Route exact path='/salvos' component={Salvos} />
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
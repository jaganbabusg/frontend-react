import Navbar from './Navbar';
import Footer from './Footer';
import FlashMessage from './FlashMessage';

import Home from './Home';
import Menu from './Menu';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

import { Route, Switch } from 'wouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (<>
        <Navbar />
        <FlashMessage />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
    </>);
}
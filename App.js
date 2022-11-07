import { BrowserRouter, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/home';
import Addstudent from './components/addstudent';
import Editstudent from './components/editstudent';

function App() {
  	return (
		<BrowserRouter>

				<Header></Header>
					
						<Switch>

							<Route exact path='/'> <Home/></Route>
								
							<Route path='/add'><Addstudent></Addstudent></Route>
								
							<Route path='/:id'><Editstudent></Editstudent></Route>
							
						</Switch>
					
		</BrowserRouter>
  	);
}

export default App;

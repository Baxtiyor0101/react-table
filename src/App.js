import React  from "react";
import About from "./About";
// import Backent from "./APITutorial/Backent";
// import Nimadir from "./LifeSycle/Nimadir";
// import MyApp from './components/MyApp';
// import MyApp2 from "./components/MyApp2";
// import Lesson1 from './SteteLesson/Lesson1';
// import Component1 from "./propsTutorial/Component1";
// import Component2 from "./propsTutorial/Component2";
import Blog from "./Blog";
import Nav from "./Nav";
import {BrowserRoute, Route} from 'react-router-dom';



function App(){
  return(
    <BrowserRoute>
      <div className="App">
        <Nav />
        <Route path='/blog' component={Blog} />
        <Route path='/about' component={About} />
    </div>
    </BrowserRoute>
  );
};  

export default App;
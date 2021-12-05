import React  from "react";
import MyApp from './components/MyApp';
import MyApp2 from "./components/MyApp2";
// import Component1 from "./propsTutorial/Component1";
// import Component2 from "./propsTutorial/Component2";


function App(){
  return(
    <div className="App">
       <MyApp/>
       <MyApp2/>
       {/* <Component1 name ="Baxtiyor" age = "22" />
       <Component2 text="react tutorial"/> */}
    </div>
  );
};  

export default App;
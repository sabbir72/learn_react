
// import './App.css';
// import Form from './Form/Form';
// import Child from './State/Child';
// import Index1 from './Hooks/Index1';
// import Hello from './HooksComponent/Hello';
// import EventHandler from './Event/EventHandler';
// import Index from './Conditional/Index';
// import Card from './ClassComponent/Card';
// import Cards from './FunctionalComponent/Cards';
// import Card from './Component/Card';
// import MOCK_DATA from './Component/MOCK_DATA.json'

import DataFetch from "./CustomHooks/DataFetch";

// import Home from "./State/Home";
// import NewTodo from "./State/NewTodo";
// import UseEffectExample from './UseEffect/UseEffectExample'


function App() {
//  let items =[];
// items=MOCK_DATA.map((item ,index) => (<Card key={index} Dis={item.title} dec={item.desc} />));

//  for loop====================
//  for (let i = 0; i < MOCK_DATA.length; i++) {
//    items.push(<Card Dis={MOCK_DATA[i].title} dec={MOCK_DATA[i].desc} />); 
//  }

//  const  handleChild=(childData)=>{
//   console.log(childData);
//  }
// const data="Hi I'm Sabbir From (Apps)"
  return (
    <div className="Hpp">
      {/* {items} */}
      {/* <Card /> */}
      {/* <Cards Dis="Hollli " dec="I am Samia" /> ========function */}
      {/* <Index/> */}
      {/* <EventHandler/> */}
      {/* <Index1/>
      <Index2/> */}
      {/* <Hello/> */}
      {/* <Form/> */}
      {/* <Child data={data} onChild={handleChild} /> */}
      {/* <Home/> */}
     {/* <UseEffectExample/> */}
     <DataFetch/>
    
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvent';
import ClassEvent from './components/ClassEvent';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import Product from './components/Product';
import Form from './components/Form';
import Todo from './components/Todo';
import ListItem from './components/ListItem';
import InLineComponent from './components/InLineComponent';
import StylesheetComponent from './components/StylesheetComponent';
import ModuleComponent from './components/ModuleComponent';

function App() {
  return (
    <div className="App">
    <ModuleComponent></ModuleComponent>
    {/* <StylesheetComponent></StylesheetComponent>
    <InLineComponent></InLineComponent> */}
    {/* <Todo></Todo> */}
    {/* <Form></Form> */}
    {/* <Product></Product>
    <ConditionalComponent></ConditionalComponent> */}
    {/* <FunctionalCounter></FunctionalCounter>
    <ClassEvent></ClassEvent>
    <FunctionEvent></FunctionEvent>
    <Resume name="Soniya"></Resume>
    <Counter></Counter>
      <Hello/>
      <Message messagecode="10" messagecontent="this is message from props"></Message>
      <Profile name="Rekha" lastname="Mahto">
        <h3>This is profile of a person</h3>
      </Profile>
      <Profile name="Swati" lastname="Dewangan"></Profile>
      <Profile name="Prachi" lastname="Satone"></Profile>
      <Profile name="Narendra" lastname="Singh"></Profile> */}
    </div>
  );
}

export default App;

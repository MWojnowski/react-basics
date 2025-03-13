import Counter from './Components/6_UseState/HookComponent';
import Card from './Components/1_Card/Card';
import ColorPicker from './Components/8_ColorPicker/ColorPicker';
import UserGreeting from './Components/3_ConditionalRendering/UserGreeting';
import Form from './Components/7_OnChange/Form';
import List from './Components/5_RenderLists/List';
import StateList from './Components/_11_update_list_in_state/StateList';
import Cars from './Components/_10_update_object_in_state/cars';
import Counter2 from './Components/9_Updater_function/updaterCounter';
import Arr from './Components/_12_update_array_of_objects_in_state/arr';
import ToDo from './Components/_13_ToDo_List/ToDo';
import UseEffect from './Components/_14_useEffect/useEffect';
import Clock from './Components/_15_clock/clock';
import UseContext from './Components/_16_useContext/UseContext';
import UseRef from './Components/_17_useRef/UseRef';
import Stopwatch from './Components/_18_stopwatch/stopwatch';

function App() {
  const words = [
    { id: 0, text: 'javascript' },
    { id: 1, text: 'programming' },
    { id: 2, text: 'developer' },
    { id: 3, text: 'function' },
    { id: 4, text: 'variable' },
    { id: 5, text: 'object' },
    { id: 6, text: 'array' },
    { id: 7, text: 'loop' },
    { id: 8, text: 'string' },
    { id: 9, text: 'boolean' },
  ];
  const cars = [
    { id: 1, text: 'Porsche 911' },
    { id: 2, text: 'Ferrari 488' },
    { id: 3, text: 'Lamborghini Huracan' },
    { id: 4, text: 'McLaren 720S' },
    { id: 5, text: 'Audi R8' },
    { id: 6, text: 'Chevrolet Corvette' },
    { id: 7, text: 'Nissan GT-R' },
    { id: 8, text: 'Aston Martin Vantage' },
    { id: 9, text: 'BMW M8' },
    { id: 10, text: 'Mercedes-AMG GT' },
  ];
  const components = [
    {
      Name: 'Conditional Rendering',
      elem: [
        <UserGreeting isLogged={true} username="User" />,
        <UserGreeting />,
      ],
    },
    {
      Name: 'Basics (components,props)',
      elem: [<Card />, <Card title={45} desc="text example" BtnTxt="btnTxt" />],
    },
    {
      Name: 'Render List',
      elem: [
        <List _list={words} _category="words" />,
        <List _list={cars} _category="cars" />,
      ],
    },
    {
      Name: 'Use State',
      elem: [<Counter />],
    },
    {
      Name: 'OnChange',
      elem: [<Form />],
    },
    {
      Name: 'ColorPicker',
      elem: [<ColorPicker />],
    },
    {
      Name: 'Updater Function (chceck code)',
      elem: [<Counter2 />],
    },
    {
      Name: 'Update Object in state',
      elem: [<Cars />],
    },
    {
      Name: 'Update List in State',
      elem: [<StateList />],
    },
    {
      Name: 'Update Array of Objects in State',
      elem: [<Arr />],
    },
    {
      Name: 'ToDo',
      elem: [<ToDo />],
    },
    {
      Name: 'UseEffect',
      elem: [<UseEffect />],
    },
    {
      Name: 'Clock',
      elem: [<Clock />],
    },
    {
      Name: 'Use Context',
      elem: [<UseContext />],
    },
    {
      Name: 'Use Ref',
      elem: [<UseRef />],
    },
    {
      Name: 'Stopwatch',
      elem: [<Stopwatch />],
    },
  ];

  return (
    <>
      {components.map((e) => (
        <>
          <h1>{e.Name}</h1>
          {e.elem.map((E) => (
            <>{E}</>
          ))}
          <hr />
        </>
      ))}
    </>
  );
}

export default App;

import Tabs from './components/tabs';
import './App.css'

function App() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
      callback: () => console.log('Tab 1 content is showing here '),
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
      callback: () => console.log('Tab 2 content is showing here'),
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
      callback: () => console.log('Tab 3 content is showing here'),
    },
    
  ];
  return (
    <div>
 
    <Tabs tabs= {tabs} />
  </div>
  )
}

export default App

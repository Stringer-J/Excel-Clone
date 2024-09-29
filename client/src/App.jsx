import { useState } from 'react'
import './App.css'
import FileSelection from './components/FileSelection/FileSelection.jsx';
import EditSelection from './components/EditSelection/EditSelection.jsx';
import ViewSelection from './components/ViewSelection/ViewSelection.jsx';

function App() {
  const [selectedFromFileBar, setSelectedFromFileBar] = useState(null);

  const handleFileBarClick = (component) => {
    setSelectedFromFileBar(component);
  };

  const renderFileBarComponent = () => {
    switch (selectedFromFileBar) {
      case 'FileSelection':
        return <FileSelection />;
      case 'EditSelection':
        return <EditSelection />;
      case 'ViewSelection':
        return <ViewSelection />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='fileBarTop'>

      </div>

      <div className='fileBarBottom'>
        <button className='fileBarButton' onClick={() => handleFileBarClick('FileSelection')}>File</button>
        <button className='fileBarButton' onClick={() => handleFileBarClick('EditSelection')}>Edit</button>
        <button className='fileBarButton' onClick={() => handleFileBarClick('ViewSelection')}>View</button>
      </div>

      <div className='fileBarSelection'>
        {renderFileBarComponent()}
      </div>
    </>
  );
};

export default App;

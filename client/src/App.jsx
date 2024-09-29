import { useState } from 'react'
import './App.css'
import FileSelection from './components/FileSelection/FileSelection.jsx';
import HomeSelection from './components/HomeSelection/HomeSelection.jsx';
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
      case 'HomeSelection':
        return <HomeSelection />;
      case 'ViewSelection':
        return <ViewSelection />;
      default:
        return null;
    }
  };

  const getButtonClass = (componentName) => {
    return selectedFromFileBar === componentName ? 'activeFileBarButton' : 'fileBarButton';
  }

  return (
    <>
      <div className='fileBarTop'>
        <h1>NOT EXCEL</h1>
      </div>

      <div className='fileBarBottom'>
        <button className={getButtonClass('FileSelection')} onClick={() => handleFileBarClick('FileSelection')}>File</button>
        <button className={getButtonClass('HomeSelection')} onClick={() => handleFileBarClick('HomeSelection')}>Home</button>
        <button className={getButtonClass('ViewSelection')} onClick={() => handleFileBarClick('ViewSelection')}>View</button>
      </div>

      <div className='fileBarSelection'>
        {renderFileBarComponent()}
      </div>
    </>
  );
};

export default App;

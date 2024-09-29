import { useState } from 'react'
import './App.css'
import FileSelection from './components/FileSelection/FileSelection.jsx';
import HomeSelection from './components/HomeSelection/HomeSelection.jsx';
import ViewSelection from './components/ViewSelection/ViewSelection.jsx';

function App() {
  const [selectedFromFileBar, setSelectedFromFileBar] = useState(null);
  const [editBodyTextAreas, setEditBodyTextAreas] = useState(24);

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
  };

  const renderTextAreas = () => {
    return Array.from({ length: editBodyTextAreas }, (_, index) => {
      const letter = String.fromCharCode(65 + index);

      return (
        <textarea key={index}
        className='textAreaTopRow'
        placeholder={letter}
        readOnly
        />
      );  
    });
  };

  return (
    <>
      <div className='header'>
        <div className='fileBarTop'>
          <h1>NOT EXCEL</h1>
        </div>

        <div className='fileBarBottom'>
          <button className={getButtonClass('FileSelection')} onClick={() => handleFileBarClick('FileSelection')}>File</button>
          <button className={getButtonClass('HomeSelection')} onClick={() => handleFileBarClick('HomeSelection')}>Home</button>
          <button className={getButtonClass('ViewSelection')} onClick={() => handleFileBarClick('ViewSelection')}>View</button>
        </div>
      </div>


      <div className='fileBarSelection'>
        {renderFileBarComponent()}
      </div>

      <div className='editBody'>
        <textarea id='firstTextAreaOnTopRow' readOnly></textarea>
        {renderTextAreas()}
      </div>

      <div className='footer'>
        <div className='footerTop'>

        </div>

        <div className='footerBottom'>
  
        </div>
      </div>

    </>
  );
};

export default App;

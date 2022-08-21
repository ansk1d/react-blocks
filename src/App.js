import React from 'react';
import './style.css';
import ReactComponent from './ReactComponent';
class App extends React.Component {
  render(){
    return (
      <div className='app'>
        <ReactComponent/>
      </div>
  );
  }
}
export default App;
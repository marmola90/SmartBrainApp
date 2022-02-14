import './App.css';
import Navigation  from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import { Component } from 'react';

const particlesOptions = {
  particles: {
    number:{
      value:60,
      density:{
        enable: true,
        value_area: 700
      }
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {input:'',}
  }

  onInputChange =(event) => {
      console.log(event);
  }

  render(){
    return (
      <div className="App">
        <Particles className='particles'
                params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}/>
        {/*<FaceRecognition />*/}
      </div>
    );
  };
  
}

export default App;

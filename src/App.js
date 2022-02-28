import './App.css';
import Navigation  from './components/Navigation/Navigation';
import Signin  from './components/Signin/Signin';
import FaceRecognition  from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import { Component } from 'react/cjs/react.production.min';

const app = new Clarifai.App({
  apiKey: '61e7d94872084515ad6fcccd0fca12bc'
});

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

class App extends Component{
  constructor(){
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
        route: 'signin'
      }
  }

  calculateFaceLocation = (data)=>{
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputImage');
      const width= Number(image.width);
      const height = Number(image.height);

      return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width- (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    
  } 

  //DisplayFaceBox
  displayFaceBox =(box)=>{
    console.log(box);
    this.setState({box: box});

  }

  onInputChange=(event)=>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit=()=>{
    this.setState({imageUrl: this.state.input});

    app.models
       .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input
       )
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err =>  console.log(err));
  }

  render(){
    return (
      <div className="App">
         <Particles className='particles'
                params={particlesOptions}
              />
        <Navigation />
        { this.state.route === 'signin'
          ? <Signin />
          : <div>
          <Logo />
          <Rank />
          <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onButtonSubmit={this.onButtonSubmit}

          />
          <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div> 
        }
        
        
      </div>
    );
  }
}

export default App;

import './App.css';
import Navigation  from './components/Navigation/Navigation';
import FaceRecognition  from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
<<<<<<< HEAD
import { Component } from 'react';
=======
import { Component } from 'react/cjs/react.production.min';

const app = new Clarifai.App({
  apiKey: '61e7d94872084515ad6fcccd0fca12bc'
});
>>>>>>> 0911263eabbd41a7ca0f952153a53e0da0ad87aa

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

<<<<<<< HEAD
class App extends Component {
  constructor() {
    super();
    this.state = {input:'',}
  }

  onInputChange =(event) => {
      console.log(event);
=======
class App extends Component{
  constructor(){
      super();
      this.state = {
        input: '',
        imageUrl: '',
        box: {},
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

  displauFaceBox =(box)=>{
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
      .then(response => this.displauFaceBox(this.calculateFaceLocation(response)))
      .catch(err =>  console.log(err));
>>>>>>> 0911263eabbd41a7ca0f952153a53e0da0ad87aa
  }

  render(){
    return (
      <div className="App">
<<<<<<< HEAD
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
  
=======
         <Particles className='particles'
                params={particlesOptions}
              />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}

        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
>>>>>>> 0911263eabbd41a7ca0f952153a53e0da0ad87aa
}

export default App;

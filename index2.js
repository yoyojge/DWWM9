
function ImageProfile(props){
     //destructuring
     const  { imgInformation }   = props ;
     // console.log(imgInformation);
     return <img src={imgInformation.imgSrc} 
                    alt={imgInformation.imgAlt} 
                    style={{height : imgInformation.imgHeight}}
               />
}

class InfoProfile extends React.Component {

     constructor(props){
          super(props)
     }

     render(){
          return(
          <div>
              <p>{this.props.profileName}</p>
               <p>{this.props.profilAge}</p>
               <p>{this.props.profilDesc}</p>
          </div>
          );
     }
}

class App extends React.Component {

     imgInfo = {
          imgSrc:"./assets/images/bart.jpg" ,
          imgAlt:"image Alt",
          imgHeight:"150px"
     } 

     render(){
          return(
          <div>
               <ImageProfile
                    imgInformation={this.imgInfo} 
                  
               />
               <InfoProfile 
                    profileName={"Bart Simpson"}  
                    profilAge={"12 ans"} 
                    profilDesc={"Description : farceur"}  
               />
          </div>
          );
     }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
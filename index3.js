
function ImageProfile(props){
     //destructuring
     const  { imgInformation }   = props ;
     // console.log(imgInformation);
     return(   
          <img src={imgInformation.imgSrc} 
               alt={imgInformation.imgAlt} 
               style={ {height : imgInformation.imgHeight} }
          />
     ) 
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


class ButtonAvis extends React.Component {
     inputWidth = 25;
     inputValue = 0;

     constructor(props){
          super(props);
          //pour ne pas perdre le contexte
          this.handleClick = this.handleClick.bind(this)
     }

     handleClick = (e) => {
          //pour prevenir du comportement par defaut de onclick :: pas obligatoire
          e.preventDefault();
          this.inputValue ++;
          document.getElementById(this.props.infoBlockPouce.inputId).value = this.inputValue;
          // console.log(this.props);
     }

     render(){
          return(
          <div>
              <button onClick={this.handleClick} >{this.props.infoBlockPouce.textButton}</button>
              <input 
               type="text" 
               readOnly 
               id={this.props.infoBlockPouce.inputId}
               style={
                         {
                              width : this.inputWidth,
                              backgroundColor : this.props.infoBlockPouce.colorButton,
                              color : "#FFFFFF"
                         }
               }
               value={this.inputValue}
                
               />
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

     like = {
          textButton:"like" ,
          colorButton:"#19b211",
          inputId:"likeInputCount"
     } 
     disLike = {
          textButton:"disLike" ,
          colorButton:"#D10019",
          inputId:"dislikeInputCount"
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

               <ButtonAvis infoBlockPouce={this.like} />
               <ButtonAvis infoBlockPouce={this.disLike} />
          </div>
          );
     }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);



function ImageProfile(){
     return <img src="./assets/images/bart.jpg" alt="image Alt" />
}

class InfoProfile extends React.Component {

     render(){
          return(
          <div>
              <p>Bart Simpson</p>
               <p>12 ans</p>
               <p>Description : farceur</p>
          </div>
          );
     }
}





class App extends React.Component {

     render(){
          return(
          <div>
               <ImageProfile />
               <InfoProfile />
          </div>
          );
     }


}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
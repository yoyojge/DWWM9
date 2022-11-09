


class Footer extends React.Component{

     constructor(props){
          super(props)


     }


     render(){
          return(

               <footer style={{height:"200px" , marginTop:"500px"}}>
                    <p>tous droits réservés</p>
               </footer>

          )

     }
}





function Title(props){
     // le parametre props est toujours un objet
     console.log(props);
     return (
          <h1 style={props.theme}>mon super titre : {props.siteLanguage}</h1>
     )
}



function Header(){

     let lang = 'fr';
     let accueil = lang === 'fr' ? 
          "bonjour et bienvenu !"
          :
          "hello, welcome all !";


     let styleChoice = 'girly';


     let theme =  {
          girly:{
               color: 'pink',
               backgroundColor : 'grey'
          },
          badBoys:{
               color: 'black',
               backgroundColor : 'grey'

          }
     }

     return (
          <div>
               {/*  je passe une props a Title  */}
               <Title siteLanguage={lang} theme={theme[styleChoice]} />
               <h3>{accueil}</h3>
          </div>
     )
}






function App() {    
          return(
          <div>
              <Header />
              <Footer />
          </div>
          );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
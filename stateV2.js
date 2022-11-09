

class ButtonState extends React.Component {

     constructor(){
          super();
          //pour ne pas perdre le contexte
          this.increment = this.increment.bind(this);
          this.decrement = this.decrement.bind(this);
          this.state = {
               count:0
          };
     }

     increment(){
          this.setState( (prevState) =>{
               return {
                    count: prevState.count + 1
               }
          });
     }

     decrement(){
          this.setState((prevState) => {
               return {
                   count: prevState.count - 1
               }
           })
     }

     render(){
          return(
          <div>
               <h3>count :  {this.state.count}</h3>
               <button onClick={this.increment} >+</button>
               <button onClick={this.decrement} >-</button>
          </div>
          )
     }
}

class App extends React.Component {    
     render(){
          return(
          <div>                         
               <ButtonState />  
          </div>
          );
     }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
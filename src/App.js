import { Fragment, useContext, useState, useRef, useCallback, useEffect } from 'react';
// import {useSelector, useDispatch} from 'react-redux';
import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Reducer from './reducer';
// import {connect} from 'react-redux';
// import Routerdata from './routerdata';
// import {Routes, Route} from 'react-router-dom';
import Appcontext from './Appcontext';
// import Contact from './Contact';
import './data.json';



function App(props) {
  
 
  const [displaydata, setDisplaydata] = useState({
    name: "",
    phone: ""
  })
  const inputRef = useRef(null)
  const [display, setDisplay] = useState(false)

  const [api, setApi] = useState([])
useEffect(() => {
    const fetchthedata = async() => {
        const data = await fetch("https://reqres.in/api/users");
        const fetchdata = await data.json();
        setApi(fetchdata)
        }
  fetchthedata()
},[])
  
  // const selector = useSelector((reduxstore)=> {
  //   return reduxstore.counter;
  // })
  // const dispatch = useDispatch()
  // const dispatchthedata = () => {
  //   dispatch({type: "INCREASE"})
  // }

  // const dispatchthedata = () => {
  //   props.inc()
  // }
 const change = (e) => {
  inputRef.current.style.backgroundColor = "red"
  setDisplaydata({...displaydata, [e.target.id]: e.target.value})
 }
 const submitthedata = (e) => {
  e.preventDefault()
  console.log(displaydata)
 }
 const displaytheform = () => {
  setDisplay(true)
 }


const data = useContext(Appcontext)

  return (
    <Fragment>
      {data}
      
      {/* <Routes>
        <Route path='/contact' element={<Routerdata />}/>
      </Routes> */}
      {/* <Header />
 
      
      <Routerdata /> 
      <Routes>
      
        <Route path='/contact' element={<Contact />}/>
      </Routes> */}
      <button onClick={displaytheform}>enabletheform</button>
     {display ? <form>
      <input 
      ref={inputRef}
     type="text"
     label="name"
     id="name"
     value={displaydata.name}
     onChange={change}
     />
      <input 
     type="number"
     label="number"
     id="phone"
     value={displaydata.phone}
     onChange={change}
     />
     <button 
     disabled = {!displaydata.name || !displaydata.phone}
     onClick={submitthedata}>submit</button>
      </form> : null}
      
{/*       
      {api.data.map((result) => {
        return (
          <div>
            <p>{result.first_name}</p>
            <img src={result.avatar}/>
          </div>
        )
      })} */}
     
      {/* {api.data.filter((result) => {
        return (
        result.first_name.includes('e')
        )
      }
      )
    } */}
       {/* <main>
       {props.displaycounter}
        <button onClick={dispatchthedata}>increase</button> 
        <Meals />
      </main>  */}
   
    </Fragment>

  );
}

// const mapStateToProps = (reduxstore, props) => {
//   return {
//     displaycounter: reduxstore.counter
//   }
// }

// const mapDispatchToProps = (dispatch, props) => {
//   const inc = () => {
//     dispatch({type: "INCREASE"})
//   }
//   return {
//     inc
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;

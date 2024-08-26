import { useState } from 'react'
import { User } from './Component/User'
import { Button } from './Component/Button'
import './App.css'
import './trial.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; 


function App() {
  const [name,setname]= useState("")
  const [email,setemail]= useState("")
  const [lld,setlld]= useState("")
  const [lx,setlx]= useState("") 

  const [name2,setname2]= useState("")
  const [email2,setemail2]= useState("")
  const [lld2,setlld2]= useState("")
  const [lx2,setlx2]= useState("") 

  const [cliked,setclick] = useState(false)
  
  function Add () {
    console.log("cliked!!!!")
        
        
    setname2(name)
    setemail2(email)
    setlld2(lld)
    setlx2(lx)

    setclick(true)
   
}


  return (
    <>
     <User name = {name}  email={email} lld={lld} lx={lx} setname={setname} setlx={setlx} setemail={setemail} setlld={setlld}/>

     <Button  Add={Add}/>
     {cliked && (
      //   <div id='div1'> 
      //     <p>{name2}</p>
      //     <p> {email2}</p>
      //     <p> {lld2}</p>
      // <a href= {lld} target='_main'><button>Linkedin</button> </a>
      // <a href= {lx2} target='_main'><button>Linkedin</button> </a>
      //   </div>
      <div class="frame">
	<div class="card">
		<div class="flip hvr-outline-in">
			
			<div class="front">
				<h1>hey.</h1>
				<p class="flip-me">Flip Me</p>
				<div class="line line-1"></div>
				<div class="line line-2"></div>
				<i class="fa fa-heart"></i>
			</div>
			
			<div class="back">
				<i class="fa fa-heart"></i>
				<h3>{email2}</h3>
				<div class="line line-3"></div>
				<h2>{name2}</h2>
				<div class="social">
					<a href= {lld} target='_main'><i class="fab fa-twitter"></i></a>
					<a href= {lx} target='_main'><i class="fab fa-linkedin-in"></i></a>
				</div>
			</div>
		</div>
	</div>
</div>
      )}
     
     
        </>
  )
}

export default App

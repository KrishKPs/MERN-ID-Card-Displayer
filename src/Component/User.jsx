// User.jsx
export function User({name,email,lld,lx,setname,setemail,setlld,setlx}) {
    return (
      <div id="inputs"> 

      <h2> Welcome </h2>
      <h4> Let's Create Your Business Card </h4>
        <input type="text" id="name" placeholder="  Name" className="inputs" value={name} onChange={(e)=>{
           let values = e.target.value
            setname(values);
        }} />
        <input type="text" id="email" placeholder="  Enter E-mail"value={email} className="inputs" onChange={(e)=>{
            let values = e.target.value;
            setemail(values)
        }} />
        <input type="text" id="lld" placeholder="  Linkedin Link " value={lld} className="inputs" onChange={(e)=>{
            let values = e.target.value;
            setlld(values)
        }}/>
        <input type="text" id="lx" placeholder="  Twitter Link " value={lx} className="inputs" onChange={(e) => {
            
            let values = e.target.value
            setlx(values)
            
        }}/>

</div>
    );
  }
  
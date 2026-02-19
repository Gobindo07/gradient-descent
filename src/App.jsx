import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    a:"", b:"", c:"", d:"", e:"",
    x:"", lr:"", it:""
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const submit = async ()=>{

    setError("");

    for(let k in form){
      if(form[k]===""){
        setError("All fields are required!");
        return;
      }
    }

    setLoading(true);

    try{

      const res = await fetch("http://127.0.0.1:5000/optimize",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(form)
      });

      const data = await res.json();

      setResult(data);

    }catch(err){
      setError("Backend not running!");
    }

    setLoading(false);
  }

  return (
    <div style={{
      padding:"40px",
      fontFamily:"Arial",
      maxWidth:"600px",
      margin:"auto"
    }}>

      <h2>Gradient Descent Optimizer (Degree-4)</h2>

      {["a","b","c","d","e","x","lr","it"].map(i=>(
        <input
          key={i}
          name={i}
          placeholder={i}
          onChange={handleChange}
          style={{
            width:"100%",
            padding:"8px",
            margin:"5px 0"
          }}
        />
      ))}

      <button
        onClick={submit}
        style={{
          padding:"10px 20px",
          marginTop:"10px"
        }}
      >
        Calculate
      </button>

      {loading && <p>⏳ Calculating...</p>}

      {error && <p style={{color:"red"}}>{error}</p>}

      {result && (
        <div style={{marginTop:"20px"}}>

          <h3>Result</h3>

          <p><b>Minimum x:</b> {result.min_x}</p>
          <p><b>Minimum y:</b> {result.min_y}</p>

        </div>
      )}

    </div>
  );
}

export default App;

// console.log(React)
// console.log(ReactDOM) 

function Apple(){
    const st1 = {color: 'orange',backgroundColor:'skyblue'}
    const st2 = {display : 'block',alignItems:'center',justifyContert:'space-between'} 
    const st3 ={ textDecoration:'underline',fontFamily: 'sans-serif',fontSize: '1.5rem',color: 'coral' }
    return <div style={st2}>
                <h1 style={st1}> Name:{'Gorakod'} &#160; lastname:{'Niamthiang'}</h1>
                <p style={st3}> Age:{new Date().getFullYear()-1996}&#160; or &#160; {(new Date()-new Date(1996,1,26,23,39))/1000/60/60/24/365.67}</p>
                {/* <p>{new Date(1996,1,26,23,39).toString()}</p>
                <p>{new Date().toDateString()}</p>
                <p>{new Date().getTime()}</p> */}
    </div>
    
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<h1> Codecamp18 : {new Date().toDateString()}</h1>) //1
root.render(<Apple />);     //2 สามารถใช้แบบ 1 || 2 ก็ได้
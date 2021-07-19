import React from 'react'
import './component.css'
import { useState , useEffect } from 'react'
import Add from './Add'
import Link from './Link'
function Main() {
    const [links,setLinks]=useState([])
     const [addtoggle, setaddtoggle] = useState(false)

    useEffect(() => {
        
        const getlinks =async ()=>{
            const linksresults = await fetchlinks()
            setLinks(linksresults)
        }
 
        getlinks();
       
    }, [])
    const deletelink =(id)=>{
            setLinks(links.filter((li)=>li.id !==id))
    }

    const addnewlink = async (newlink)=>{
        
        const res = await fetch('http://localhost:8000/addlink',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
               
            },
            body: JSON.stringify(newlink)
        })
            const data = await res.json()
            setLinks([...links,data])
    }

    const fetchlinks = async () =>{
        const res = await fetch('http://localhost:8000/links')
        const data = await res.json()
        
        return data

    }

     const btnclick = ()=>{
        setaddtoggle(!addtoggle)

    }   
    


    return (
        <div className="center aligned container">
           <h3 className="">Recently posted:</h3>

                <div className="ui right aligned container">
              
            <button  onClick={btnclick} className="ui inverted  red button">{addtoggle  ? <i className="delete icon "></i>:"Add Link" }</button>
                <br></br>
                <br></br>
                {addtoggle  ? <Add  onAdd={addnewlink}/> : ""}
               </div>

               {links.length > 0 ?
               ( <Link key={links.id} links={links} addnewlink={addnewlink} deletelink={deletelink}/> ) 
                        : 
                        
                        (
                        <div className="ui center aligned container ">
                        <br></br>
                <h3>No links to show</h3>
            </div>
                        )}
                    </div>
 



            // <div className=" center aligned container ">
            //     <br></br>
            //     <div className="ui center aligned active huge text loader">Fetching data</div>
            //  </div>
)
}

export default Main

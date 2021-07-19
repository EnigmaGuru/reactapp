

import './component.css'
function Link({links,deletelink}) {

   
   
    const ondelete =async (id)=>{
    
            
        await fetch(`http://localhost:8000/link/${id}`,
        {
            method:'DELETE'
        
        }
        )
        deletelink(id)
        
        }

    //  const addlink =(newlink)=>{
    //     addnewlink(newlink);
    // }
    
    return (
        <div className="ui center segment aligned">
  
                
                
                
                <br></br>
            {links.slice(0).reverse().map((li)=>(
                
                <>
                    <div className="ui text container">
                        <div className="ui segments">
                            <div className="ui segment">
                                <h3 className="ui header">{li.title} </h3>
                                <a href={"http://"+li.link} ><i className="chain  icon "></i>{li.link}</a>
                                <div className="ui right aligned container">
                                       <button  onClick={()=>ondelete(li.id)} className="ui tiny red button"><i className="trash icon "></i>Delete</button>

                                </div>
                              
                            </div>
                        </div>
                        <br></br>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Link

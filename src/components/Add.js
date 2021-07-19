import {useState} from 'react'
const Add = ({onAdd}) => {
    const [title, settitle] = useState("")
    const [link, setlink] = useState("")

    const onSubmit =(e)=>{
        e.preventDefault()
        if(!link || !title){
            alert('ayo bruh ')
            return
        }

        onAdd({title,link})
        settitle('')
        setlink('')
    }
    return (
        <div className="ui left aligned  grid">
        
        <div className="ui three wide column"></div>
            <form className="ui eleven wide column form" onSubmit={onSubmit}>
                                <div className="ui segment">
                                <h2>Add a Link:</h2>
                         <div className=" field">
                    <label> <h3>Title</h3></label>
                    <input type="text" name="title" placeholder="Title" value={title} onChange={(e)=>settitle(e.target.value)}></input>
                </div>
                <div className=" field">
                    <label><h3>Link</h3></label>
                    <input type="text" name="last-name" placeholder="Link" value={link} onChange={(e)=>setlink(e.target.value)}></input>
                </div> 
                    
                <button className="ui button" type="submit">Submit</button>  
                </div>
                   
               
            </form>
        </div>
    )
}

export default Add

import React from 'react'
import "../ProfileApp.css"
import Header from './Header.jsx'
import Profile from './Profile.jsx'
import Project from './Project'
import Details from  './Details.jsx'
import Description  from './Description'
const Window = () => {
  return (
    <div className='Window' >
<Header />
<div className="main">

<div className="one"><Project/></div>
<div className="two"><Profile/></div>
<div className="three">< Details /></div>
<div className="four"><Description /></div>
</div>
<div className="batches">

</div>
    </div>
  )
}

export default Window
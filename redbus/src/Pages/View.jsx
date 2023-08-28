import React from 'react'
import Breadcrumbs from '../Components/Viewpage/Breadcrumbs'
import Board from '../Components/Viewpage/Board'
import Sidebar from '../Components/Viewpage/Sidebar'

import BusBoard from '../Components/Viewpage/BusBoard'
function View() {
  return (
    <div>
      <Breadcrumbs />
    
   
      <div className='row container-fluid'>
        <div className="col-md-2 col-3"><Sidebar /></div>
        <div className="col-md-10 col-12">
          <div className='row '>
            <div className='col-12'><Board/></div>
            <div className='col-12' style={{padding:"0"}}><BusBoard/></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default View

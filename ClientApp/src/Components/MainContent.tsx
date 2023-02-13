import React from 'react'
import 'bulma/css/bulma.css'
import ToolList from './ToolTile'

function MainContent() {
  return (
    <main className="section">
      <div className="container">
        <ToolList tools={[]} />
      </div>
    </main>
  )
}

export default MainContent

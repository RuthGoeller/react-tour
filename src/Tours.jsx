import React from 'react'
import Tour from './Tour'

function Tours({tours, removePost}) {
    return <section>
  <section>
    <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
    </div>
    <div className="tours">
        {tours.map((tour)=>{
return <Tour key={tour.id} {...tour} removePost={removePost}/>
        })}
    </div>
  </section>
</section>
    
  
}

export default Tours



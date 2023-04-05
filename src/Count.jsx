import React, { memo, useEffect } from 'react'

function Count({count,increment}) {
    useEffect(()=>{
        console.log("count component render")
    })
  return (
    <div>Count:{count}
   <button onClick={increment}>Add Count</button>
    </div>

  )
}

export default memo(Count)
import React from 'react'

const Thead = ({arrayTh}) => {
  return (
    <thead>
      <tr>
        {
          arrayTh.map((th) => (
            <th key={th}>{th}</th>
          )) 
        }
      </tr>
    </thead>
  )
}

export default Thead
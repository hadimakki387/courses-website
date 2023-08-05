import React from 'react'

function SubmitButton({fetchData}:any) {
  return (
    <button onClick={fetchData} className="bg-red-800 w-1/2 rounded-md m-auto py-2 hover:bg-red-700">
            submit
          </button>
  )
}

export default SubmitButton
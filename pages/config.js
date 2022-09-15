import React from 'react'

export default function Config() {
  const [error, setError] = React.useState()
  const [port, setPort] = React.useState({port: 3000})
  const handleChange = (event) => {
    setPort(prevData => {
        return {
            ...prevData,
            [event.target.name]: event.target.value
        }
    })
  }
  return (
    <div className='flex justify-center items-center w-full h-[95vh] flex-col gap-5'>
      <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-[#ff3c83]">
        Configure proxy server
      </h1>
      <div className='flex flex-col gap-2'>
        <p>Enter your HomeDisk port below</p>
        <input
          type="text"
          className='text-black'
          placeholder="Enter your port"
          name="port"
          value={port.port}
          onChange={handleChange}
        />
        <p>{error}</p>
        <button>Submit</button>
      </div>
    </div>
  )
}

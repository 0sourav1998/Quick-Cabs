import React from 'react'
import { CiTimer } from 'react-icons/ci'
import { FaNotesMedical } from 'react-icons/fa6'
import { IoMdSpeedometer } from 'react-icons/io'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
              src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
              alt="Driver"
            />
            <h4 className="text-lg font-medium text-gray-800">Harsh Patel</h4>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-gray-900">Rs 298.20</h5>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex p-3 mt-12 bg-gray-50 rounded-lg items-start justify-around shadow-md">
          <div className="text-center">
            <CiTimer className="text-3xl text-blue-600 mb-2" />
            <h5 className="text-lg font-medium text-gray-800">10.5</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="text-center">
            <IoMdSpeedometer className="text-3xl text-green-600 mb-2" />
            <h5 className="text-lg font-medium text-gray-800">45 km/h</h5>
            <p className="text-sm text-gray-600">Average Speed</p>
          </div>
          <div className="text-center">
            <FaNotesMedical className="text-3xl text-red-600 mb-2" />
            <h5 className="text-lg font-medium text-gray-800">5 Trips</h5>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
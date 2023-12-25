import React from 'react';
import './About.scss';
const About = () => {
  return (
    <div  className="about bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2">
      {/* Sub Div 1 */}
      <div className="mb-4 p-4 bg-blue-300 rounded">
        <h2 className="text-lg font-semibold">Sub Div 1</h2>
        <p>Your content goes here.</p>
      </div>

      {/* Sub Div 2 */}
      <div className="mb-4 p-4 bg-green-300 rounded">
        <h2 className="text-lg font-semibold">Sub Div 2</h2>
        <p>Your content goes here.</p>
      </div>

      {/* Sub Div 3 */}
      <div className="mb-4 p-4 bg-yellow-300 rounded">
        <h2 className="text-lg font-semibold">Sub Div 3</h2>
        <p>Your content goes here.</p>
      </div>

      {/* Sub Div 4 */}
      <div className="p-4 bg-red-300 rounded">
        <h2 className="text-lg font-semibold">Sub Div 4</h2>
        <p>Your content goes here.</p>
      </div>
    </div>
  </div>
  )
}

export default About

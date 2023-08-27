import React from 'react'

const Founder = () => {
    const LinkedinLink  = () => {
        window.open('https://www.linkedin.com/in/vivekdwivedisciastra/?originalSubdomain=in', '_blank')
    }
  return (
    <div>
       <div className='text-4xl font-bold text-purple-600  mb-12 text-center font-serif mt-[50px]'>
       Founder
        </div> 
       
<img className='w-[200px] h-[200px] ml-[500px] rounded-lg border-[2px] border-black shadow-lg' src='https://media.licdn.com/dms/image/D4D03AQEQuY0lkYhV-w/profile-displayphoto-shrink_800_800/0/1673874765972?e=1698883200&v=beta&t=k2xiWOVnmFDeLdgiX1WADbr0HMnbJuhnEwwyKjllSjg'/>
<div className='mt-1 mb-6'>
<p className='text-3xl text-gray-700 '>Vivek Dwivedi </p>
 <p className='text-1xl text-gray-400'>Founder SciAstra, Mentor,</p>
 <p className='text-1xl text-gray-400'>Qualified NEST, JEE advanced,</p>  
 <p className='text-1xl text-gray-400'>Mains, Master's Student at NISER</p>
 <button onClick={LinkedinLink} className='mt-[8px] mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'> Message him now</button>
</div>

    </div>
  )
}

export default Founder
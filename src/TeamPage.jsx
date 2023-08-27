import React, { useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Founder from './Founder';



const University = [
 {
  id:1,
  university: 'Cambridge',
  url:'https://www.logo.wine/a/logo/University_of_Cambridge/University_of_Cambridge-Logo.wine.svg',
 },
 {
  id:2,
  university: 'Harvard',
  url:'https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png',
 },
 {
  id:3,
  university: 'University of California',
  url:'https://www.condorhigh.us/wp-content/uploads/2019/05/UC-Logo-e1439505916703.png',
 },
 {
  id:4,
  university: 'ETZ Zurich',
  url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Universit%C3%A4t_Z%C3%BCrich_logo.svg/1200px-Universit%C3%A4t_Z%C3%BCrich_logo.svg.png',
 }, 
];

const University2 = [
  {
   id:1,
   university: 'Max Plank',
   url:'https://www.demogr.mpg.de/media/12039_main.png',
  },
  {
   id:2,
   university: 'University of Edinberg',
   url:'https://download.logo.wine/logo/University_of_Edinburgh/University_of_Edinburgh-Logo.wine.png',
  },
  {
   id:3,
   university: 'Johns Hopkins',
   url:'https://brand.jhu.edu/assets/uploads/sites/5/2014/06/university_logo_small_vertical_blue.png',
  },
  {
   id:4,
   university: 'Michigan State University',
   url:'https://noirlab.edu/public/media/archives/logos/screen/logo031.jpg',
  },
  
  
 ];

 const University3 = [
  {
   id:1,
   university: 'University of illionois',
   url:'https://marketing.illinois.edu/wp-content/uploads/2021/09/logo-internal-collaboration-1024x423.png',
  },
  {
   id:2,
   university: 'humboldt universität of berlin ',
   url:'https://www.hu-berlin.de/++resource++humboldt.logo.Logo.svg',
  },
  {
   id:3,
   university: 'Imperial College London',
   url:'https://allvectorlogo.com/img/2019/07/imperial-college-london-logo-vector.png',
  },
  {
   id:4,
   university: 'Massachusetts institute of technology ',
   url:'https://logos-world.net/wp-content/uploads/2021/09/MIT-Massachusetts-Institute-of-Technology-Logo.png',
  },
  
  
 ];

const ProfessorData = [
  {
    id: 1,
    name: 'John Doe',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=2',
  },
  {
    id: 2,
    name: 'Jane Smith',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=3',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 4,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 5,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },
  {
    id: 6,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 7,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 8,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },
  

 

  // Add more professor data...
];

const ProfessorData2 = [
  {
    id: 1,
    name: 'John Doe',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=2',
  },
  {
    id: 2,
    name: 'Jane Smith',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=3',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 4,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 5,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },
  {
    id: 6,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 7,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 8,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },

 

  // Add more professor data...
];
const ProfessorData3 = [
  {
    id: 1,
    name: 'John Doe',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=2',
  },
  {
    id: 2,
    name: 'Jane Smith',
    university: 'Business',
    imageUrl: 'https://picsum.photos/200/300/?image=3',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 4,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 5,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },
  {
    id: 6,
    name: 'Michael Johnson',
    university: 'Tech University',
    imageUrl: 'https://picsum.photos/200/300/?image=4',
  },
  {
    id: 7,
    name: 'Emily Williams',
    university: 'Art Institute',
    imageUrl: 'https://picsum.photos/200/300/?image=5',
  },
  {
    id: 8,
    name: 'Robert Davis',
    university: 'Business School',
    imageUrl: 'https://picsum.photos/200/300/?image=6',
  },

 

  // Add more professor data...
];

const TeamPage = () => {

  const elementRef = useRef();
  const elementRef2 = useRef();
  const elementRef3 = useRef();

  const sliderRight = (element) => {
    element.scrollLeft+=900;
  }
  const sliderLeft = (element) => {
    element.scrollLeft-=900;
  }

  const sliderRight2 = (element2) => {
    element2.scrollLeft+=900;
  }
  const sliderLeft2 = (element2) => {
    element2.scrollLeft-=900;
  }
  const sliderRight3 = (element3) => {
    element3.scrollLeft+=900;
  }
  const sliderLeft3 = (element3) => {
    element3.scrollLeft-=900;
  }
  return (
   

    <div className="py-5">
      <h1 className='text-5xl font-bold text-purple-600  mb-12 text-center font-serif'>Learn from Scientists, research Scholars from top institutes in the World</h1>
      <div className='flex items-center justify-center min-w-full gap-7 object-cover rounded-md scrollbar-none '>
      {University.map( logo => (
          <div key={logo.id}> 
        <div className='w-[200px] h-[130px] border-[3px] border-black shadow-md '> <img src={logo.url}/> </div>    
         </div>
        ))}
      </div>

      <div className='flex mt-10 items-center justify-center min-w-full gap-7 object-cover rounded-md scrollbar-none shadow-md'>
      {University2.map( logo => (
          <div key={logo.id}> 
        <div className='w-[200px] h-[130px] border-[3px] border-black shadow-black'> <img src={logo.url}/> </div>    
         </div>
        ))}
      </div>

      <div className='flex mt-10 items-center justify-center min-w-full gap-7 object-cover rounded-md scrollbar-none shadow-md'>
      {University3.map( logo => (
          <div key={logo.id}> 
        <div className='w-[200px] h-[130px] border-[3px] border-black'> <img src={logo.url}/> </div>    
         </div>
        ))}
      </div>
      <div>
        <Founder/>
      </div>
      
      <HiChevronLeft className='text-[50px] absolute mx-[150px] mt-[225px] cursor-pointer' onClick={()=>sliderLeft2(elementRef2.current)}/>
        <HiChevronRight className='text-[50px] absolute mx-[150px] mt-[225px] cursor-pointer right-0' onClick={()=>sliderRight2(elementRef2.current)}/>
      

       <div className='Meet your mentors'>

        </div>  
      <h1 className='text-3xl font-bold text-blue-500  mb-5 text-center mt-12'>Meet Your Mentors</h1>
      <h1 className='text-3xl font-bold text-blue-800  mb-5 text-left ml-14'> Physics </h1>
      <div className="flex gap-1 w-full p-4 px-3  object-cover justify-center items-center ">
        <div className='flex w-[850px] scrollbar-none p-4 gap-20  max-w-screen-xl overflow-x-auto scroll-smooth' ref={elementRef2}>
        {ProfessorData.map(professor => (
          <div key={professor.id} className="rounded-lg">
            <img src={professor.imageUrl} className="  w-[100px] h-[100px] rounded-full mr-10 ml-10 p-1" />
            <h2 className=" gap-18  ml-[55px] justify-center items-center text-sm font-semibold">{professor.name}</h2>
            <p className="ml-[40px] text-gray-600">{professor.university}</p>
          </div>
        ))}
        </div>
      

    
          
      </div>

      <div>
         <HiChevronLeft className='text-[50px] absolute mx-20 mt-[110px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='text-[50px] absolute mx-20 mt-[110px] cursor-pointer right-0'onClick={()=>sliderRight(elementRef.current)}/>
<h1 className='text-3xl font-bold text-blue-800  mb-5 text-left ml-14'> Chemistry </h1>
<div className='flex gap-1 w-full p-4 px-3  object-cover justify-center items-center'> 
<div className='flex w-[850px] scrollbar-none p-4 gap-20  max-w-screen-xl overflow-x-auto scroll-smooth' ref={elementRef}>
{ProfessorData2.map(professor2 => (
          <div key={professor2.id} className="rounded-lg">
            <img src={professor2.imageUrl} className="  w-[100px] h-[100px] rounded-full mr-10 ml-10 p-1" />
            <h2 className="  gap-18  ml-[55px] justify-center items-center text-sm font-semibold">{professor2.name}</h2>
            <p className="text-gray-600">{professor2.university}</p>
          </div>
        ))}
</div>

</div>

  </div>

  <div>
        <HiChevronLeft className='text-[50px] absolute mx-20 mt-[110px] cursor-pointer' onClick={()=>sliderLeft3(elementRef3.current)} />
        <HiChevronRight className='text-[50px] absolute mx-20 mt-[110px] cursor-pointer right-0' onClick={()=>sliderRight3(elementRef3.current)}/>
<h1 className='text-3xl font-bold text-blue-800  mb-5 text-left ml-14'> Biology </h1>
<div className='flex gap-1 w-full p-4 px-3  object-cover justify-center items-center'> 
<div className='flex w-[850px] scrollbar-none p-4 gap-20  max-w-screen-xl overflow-x-auto scroll-smooth' ref={elementRef3}>
{ProfessorData3.map(professor3 => (
          <div key={professor3.id} className="rounded-lg">
            <img src={professor3.imageUrl} className="  w-[100px] h-[100px] rounded-full mr-10 ml-10 p-1" />
            <h2 className="  gap-18  ml-[55px] justify-center items-center text-sm font-semibold">{professor3.name}</h2>
            <p className="text-gray-600">{professor3.university}</p>
          </div>
        ))}
</div>

</div>

  </div>


    </div>

    
  
  );
};

export default TeamPage;

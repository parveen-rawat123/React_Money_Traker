import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section_two = () => {
  useEffect(()=>{
    AOS.init({duration:'1500', delay : 100,
    })
  },[])
  return (
   <>
   <div className="h-[25rem] w-full flex justify-center items-center">
     <div className="flex  items-center justify-center w-[60rem]">
        <img src="image_one.jpg" alt="image"  width={500} height={500} data-aos = "fade-right"   data-aos-offset="200"/>
        <p className="text-[1.2rem]" data-aos = "fade-left"   data-aos-offset="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, praesentium aspernatur illum necessitatibus sed recusandae nostrum accusantium nemo ullam odit?</p>
     </div>
    </div>   
   <div className="h-[25rem] w-full flex justify-center items-center">
     <div className="flex items-center justify-center w-[60rem] pl-16">
        <p className="text-[1.2rem]" data-aos="fade-up-right" data-aos-offset="200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, praesentium aspernatur illum necessitatibus sed recusandae nostrum accusantium nemo ullam odit?</p>
        <img src="image_two.jpg" alt="image"  width={400} height={400} data-aos="fade-up-left" data-aos-offset="200"/>
     </div>
    </div>  
   </>
  )
}
export default Section_two

import { PlayCircle, Star } from 'lucide-react'
import './Hero.css'

const Left = () => {
  return (
    <div className='left'>
        <div className='text-body'>
            <h1
        className='text-title'
        >Breath Natural</h1>
<div className='flex justify-center items-center'>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
       </div>

<div className="icons flex justify-evenly items-center md:relative md:left-44" >
    <button className='btn'> 
        explore
    </button>
    <div className="demo flex justify-evenly items-center">
      
        <div className="icondemo">
        <PlayCircle size={40} />

        </div>
        <span>life Demo...</span>
    </div>
</div>
<div className="alina-contant relative md:left-3.5 md:top-10 top-10">
<div className="alina  flex relative left-10 top-5">
    <div className="image-user">
<img src="https://s3-alpha-sig.figma.com/img/c288/0a28/770e9b4d669d837a65f88f0748c6911b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fmZGjBB4YodVJVUpojBU1k5MU77f8nc3MfiifjvpAP-o5ZSBlOr7Hzb8Z6e1toe8E2szvjotiScn2rG0IFx~EddwxPQufloy0rQbloIpdEkThyP2WJNNvMW9EBwPvnI8IXsKuu0UWaZ7MpSgEd2o-h-H3pLVQ7ar-vfsmYSETbT9W9q8uBbTbXMFa4q7N8BWfom-UgKdqMfet25nugd4pwtm~6jsyTZe0yBACLr3JSd2D6rpKDRGsFNVvXR1WS9tZXx2FZLP3rwp1Ajo7l~QviYVGuXAU-5e0A14VYETihX0sl899ZBSTERu4AaqmC1Ef-d8GPu7jXVs5-OyAFsXoQ__" alt="" />

    </div>
   
  <div className="star-h3 block relative left-5">
  <h3>alina user</h3>
  <div className="star relative left-5">
        <Star color='yellow' size={16}></Star>
        <Star color='yellow' size={16}></Star>
        <Star color='yellow' size={16}></Star>
        <Star color='yellow' size={16}></Star>
    </div>
  </div>
 
</div>
<p className=' relative top-5 left-3.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, doloremque?</p>

</div>

   </div>
    </div>
  )
}

export default Left
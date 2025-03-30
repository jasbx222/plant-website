import { MoveRight } from 'lucide-react'
import './Hero.css'
const Right = () => {
  return (
    <div className='right hidden md:block -z-20 md:relative md:top-28'>
      <div className="image block z-30 md:relative md:bottom-32">
<img src="https://s3-alpha-sig.figma.com/img/c8eb/5b1a/bede1308e0eaf899d1f7faae62a0c2f6?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C2KYVydjSxEj9I~ezeO14cU4riELGU07zRxJdQ~MKNuS9pwrI3v8wSnvdYKDfjMjoEZAmh9bvDIrrMoRX2eqPlhjU50xFfWHkYx7BcKeezptt5NVAyp5NvpXpk05rpl~ZcxFhzjW76g~yAiq8rrBc8nKrsQjc8Yy2UCf6keRwGabPENHVcc3dzF~l94pfbUxUv1znx98Q7F1CNxE8~zgxwngnLRfSEAO7jWX4IHyKReSfgLUovNa~rYhNhRNi6z6X4hrp8LsJ7yYo2mlvsXQUlQzQxxdUma1D7asJDhp8P9iCkYYnWnldRA3ezuzyElNrjmpYwA6MuMlMrWyGBBUiw__" alt="" />

      </div>
      <p className='text-center text-white md:relative md:right-5 md:bottom-10'>Trendy House Plant</p>
      <div className="containt block text-center">
<h3 className='text-center  text-white md:relative  md:bottom-7  flex justify-around items-center'>CalaThea Plant <MoveRight/></h3>
   <button className='btn md:relative  md:bottom-3'>
    Buy Now
   </button>
      </div>
    </div>
  )
}

export default Right
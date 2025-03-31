"use server"


export async function register(state,formData) {
   const email=formData.get('email')

   const data ={
    email:email
   }
   console.log(data)
}
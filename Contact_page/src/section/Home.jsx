import React, { useState } from 'react'
import contactImg from '../assets/images/contact.svg'
function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("Hi! NIKE is here to help you ❤️");



 const onSubmit = (e) => {
 console.log(e)
  e.preventDefault(); // Prevent default form submission behavior
  setname( e.target[0].value);
  setemail( e.target[1].value);
  settext(e.target[2].value);
  
 }





  return (


    
    
<div className="bg-white h-[80vh] mx-[15%] mt-10 shadow-lg border border-gray-200 rounded-lg overflow-hidden">
  {/* Header Section */}
  <div className="bg-white text-black px-8 py-6">
    <h1 className="text-3xl font-bold mb-2">CONTACT US</h1>
    <p className="text-sm text-gray-700 leading-relaxed">
      LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR
      JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR
      SOCIAL MEDIA.
    </p>
  </div>

  {/* Content Section */}
  <div className="flex h-[calc(80vh-150px)]">
    {/* Left Side: Form */}
    <div className="w-[60%] bg-white p-8 flex flex-col justify-center">
      {/* Contact Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
       
        >📩 VIA SUPPORT CHAT</button>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
         
        >📞 VIA CALL</button>

      </div>
      <button className="border border-black text-black px-4 py-2 mb-6 w-fit rounded hover:bg-gray-100">
        VIA EMAIL FORM
      </button>

       

      {/* Form Inputs */}
      <form action="" 
      className="flex flex-col gap-4"
       onSubmit={onSubmit}
      > 
       
      
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="email"
          placeholder="E-Mail"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="TEXT"
          rows="4"
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        <button className="bg-black text-white py-2 rounded hover:bg-gray-800"
          
        >SUBMIT</button>
      </form>
    </div>

    <div className="bg-black border-2 border-gray-200 p-6 w-[20%]  justify-center text-2xl font-mono absolute left-[40%] bottom-[50%] text-white rounded-lg">
   { name && <p className="text-sm text-gray-700">Name: {name}</p>}
   { email && <p className="text-sm text-gray-700 ">Email: {email}</p>}

   { text && <p className="text-sm text-emerald-700">{`Our Team will contact you  ${name} soon `}</p>}
  </div>

   

    {/* Right Side: Image */}
    <div className="w-[40%] bg-white flex justify-center items-center mt-14">
      <img src={contactImg} alt="Support Illustration" className="w-full h-auto object-contain" />
    </div>
  </div>
  
</div>




  )
}

export default Home

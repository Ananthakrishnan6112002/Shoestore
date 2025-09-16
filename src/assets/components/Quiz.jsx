import React, { useState } from 'react'
import Navbar from './Navbar'
const Quiz = () => {
    const quizarray=[
        {
           question:"Which feeling is important to you when it comes to your shoes?",
           options:[{label:"A",ans:"A light,cushiony feeling thats somewhat springy"},{label:"B",ans:"A light,cushiony feeling thats somewhat springy"},{label:"c",ans:"A light,cushiony feeling thats somewhat springy"}] ,
        },
        {
           question:"I spend more time on my feet:",
           options:[{label:"A",ans:"A light,cushiony feeling thats somewhat springy"},{label:"B",ans:"A light,cushiony feeling thats somewhat springy"},{label:"c",ans:"A light,cushiony feeling thats somewhat springy"}] ,
        },
        
        {
           question:"Last question Which feeling is important to you when it comes to your shoes?",
           options:[{label:"A",ans:"A light,cushiony feeling thats somewhat springy"},{label:"B",ans:"A light,cushiony feeling thats somewhat springy"},{label:"c",ans:"A light,cushiony feeling thats somewhat springy"}] ,
        
        }
    ]
    const[current,getcurrent]=useState(0);
    const[selectedoption,setopt]=useState(null);
    const[responses,setresponses]=useState([]);
    const[nextbutton,setnextbutton]=useState(false);
    const[quizcompleted,setquizcompleted]=useState(false);

    const handlenext=()=>{
   if(current<quizarray.length-1){
    getcurrent(current+1)
    
   }
   else{
setquizcompleted(true);
getcurrent(0);
   }
  if(selectedoption){
    setresponses([...responses,selectedoption])
    setopt(null);
   }
}
 
  return (
    <div>
      <Navbar />
      
      <div className='flex justify-center items-center h-screen mt-16'>
        {quizcompleted===false?(
        <div className='w-[45rem] h-[25rem] rounded-4xl border-2 bg-gray-100 '>
         <div>
            <p className=' text-2xl max-w-xl ml-16'>{quizarray[current].question}</p>
            {
quizarray[current].options.map((opt,i)=>(
    
<div>
    <button onClick={()=>setopt({label:opt.label,ans:opt.ans})} className={` py-3 px-12 rounded-4xl mt-4 ml-10 hover:cursor-pointer hover:shadow-2xl'
        ${selectedoption?.label=== opt.label ?"bg-black text-white":"bg-white text-black"}`}
        
        ><div className='flex gap-4'>
            <p className='hover:bg-black hover:text-white border-2 px-6 py-2 rounded-4xl'>{opt.label}</p>
    <p>{opt.ans}</p>
    </div>
    </button>
</div>
)

)


            }
         </div>
          <button onClick={()=>handlenext()} className=' bg-black text-white py-3 px-12 rounded-4xl mt-10 ml-10 hover:cursor-pointer hover:shadow-2xl'>{current===quizarray.length-1?"Finish":"Next question"}</button>
        </div>
        ):(
        // Quiz completed screen
        <div>
          <h2 className="text-xl font-bold mb-4">Quiz Completed!</h2>
          <p>Your responses:</p>

          {
          quizarray.map((opt,i)=>(
               <div className='mt-8' key={i}><p className='text-2xl mb-2'>{opt.question}</p> 
                <ul className="list-disc list-inside">
                <li>{responses[i]?.ans}</li>
                  </ul></div>
          ))
          }
        </div>
      )}

      </div>
        
    </div>
    )
}

export default Quiz
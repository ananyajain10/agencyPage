import React from 'react'

type Props = {}

const About = (props: Props) => {
    const AssistanceWays = ["Automated Images Generation","Automated Images Generation","Automated Images Generation","Automated Images Generation"]
  return (
    <main>
        <h1 className='text-4xl'>Assistance Ways For social Reach</h1>
    <div className='flex rounded p-4 gap-5  '> 
        
       { AssistanceWays.map((d,i) => {
       return  <section key={i} className='rounded bg-slate-300 w-30 h-50'>{d}</section>

       }) 
       }
       
    </div>
    </main>
  )
}

export default About
import { motion } from "motion/react"


const journey = [

{
year:"2023",
title:"Stepping Into Tech 💻",
description:
"Started my engineering journey with curiosity, learning programming fundamentals and understanding how ideas can turn into real solutions."
},


{
year:"2024",
title:"Beyond Classrooms 🎓",
description:
"Explored hackathons, technical events, and presentations. Learning teamwork, problem solving, and building confidence along the way."
},


{
year:"2025",
title:"Finding My Direction 🤖",
description:
"Dived deeper into AI, data, and development. Started creating projects that connect technology with real-world problems."
},


{
year:"2026",
title:"Building With Purpose ✨",
description:
"Built impactful solutions, won hackathons, joined the Google Student Ambassador journey, and continued growing as a builder."
}

]


function Journey(){


return(

<section

id="journey"

className="

min-h-fit
md:min-h-screen

flex
flex-col

items-center
justify-center

text-white

px-6
md:px-10

py-16
md:py-20

"

>


<motion.h2

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="

text-4xl
md:text-5xl

font-bold

mb-12
md:mb-20

"

>

My Journey

</motion.h2>





<div className="relative max-w-5xl w-full">


<div

className="

absolute

left-1/2

top-0

h-full

w-[2px]

bg-gradient-to-b

from-cyan-400

to-purple-500

hidden

md:block

"

/>





{

journey.map((item,index)=>(


<motion.div


key={index}


initial={{

opacity:0,

x:index%2===0 ? -80 : 80

}}


whileInView={{

opacity:1,

x:0

}}


transition={{

duration:0.8

}}



className={`

mb-8
md:mb-12

flex

${index%2===0 ? "md:justify-start" : "md:justify-end"}

`}

>


<div


className="

w-full

md:w-[45%]


p-6
md:p-8


rounded-3xl


bg-white/10


backdrop-blur-xl


border

border-cyan-400/30


shadow-xl

shadow-cyan-500/10


hover:scale-105


transition-all

duration-300

"


>


<h3 className="text-3xl md:text-4xl font-bold text-cyan-400">

{item.year}

</h3>



<h4 className="text-xl md:text-2xl font-bold mt-3">

{item.title}

</h4>



<p className="text-gray-300 mt-4 leading-relaxed">

{item.description}

</p>



</div>


</motion.div>


))

}


</div>


</section>

)

}


export default Journey
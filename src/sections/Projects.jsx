import { motion } from "motion/react"


const projects = [

{
name:"GoldenHour 🚑",
highlight:true,

type:"AI Emergency Response System",

description:
"An AI-powered emergency coordination platform connecting ambulances, hospitals, and police departments to share critical information faster and help hospitals prepare before patient arrival.",

tech:[
"React",
"Supabase",
"Gemini AI",
"Real-time Coordination"
]
},


{
name:"Saathi 🤝",
type:"AI Student Success Companion",

description:
"A digital companion designed to support students by helping them discover scholarships, opportunities, and guidance throughout their educational journey.",

tech:[
"React",
"Gemini AI",
"Student Platform"
]
},


{
name:"Stock Prediction 📈",
type:"Machine Learning Analysis",

description:
"Analyzed historical stock data and built machine learning models to understand patterns and predict long-term market trends.",

tech:[
"Python",
"Machine Learning",
"LSTM"
]
},


{
name:"AI Portfolio ✨",
type:"Interactive Portfolio",

description:
"Designed a personal portfolio experience with storytelling, animations, voice introduction, and modern frontend technologies.",

tech:[
"React",
"Tailwind",
"Framer Motion"
]
}

]




function Projects(){


return(

<section

id="projects"

className="

min-h-fit
md:min-h-screen

text-white

flex
flex-col

items-center
justify-center

px-6
md:px-10

py-16
md:py-24

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
md:mb-16

text-center

"

>


Ideas I've Built


</motion.h2>







<div

className="

grid

grid-cols-1
md:grid-cols-2

gap-8

max-w-6xl

w-full

"

>





{

projects.map((project,index)=>(



<motion.div


key={index}


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}



whileHover={{
scale:1.03,
y:-10
}}



transition={{
duration:0.7
}}



className={`


p-6
md:p-7


rounded-3xl


bg-white/10


backdrop-blur-xl


border


${project.highlight 
?
"border-cyan-400/60 shadow-cyan-500/30"
:
"border-cyan-400/30 shadow-cyan-500/20"
}


shadow-xl


transition-all


`}


>



{
project.highlight &&

<p className="text-cyan-400 mb-4">

Featured Project ✨

</p>

}




<h3

className="

text-2xl
md:text-3xl

font-bold

text-cyan-400

"

>

{project.name}

</h3>





<p

className="

text-lg
md:text-xl

mt-3

"

>

{project.type}

</p>







<p className="text-gray-300 mt-5 leading-relaxed">

{project.description}

</p>








<div className="flex flex-wrap gap-3 mt-6">


{

project.tech.map((item,i)=>(



<span


key={i}


className="

px-4

py-2


rounded-full


bg-cyan-400/10


text-cyan-300


text-sm

"


>


{item}


</span>


))

}


</div>



</motion.div>


))

}




</div>



</section>


)

}


export default Projects
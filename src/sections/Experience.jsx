import { motion } from "motion/react"


const experiences = [

{
role:"Data Analyst Intern 📊",

company:"Rixi Labs",

period:"2025",

description:
"Worked through the data analysis process. Exploring datasets, identifying patterns, creating insights, and understanding how data supports better decision-making.",

skills:[
"Python",
"Data Analysis",
"Visualization"
]

},


{
role:"Google Student Ambassador ✨",

company:"Google Student Ambassador Program",

period:"2026",

description:
"Growing through a community-driven journey by exploring AI, sharing knowledge, creating awareness, and helping students discover technology opportunities.",

skills:[
"Community",
"AI Learning",
"Leadership"
]

}

]




function Experience(){


return(

<section

id="experience"

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


Experience


</motion.h2>






<div className="max-w-4xl space-y-8 md:space-y-10">


{

experiences.map((exp,index)=>(



<motion.div


key={index}


initial={{
opacity:0,
x:index%2===0 ? -60 : 60
}}


whileInView={{
opacity:1,
x:0
}}


whileHover={{
scale:1.03,
y:-8
}}


transition={{
duration:0.7
}}



className="

relative


p-6
md:p-8


rounded-3xl


bg-white/10


backdrop-blur-xl


border
border-cyan-400/30


shadow-xl
shadow-cyan-500/20


transition-all

"


>



<div className="flex justify-between flex-wrap gap-4">



<div>


<h3

className="

text-2xl
md:text-3xl

font-bold

text-cyan-400

"

>


{exp.role}


</h3>



<p className="text-lg md:text-xl mt-2 text-gray-200">


{exp.company}


</p>


</div>





<span

className="

px-5
py-2

h-fit

rounded-full

bg-purple-500/20

text-purple-300

"

>


{exp.period}


</span>




</div>






<p className="text-gray-300 mt-6 leading-relaxed">


{exp.description}


</p>






<div className="flex flex-wrap gap-3 mt-6">


{

exp.skills.map((skill,i)=>(



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


{skill}


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



export default Experience
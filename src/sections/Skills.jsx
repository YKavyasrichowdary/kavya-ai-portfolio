import { motion } from "motion/react"


const skills = [

{
category:"AI & Data Intelligence 🤖",

description:
"Turning raw data into meaningful insights and intelligent solutions.",

items:[
"Machine Learning",
"Data Analysis",
"Python",
"Pandas",
"Data Visualization"
]

},


{
category:"Product Development ⚡",

description:
"Building interactive and user-focused digital experiences.",

items:[
"React",
"JavaScript",
"Tailwind CSS",
"HTML",
"CSS"
]

},


{
category:"Programming Foundation 💻",

description:
"Solving problems with strong programming fundamentals.",

items:[
"Java",
"C",
"SQL",
"Problem Solving"
]

},


{
category:"Developer Workflow 🛠️",

description:
"Tools I use to build, manage, and collaborate.",

items:[
"Git",
"GitHub",
"VS Code",
"Supabase"
]

}

]





function Skills(){


return(

<section

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


My Builder Toolkit


</motion.h2>







<div

className="

grid

grid-cols-1
md:grid-cols-2

gap-8

max-w-5xl

w-full

"

>


{

skills.map((skill,index)=>(




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
y:-8
}}



transition={{
duration:0.7
}}




className="


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




<h3

className="

text-2xl
md:text-3xl

font-bold

text-cyan-400

"

>


{skill.category}


</h3>





<p className="text-gray-300 mt-4 leading-relaxed">


{skill.description}


</p>







<div className="flex flex-wrap gap-3 mt-7">


{

skill.items.map((item,i)=>(




<span


key={i}


className="

px-4
py-2

rounded-full


bg-purple-500/20


text-gray-200


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



export default Skills
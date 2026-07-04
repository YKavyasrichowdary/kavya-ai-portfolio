import { motion } from "motion/react"


const achievements = [

{
number:"2",
title:"Hackathon Wins 🏆",
description:
"Built real-world solutions in competitive environments, collaborated with teams, and transformed ideas into working prototypes."
},


{
number:"₹28K",
title:"Prize Recognition ✨",
description:
"Earned recognition through technical competitions and hackathons by presenting impactful project ideas."
},


{
number:"Google",
title:"Student Ambassador 🎓",
description:
"Selected as a Google Student Ambassador to learn, share, and create meaningful experiences within the student community."
},


{
number:"🎤",
title:"Public Speaking",
description:
"Presented ideas through technical events, project showcases, and discussions while building confidence in communication."
}

]


function Achievements(){


return(

<section className="min-h-screen flex flex-col items-center justify-center text-white px-10">


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

className="text-5xl font-bold mb-16"

>

Beyond Code

</motion.h2>



<div className="grid md:grid-cols-4 gap-8">


{

achievements.map((item,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
scale:0.5
}}


whileInView={{
opacity:1,
scale:1
}}


whileHover={{
y:-10,
scale:1.03
}}


transition={{
duration:0.6
}}


className="
p-8

rounded-3xl

bg-white/10

backdrop-blur-lg

border

border-cyan-400/30

text-center

shadow-lg

shadow-cyan-500/20
"


>


<h3 className="text-5xl font-bold text-cyan-400">

{item.number}

</h3>



<h4 className="text-xl mt-5 font-bold">

{item.title}

</h4>



<p className="text-gray-300 mt-4 leading-relaxed">

{item.description}

</p>



</motion.div>


))

}


</div>


</section>

)

}


export default Achievements
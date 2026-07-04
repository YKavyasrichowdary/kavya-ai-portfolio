import { motion } from "motion/react"


function Community(){


return(

<section

className="

min-h-fit
md:min-h-screen

flex

items-center
justify-center

text-white

px-6
md:px-10

py-16
md:py-24

"

>


<motion.div


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:1
}}


className="

max-w-4xl


p-6
md:p-12


rounded-3xl


bg-white/10


backdrop-blur-xl


border

border-purple-400/30


shadow-xl

shadow-purple-500/20

"

>


<p

className="

text-cyan-400

text-lg
md:text-xl

"

>


Beyond Technology


</p>







<h2

className="

text-4xl
md:text-5xl

font-bold

mt-4

leading-tight

"

>


Building Ideas. Connecting People.


</h2>








<p

className="

text-gray-300

mt-8

text-lg
md:text-xl

leading-relaxed

"

>



For me, technology has never been only about writing code.

I enjoy understanding problems, sharing ideas, collaborating with people,
and turning discussions into something meaningful.



</p>








<div className="mt-10">



<h3

className="

text-2xl
md:text-3xl

font-bold

text-cyan-400

"

>


Growing Through Communities ✨


</h3>






<p className="text-gray-300 mt-5 leading-relaxed">



From presenting ideas to collaborating during hackathons and student initiatives,
communities helped me improve not just as a developer, but also as a communicator and team player.



</p>



</div>









<div className="flex flex-wrap gap-4 mt-10">



{

[

"Community Building",

"Public Speaking",

"Team Collaboration",

"Leadership"

].map((item,index)=>(


<span


key={index}


className="

px-5

py-2


rounded-full


bg-purple-500/20


text-gray-200


"


>


{item}


</span>


))


}



</div>





</motion.div>


</section>


)

}



export default Community
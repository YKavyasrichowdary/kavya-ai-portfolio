import { motion } from "motion/react"


function Background() {


return (


<div className="fixed inset-0 -z-10 overflow-hidden bg-black">


<motion.div

animate={{
x:[0,100,0],
y:[0,50,0]
}}

transition={{
duration:10,
repeat:Infinity
}}

className="
absolute 
top-20 
left-20
w-72
h-72
bg-cyan-500
rounded-full
blur-[150px]
opacity-60"

/>



<motion.div

animate={{
x:[0,-100,0],
y:[0,-80,0]
}}

transition={{
duration:12,
repeat:Infinity
}}

className="
absolute
bottom-20
right-20
w-96
h-96
bg-purple-600
rounded-full
blur-[170px]
opacity-60"

/>



<motion.div

animate={{
scale:[1,1.5,1]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
top-1/2
left-1/2
w-80
h-80
bg-blue-600
rounded-full
blur-[180px]
opacity-50"

/>



</div>


)

}


export default Background
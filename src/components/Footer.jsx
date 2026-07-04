import { motion } from "motion/react"


function Footer(){


return(

<footer
className="
py-10
text-center
text-white
"
>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

>


<p className="text-xl font-semibold">

Designed & Built by 
<span className="text-cyan-400"> Kavya Sri Chowdary</span>

</p>



<p className="text-gray-400 mt-3">

Turning ideas into meaningful digital experiences 

</p>



<p className="text-gray-500 mt-5 text-sm">

© 2026 • Built with React & curiosity

</p>



</motion.div>


</footer>

)

}


export default Footer
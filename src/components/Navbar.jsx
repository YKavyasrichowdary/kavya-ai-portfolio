import { motion } from "motion/react"


function Navbar(){


const links = [

{
name:"Home",
path:"#home"
},

{
name:"Journey",
path:"#journey"
},

{
name:"Projects",
path:"#projects"
},

{
name:"Experience",
path:"#experience"
},

{
name:"Contact",
path:"#contact"
}

]



return(


<motion.nav


initial={{
opacity:0,
y:-40
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:1
}}



className="

fixed

top-5

left-1/2

-translate-x-1/2

z-50


"

>



<div

className="

flex

items-center

justify-center


gap-3

md:gap-8


px-5

md:px-10


py-4


rounded-full


bg-white/10


backdrop-blur-xl


border

border-white/20


shadow-xl

shadow-purple-500/20


"

>


{


links.map((link,index)=>(


<a


key={index}


href={link.path}


className="

text-sm

md:text-base


font-semibold


text-white/90


hover:text-cyan-400


transition-all


whitespace-nowrap

"


>


{link.name}


</a>


))


}




</div>



</motion.nav>


)


}



export default Navbar
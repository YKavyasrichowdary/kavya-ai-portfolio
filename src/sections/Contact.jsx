import { motion } from "motion/react"


function Contact(){


return(


<section
id="contact"

className="

min-h-screen

flex
flex-col

items-center
justify-center

text-white

px-6

pt-32
pb-10

"
>


<motion.div


initial={{
opacity:0,
scale:0.8
}}


whileInView={{
opacity:1,
scale:1
}}


transition={{
duration:1
}}



className="

w-full

max-w-3xl

text-center


p-8

md:p-12


rounded-3xl


bg-white/10


backdrop-blur-xl


border

border-cyan-400/30


shadow-xl

shadow-cyan-500/20

"

>



<h2

className="

text-4xl

md:text-5xl

font-bold

leading-tight

text-center

"

>


Let's Build Something

<br />


<span className="text-cyan-400">

Meaningful

</span>


</h2>







<p

className="

text-gray-300

text-lg

md:text-xl

mt-8

leading-relaxed

"

>


I enjoy connecting with people who are curious about technology, ideas, and solving real problems.

Whether it's a project, collaboration, or an opportunity... I'm always open to meaningful conversations.


</p>








<div

className="

flex

flex-col

md:flex-row

justify-center

items-center

gap-5

mt-10

"

>



<a

href="mailto:kavyasriyadlapati@gmail.com"


className="

w-full

md:w-auto


px-8

py-3


rounded-full


bg-cyan-400


text-black


font-bold


shadow-lg

shadow-cyan-500/40

"

>


Email Me


</a>








<a


href="https://www.linkedin.com/in/kavya-sri-yadlapati-0433502a9"

target="_blank"



className="

w-full

md:w-auto


px-8

py-3


rounded-full


border

border-white/20


bg-white/5


backdrop-blur-xl


font-bold


hover:border-cyan-400


transition-all

"

>


LinkedIn


</a>








<a


href="https://github.com/YKavyasrichowdary"


target="_blank"



className="

w-full

md:w-auto


px-8

py-3


rounded-full


border

border-white/20


bg-white/5


backdrop-blur-xl


font-bold


hover:border-cyan-400


transition-all

"

>


GitHub


</a>




</div>





</motion.div>






<footer

className="

mt-14

text-center

text-gray-400

text-sm

"

>


<p>

Designed & Built by 

<span className="text-cyan-400 font-bold">

{" "}Kavya Sri Chowdary

</span>

</p>


<p className="mt-2">

Turning ideas into meaningful digital experiences ✨

</p>


<p className="mt-3">

© 2026 • Built with React & curiosity

</p>


</footer>





</section>


)


}



export default Contact
import { useRef, useState } from "react"
import { motion } from "motion/react"
import { TypeAnimation } from "react-type-animation"

import kavya from "../assets/kavya.png"
import voice from "../assets/kavya-story.mp3"


function Hero(){


const audioRef = useRef(new Audio(voice))
const [playing,setPlaying] = useState(false)


const playVoice = () => {


if(playing){

audioRef.current.pause()
setPlaying(false)

}

else{

audioRef.current.play()
setPlaying(true)

}


audioRef.current.onended = () => {

setPlaying(false)

}


}




return(

<section
id="home"

className="
min-h-screen

flex
flex-col

items-center
justify-center

text-white

px-6

pt-28

overflow-hidden
"
>



{/* PROFILE */}


<motion.div

initial={{
opacity:0,
scale:0.5
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="relative mb-7"

>


<div

className="
absolute

inset-0

rounded-full

border

border-cyan-400

animate-ping

opacity-20
"

></div>




<img

src={kavya}

className="

relative

w-32
h-32

md:w-44
md:h-44

rounded-full

object-cover

object-top

border-4

border-cyan-400

shadow-xl

shadow-cyan-500/40

"

/>


</motion.div>





<p className="text-cyan-400 text-lg mb-5">

Initializing AI Profile...

</p>






<motion.h1

initial={{
opacity:0,
y:50
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}


className="
text-4xl

md:text-6xl

font-bold

text-center
"

>

Hi, I'm{" "}

<span className="text-cyan-400">

Kavya Sri

</span>


</motion.h1>








<div

className="

mt-6

text-xl

md:text-3xl

font-semibold

text-center

min-h-[45px]

"

>


<TypeAnimation

sequence={[

"Google Student Ambassador ✨",
1000,

"I build AI Healthcare Solutions 🚑",
1000,

"I create Data Driven Products 📊",
1000,

"I turn ideas into impact 🚀",
1000

]}


speed={65}

repeat={Infinity}


/>


</div>









{/* BUTTONS */}



<div

className="
flex

flex-col

md:flex-row

items-center

gap-5

mt-10
"

>



<a

href="#projects"

className="

px-10

py-4

rounded-full

bg-cyan-400

text-black

font-bold

shadow-lg

shadow-cyan-500/40

"

>

Explore My Work 🚀

</a>







<a

href="#contact"


className="

px-10

py-4

rounded-full

border

border-cyan-400/40

bg-white/5

font-bold

backdrop-blur-xl

"

>

Let's Connect ✨

</a>








<a

href="/Kavya_Resume.pdf"

download


className="

px-10

py-4

rounded-full

bg-gradient-to-r

from-purple-500

to-pink-500

font-bold

shadow-lg

shadow-purple-500/40

"

>


Download Resume 📄


</a>



</div>










{/* VOICE CARD */}



<motion.button


onClick={playVoice}


whileHover={{
scale:1.05
}}


whileTap={{
scale:0.95
}}



className="

mt-8

flex

items-center

gap-4

px-6

py-4


rounded-2xl


bg-gradient-to-r

from-cyan-500/20

to-purple-500/20


border

border-cyan-400/40


backdrop-blur-xl


shadow-lg

shadow-cyan-500/30

"

>




<div

className="

w-12

h-12

rounded-full

bg-cyan-400

flex

items-center

justify-center

text-2xl

"

>

🎙️

</div>





<div className="text-left">


<p className="font-bold">

Kavya AI Intro

</p>


<p className="text-sm text-gray-300">

{playing ? "Tap to pause my story" : "Tap to hear my story"}

</p>


</div>




</motion.button>





</section>

)


}


export default Hero
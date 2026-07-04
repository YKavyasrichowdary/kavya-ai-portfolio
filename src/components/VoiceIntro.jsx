import { useRef, useState } from "react"
import { motion } from "motion/react"
import voice from "../assets/kavya-story.mp3"


function VoiceIntro(){


const audioRef = useRef(null)

const [playing,setPlaying] = useState(false)



const handleVoice = () => {


if(!audioRef.current){

audioRef.current = new Audio(voice)


audioRef.current.onended = () => {

setPlaying(false)

}

}



if(playing){

audioRef.current.pause()

setPlaying(false)

}

else{

audioRef.current.play()

setPlaying(true)

}


}




return(


<motion.div


onClick={handleVoice}


whileHover={{
scale:1.05,
y:-5
}}


whileTap={{
scale:0.96
}}



className="

mt-6

flex
items-center
gap-4

px-7
py-4

rounded-3xl

border
border-cyan-400/40


bg-gradient-to-r
from-cyan-400/10
via-purple-500/20
to-pink-500/10


backdrop-blur-2xl


shadow-xl
shadow-cyan-500/30


cursor-pointer


hover:border-cyan-300
hover:shadow-cyan-400/50


transition-all
duration-300

"


>



<div

className="

w-12
h-12

rounded-full

flex
items-center
justify-center


bg-gradient-to-br
from-cyan-400
to-purple-500


shadow-lg
shadow-cyan-400/40


text-xl

"

>


🎙️


</div>





<div className="text-left">



<p className="text-cyan-300 font-bold">


{

playing ?

"Kavya AI is speaking..."

:

"Kavya AI Intro"

}


</p>





<p className="text-gray-300 text-sm">


{

playing ?

"Sharing my journey ✨"

:

"Tap to hear my story"

}


</p>




</div>



</motion.div>


)


}



export default VoiceIntro
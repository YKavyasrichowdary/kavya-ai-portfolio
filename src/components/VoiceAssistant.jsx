import { motion } from "motion/react"


function VoiceAssistant() {


const speak = () => {


const message = new SpeechSynthesisUtterance(

"Initializing Kavya's AI profile. Hi there, welcome to my digital space. I'm Kavya Sri, a Data Science student, AI builder, hackathon winner, and Google Student Ambassador. From building healthcare AI solutions to creating impactful projects, my journey is about turning ideas into real world products. Scroll through my portfolio and explore my work, achievements, and story."

)


message.rate = 0.95

message.pitch = 1.1


window.speechSynthesis.speak(message)


}



return (


<motion.button


whileHover={{
scale:1.1
}}


whileTap={{
scale:0.9
}}


onClick={speak}


className="
fixed
bottom-8
right-8
px-6
py-4
rounded-full
bg-purple-600
text-white
font-bold
shadow-lg
shadow-purple-500/50
"


>


🎙️ Hear My Story


</motion.button>


)


}


export default VoiceAssistant
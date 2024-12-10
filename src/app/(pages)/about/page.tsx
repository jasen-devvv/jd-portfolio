import { FaGithub, FaLinkedin } from "react-icons/fa6"

export default function About() {
    const skills = [
        {name: 'HTML'},
        {name: 'CSS'},
        {name: 'JAVASCRIPT'},
        {name: 'PHP'},
        {name: 'PYTHON'},
        {name: 'GOLANG'},
        {name: 'BOOTSTRAP'},
        {name: 'TAILWINDCSS'},
        {name: 'CODEIGNITER'},
        {name: 'LARAVEL'},
        {name: 'REACT'},
        {name: 'VUE'},
        {name: 'NEXT JS'},
    ]

    return (
        <main className="w-full px-10">
            <div className="text-center mt-5">
                <h1>ABOUT</h1>
                <p className="lato-regular opacity-70">A little bit about who I and my skills.</p>
            </div>
            <div className="flex justify-center mt-16 gap-x-16 w-full mx-auto max-w-[60rem]">
                <img src="/img/logo.png" alt="Logo" className="rounded-full shadow-black-sb"/>
                <div className="flex flex-col justify-between">
                    <p className="text-lato-normal opacity-80">Hello! I'm Jana, a web developer passionate about creating interactive digital experience. With a strong foundation in design and full-stack technologies. I specialize in building responsive and accessible websites.</p>

                    <h3>Skills</h3>
                    <div className="flex flex-wrap gap-1">
                        {skills.map((skill) => (
                            <span key={skill.name} className="bg-teal-500 py-2 px-4 text-white-1 lato-bold text-lato-normal rounded-full">{skill.name}</span>
                        ))}
                    </div>
                    <div className="flex gap-x-3">
                        <button className="bg-violet-500 py-3 px-6 text-white-1 lato-bold text-lato-normal rounded-full">Download CV</button>
                        <a className="bg-slate-900 p-3 text-white-1 lato-bold text-lato-normal rounded-full" href="#"><FaGithub className="text-3xl" /></a>
                        <a className="bg-blue-500 p-3 text-white-1 lato-bold text-lato-normal rounded-full" href="#"><FaLinkedin className="text-3xl" /></a>
                    </div>
                </div>
            </div>
        </main>
    )
}
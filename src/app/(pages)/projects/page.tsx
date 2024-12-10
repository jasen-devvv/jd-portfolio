import Card from "@/components/Card"

export default function Projects() {
    const cardItems = [
        {
            title: 'JD - Blog',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!',
            tags: [
                { name: 'Express' },
                { name: 'React' },
                { name: 'Tailwind' },
                { name: 'MongoDB' },
            ]
        },
        {
            title: 'JD - Chat',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!',
            tags: [
                { name: 'Golang' },
                { name: 'Vue' },
                { name: 'Tailwind' },
                { name: 'MongoDB' },
            ]
        },
        {
            title: 'JD - TopUp',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!',
            tags: [
                { name: 'Python' },
                { name: 'Vue' },
                { name: 'Tailwind' },
                { name: 'MongoDB' },
            ]
        },
        {
            title: 'JD - Library',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!',
            tags: [
                { name: 'Python' },
                { name: 'Vue' },
                { name: 'Tailwind' },
                { name: 'MongoDB' },
            ]
        },
        {
            title: 'JD - Notes',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!',
            tags: [
                { name: 'Golang' },
                { name: 'Vue' },
                { name: 'Tailwind' },
                { name: 'MongoDB' },
            ]
        },
    ]

    return (
        <main className="w-full px-10">
            <div className="text-center mt-5">
                <h1>PROJECTS</h1>
                <p className="lato-regular opacity-70">Here are some of the projects I've worked on recently.</p>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-20">
                {cardItems.map((data) => (
                    <Card key={data.title} data={data}/>
                ))}
            </div>
        </main>
    )
}
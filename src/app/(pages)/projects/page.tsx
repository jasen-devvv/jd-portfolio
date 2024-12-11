import Card from "@/components/Card";

export default function Projects() {
  const cardItems = [
    {
      title: "JD - Blog",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!",
      tags: [
        { name: "Express" },
        { name: "React" },
        { name: "Tailwind" },
        { name: "MongoDB" },
      ],
      link: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: "JD - Chat",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque nihil id et obcaecati! Distinctio ea autem laudantium cumque provident harum. Neque labore veniam eaque recusandae quos exercitationem nobis ducimus odit ea delectus accusantium quo nemo, ut alias quisquam architecto amet repellendus! Expedita excepturi quae quod, necessitatibus mollitia natus facere!",
      tags: [
        { name: "Golang" },
        { name: "Vue" },
        { name: "Tailwind" },
        { name: "MongoDB" },
      ],
      link: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: "JD - TopUp",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!",
      tags: [
        { name: "Python" },
        { name: "Vue" },
        { name: "Tailwind" },
        { name: "MongoDB" },
      ],
      link: {
        demo: '#',
        code: '#'
      } 
    },
    {
      title: "JD - Library",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!",
      tags: [
        { name: "Python" },
        { name: "Vue" },
        { name: "Tailwind" },
        { name: "MongoDB" },
      ],
      link: {
        demo: '#',
        code: '#'
      }
    },
    {
      title: "JD - Notes",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab beatae quis corporis perferendis temporibus? Maxime illo perferendis repudiandae provident!",
      tags: [
        { name: "Golang" },
        { name: "Vue" },
        { name: "Tailwind" },
        { name: "MongoDB" },
      ],
      link: {
        demo: '#',
        code: '#'
      }
    },
  ];

  return (
    <main className="w-full px-5">
      <div className="text-center mt-5">
        <h1 className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
          PROJECTS
        </h1>
        <p className="opacity-50 font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
          Here are some of the projects I've worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center items-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-16">
        {cardItems.map((data) => (
          <Card key={data.title} data={data} />
        ))}
      </div>
    </main>
  );
}

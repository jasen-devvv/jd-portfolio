import Card from "@/components/Card";
import cardItems from "@/data/cardItems";

export default function Projects() {
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

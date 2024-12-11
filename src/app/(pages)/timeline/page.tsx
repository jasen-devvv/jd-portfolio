import timelineItems from "@/data/timelineItems";

export default function Timeline() {
  return (
    <main className="w-full px-5">
      <div className="text-center mt-5">
        <h1 className="text-h4 sm:text-h3 md:text-h2 lg:text-h1 font-quicksand">
        TIMELINE
        </h1>
        <p className="opacity-50 font-latoRegular text-body-small sm:text-body-normal md:text-body-medium">
        A journey through my education and career.
        </p>
      </div>
      <div className="flex items-center justify-center mt-16 bg-white-1 shadow-black-sb py-4 rounded-lg px-6">
        <div className="space-y-10 border-l-2 border-dashed">
          {timelineItems.map((timeline) => (
            <div key={timeline.title} className="relative w-full">
              {timeline.icon}
              <div className="ml-6">
                <h4 className="font-bold font-quicksand text-black-1">{timeline.title}</h4>
                <p className="mt-2 max-w-screen-sm font-latoRegular text-sm text-gray-500">
                  {timeline.description}
                </p>
                <span className="mt-1 block text-sm font-semibold text-blue-500">
                  {timeline.year}
                </span>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </main>
  );
}

import { ICard } from "@/util/interface";

export default function Card({ data }: ICard) {
    return (
        <div className="bg-white shadow-black-sb rounded-lg overflow-hidden w-full max-w-md">
            <div className="relative">
                <img
                    src="/img/project.png"
                    alt="Image"
                    className="w-full h-60 object-cover transform hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </div>

            {/* Card Content */}
            <div className="p-6">
                <h3 className="text-3xl font-latoBold font-bold text-gray-800 truncate">{data.title}</h3>
                <p className="text-black-1 font-latoRegular text-body-normal opacity-60 mt-3 text-base leading-relaxed line-clamp-3">{data.content}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                    {data.tags.map((tag) => (
                        <span
                            key={tag.name}
                            className="bg-primary shadow-primary-sb py-1 px-3 text-white-1 text-sm font-semibold rounded-full"
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <a
                        href={data.link.code}
                        className="text-secondary hover:text-teal-400 font-semibold transition duration-300 underline"
                    >
                        View Code
                    </a>
                    <a
                        href={data.link.demo}
                        className="text-secondary hover:text-teal-400 font-semibold transition duration-300 underline"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

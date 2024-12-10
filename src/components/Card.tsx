interface ITag {
    name: string
}

interface ICard {
    data: {
        title: string,
        content: string,
        tags: ITag[]
    }
}

export default function Card({data}: ICard) {
    return (
        <div className="bg-blue-400 p-5 justify-between rounded-lg">
            <img src="/img/logo.png" className="w-full h-60 object-cover" alt="Image" />
            <div className="flex flex-col justify-between">
                <p className="lato-bold text-lato-large">{data.title}</p>
                <p className="lato-regular text-lato-small">{data.content}</p>
                <div className="flex flex-wrap gap-1">
                    {data.tags.map((tag) => (
                        <span key={tag.name} className="bg-teal-500 py-1 px-2 my-2 text-white-1 lato-bold text-lato-normal rounded-full">{tag.name}</span>   
                    ))}
                </div>
                <div className="flex justify-between">
                    <a href="#">Demo</a>
                    <a href="#">View Code</a>
                </div>
            </div>
        </div>
    )
}
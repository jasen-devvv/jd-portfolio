interface ITag {
    name: string;
}

export interface ICard {
    data: {
        title: string;
        content: string;
        tags: ITag[];
        link: {
            demo: string,
            code: string
        }
    };
}

interface IImage {
    alt: string;
    width: string;
    height: string;
    url: string;
}

export interface IBaseImageProps {
    img: IImage;
    className: string;
}

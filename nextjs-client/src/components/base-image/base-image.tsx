import { Fragment } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const API_BASE = process.env.NEXT_PUBLIC_WAGTAIL_API_BASE;

function BaseImage({ img, className="" }: props) {
    return (
        <Fragment>
            {/* eslint-disable-next-line */}
            <LazyLoadImage
                className={`img-fluid ${className}`}
                alt={img.alt}
                height={img.height}
                width={img.width}
                src={`${API_BASE}${img.url}`}
            />
        </Fragment>
    ); 
}

export { BaseImage };

import { Carousel } from 'react-bootstrap';
import { BaseImage } from '@components/base-image';

function ImageCarousel(props: any) {
  return (
    <div className="my-4">
      <Carousel>
        {props.value.map((item: any, index: number) => (
          <Carousel.Item key={`${index}.${item}`}>
            <BaseImage img={item} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export { ImageCarousel };

import { Container } from 'react-bootstrap';
import { BaseImage } from '@components/base-image';

function ThumbnailGallery(props: any) {
  const { value } = props;

  return (
    <Container>
      <div className="row text-center text-lg-left">
        {value.map((imageItem: any, index: number) => (
          <div
            className="col-lg-3 col-md-4 col-6"
            key={`${index}.${imageItem}`}
          >
            <a>
              <BaseImage className="img-thumbnail" img={imageItem} />
            </a>
          </div>
        ))}
      </div>
    </Container>
  );
}

export { ThumbnailGallery };

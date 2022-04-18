import HeadInfo from '../components/HeadInfo';
import Image from 'next/image';
import Link from 'next/link';
import photoStyles from '../styles/Photos.module.css';

const photos = ({images}) => {
  return (
    <div>
      <HeadInfo title="My Photo" />
      <h1>My photos</h1>
      <ul className={photoStyles.photos}>
        {images.map((image, id) => (
          <div key={id}>
            <Link href={`/photos/${image.id}`}>
              <a>
                <Image
                  key={id}
                  src={image.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={image.title}
                ></Image>
              </a>
            </Link>
            <span>{image.title}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_start=0&_end=10'
  );
  const images = await res.json();

  return {
    props: {
      images,
    },
  };
};

export default photos;

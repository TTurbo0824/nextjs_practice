import styles from '../styles/Home.module.css';

export default function Home({posts}) {
  console.log(posts);
  return (
    <div>
      <h1>Welcome!</h1>
      <ul>
        {posts.map((post, id) => (
          <li key={id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:8080/api/post');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/post');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20
  };
};

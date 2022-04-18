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
    // 처음 접속이 일어난 후 20초 지난 시점부터 static 파일을 새롭게 생성할 수 있도록 함
    revalidate: 20
  };
};

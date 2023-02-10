import Head from 'next/head';
import Layout from '../../components/layout';

export default function Todo({ todo }) {
  console.log(todo);
  return (
    <Layout>
      <Head>
        <title>Todo - {todo.id}</title>
      </Head>
      <div
        key={todo.id}
        style={{
          padding: '10px',
          border: '1px solid',
          marginBottom: '5px',
        }}
      >
        <p>{todo.title}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const allTodos = await res.json();

  return {
    paths: allTodos.map((todo) => {
      return {
        params: {
          id: todo.id.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const todo = await res.json();

  return {
    props: {
      todo,
    },
  };
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${params.id}`
//   );
//   const todo = await res.json();

//   return {
//     props: {
//       todo,
//     },
//   };
// }

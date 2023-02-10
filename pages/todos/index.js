import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function Todos({ allTodos }) {
  return (
    <Layout>
      <Head>
        <title>Todos</title>
      </Head>
      <div>
        <p
          className="text-lg font-semibold text-violet-500"
          style={{ textAlign: 'center', fontSize: '28px', fontWeight: 600 }}
        >
          Todos
        </p>
        {allTodos.map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                padding: '10px',
                border: '1px solid',
                marginBottom: '5px',
              }}
            >
              <p style={{ marginBottom: '5px' }}>{todo.title}</p>
              <Link href={`/todos/${todo.id}`}>View</Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const allTodos = await res.json();
  return {
    props: {
      allTodos,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const allTodos = await res.json();
//   return {
//     props: {
//       allTodos,
//     },
//   };
// }

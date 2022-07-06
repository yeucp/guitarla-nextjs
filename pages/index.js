import Layout from '../components/Layout'
import GuitarList from '../components/GuitarList'
import Course from '../components/Course'
import EntryList from '../components/EntryList'

export default function Home({guitars,  course, entries}) {
  return (
    <Layout
      page='Inicio'
      guitar={guitars[3]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra colección</h1>
        <GuitarList
          guitars={guitars}
        />
      </main>
      <Course
          course={course}
        />
      <section className='contenedor'>
        <EntryList
          entries={entries}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const guitarsUrl = `${process.env.API_URL}/guitars`
  const coursesUrl = `${process.env.API_URL}/courses`
  const blogUrl = `${process.env.API_URL}/blogs?_limit=3&_sort=createdAt:desc`

  const [guitarsResponse, coursesResponse, blogResponse] = await Promise.all([
    fetch(guitarsUrl),
    fetch(coursesUrl),
    fetch(blogUrl)
  ])

  const [guitarsResult, coursesResult, blogResult] = await Promise.all([
    guitarsResponse.json(),
    coursesResponse.json(),
    blogResponse.json()
  ])

  return {
      props: {
          guitars: guitarsResult,
          course: coursesResult,
          entries: blogResult
      }
  }
}

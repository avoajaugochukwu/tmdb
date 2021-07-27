import Link from "next/link"
// Todo
// Use GraphQL - themoviedb doesn't support graphQL
// Write tests
// Use React Hooks

export default function Home() {

  return (
    <div className="text-center">

      <h1 className="text-8xl">
        Nothing to see here, thanks for stoping by.
      </h1>
      <div>
        <br /><br /><br /><br />
      <Link href="/movies/1">
        <a className="mt-10 font-semibold text-white bg-blue-500 rounded-sm hover:bg-blue-700 py-2 px-5">Visit Movies List</a>
      </Link>
      </div>
    </div>
  )
}




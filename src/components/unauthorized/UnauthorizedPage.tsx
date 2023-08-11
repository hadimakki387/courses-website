import Link from 'next/link'
import React from 'react'

function UnauthorizedPage() {
  return (
    <div className="h-screen w-screen text-white  text-5xl flex flex-col justify-center items-center gap-8">
          <div className="font-bold">403</div>
          <div>access denied</div>{" "}
          <Link
            href={"/"}
            className="py-4 px-8 course-lighter-bg-divs rounded-md text-2xl hover:text-sky-500 transition-all duration-300"
          >
            Get Back Home
          </Link>
        </div>
  )
}

export default UnauthorizedPage
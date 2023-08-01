import React from 'react'

function Learn() {
  return (
    <ul className="inline-bulleted-list mx-auto mb-8 w-3/4 leading-loose text-grey-600/50 lg:mx-0 lg:mb-0">
                <li>
                  <a className="transition-all hover:text-white" href="/join">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="transition-all hover:text-white">Sign In</a>
                </li>
                <li>
                  <a className="transition-all hover:text-white">Pricing</a>
                </li>
                <li>
                  <a className="transition-all hover:text-white" href="/series">
                    Series
                  </a>
                </li>
                <li>
                  <a className="transition-all hover:text-white" href="/browse">
                    Topics
                  </a>
                </li>
                
              </ul>
  )
}

export default Learn
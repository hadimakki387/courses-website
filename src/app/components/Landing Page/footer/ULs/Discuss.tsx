import React from 'react'

export default function Discuss() {
  return (
    <ul className="inline-bulleted-list mx-auto mb-8 w-3/4 leading-loose text-grey-600/50 lg:mx-0 lg:mb-0">
                <li>
                  <a
                    className="transition-all hover:text-white"
                    href="/discuss"
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    className="transition-all hover:text-white"
                    href="/podcast"
                  >
                    Podcast
                  </a>
                </li>
                <li>
                  <a className="transition-all hover:text-white" href="/blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="hover:text-white">Support</a>
                </li>
                <li>
                  <a className="hover:text-white" href="/work">
                    Work With Us
                  </a>
                </li>
              </ul>
  )
}

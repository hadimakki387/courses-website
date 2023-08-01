import React from 'react'

function Extras() {
  return (
    <ul className="inline-bulleted-list mx-auto mb-8 w-3/4 leading-loose text-grey-600/50 lg:mx-0 lg:mb-0">
    <li>
      <a
        className="transition-all hover:text-white"
        href="/gift-certificates"
      >
        Gift Certificates
      </a>
    </li>
    <li>
      <a className="transition-all hover:text-white" href="/faq">
        FAQ
      </a>
    </li>
    <li>
      <a
        className="transition-all hover:text-white"
        href="https://assets.laracasts.com"
      >
        Assets
      </a>
    </li>
    <li>
      <a
        className="transition-all hover:text-white"
        href="https://larajobs.com/?partner=36#"
        target="_blank"
        rel="noreferrer"
      >
        Get a Job
      </a>
    </li>
    <li>
      <a
        className="transition-all hover:text-white"
        href="/privacy"
      >
        Privacy
      </a>
    </li>
    <li>
      <a className="transition-all hover:text-white" href="/terms">
        Terms
      </a>
    </li>
  </ul>
  )
}

export default Extras
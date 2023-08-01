import React from 'react'

function Extras() {
  const items = [
    {
      name:"Gift Certificates"
    },
    {
      name:"FAQ"
    },
    {
      name:"Assets"
    },
    {
      name:"Get a Job"
    },
    {
      name:"Privacy"
    },
    {
      name:"Terms"
    },
  ]
  return (
    <ul className="inline-bulleted-list mx-auto mb-8 w-3/4 leading-loose text-grey-600/50 lg:mx-0 lg:mb-0 max-[1023px]:flex max-[1023px]:flex-wrap max-[1023px]:gap-2 max-[1023px]:justify-center">
    {items.map((item, index) => {
        return (
          <li key={index}>
            <a className="transition-all hover:text-white" href="/join">
              <span className="min-[1022px]:hidden"> . </span>
              {item.name}
            </a>
          </li>
        );
      })}
    
  </ul>
  )
}

export default Extras
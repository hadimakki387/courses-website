import React from 'react'

function Twitter() {
  return (
    <a
                  href="https://twitter.com/laracasts"
                  aria-label="Laracasts on Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-center h-12 w-12 flex-shrink-0 rounded-md bg-blue/10 hover:bg-blue/15"
                >
                  <svg
                    className="w-8 text-grey-600 transition-all"
                    viewBox="0 0 18 18"
                  >
                    <path
                      className="fill-current"
                      fillRule="nonzero"
                      d="M9 0C4.037 0 0 4.037 0 9c0 4.962 4.037 9 9 9 4.962 0 9-4.038 9-9 0-4.963-4.037-9-9-9zm4.015 6.94c.004.09.006.18.006.27 0 2.737-2.083 5.892-5.894 5.892a5.86 5.86 0 0 1-3.175-.93 4.158 4.158 0 0 0 3.067-.858 2.074 2.074 0 0 1-1.936-1.439 2.088 2.088 0 0 0 .936-.034 2.072 2.072 0 0 1-1.662-2.032v-.026c.28.155.6.249.938.26a2.07 2.07 0 0 1-.64-2.766 5.882 5.882 0 0 0 4.269 2.165 2.071 2.071 0 0 1 3.53-1.89 4.135 4.135 0 0 0 1.316-.503 2.08 2.08 0 0 1-.912 1.146c.419-.05.82-.16 1.19-.326-.277.415-.628.78-1.033 1.071z"
                    ></path>
                  </svg>
                </a>
  )
}

export default Twitter
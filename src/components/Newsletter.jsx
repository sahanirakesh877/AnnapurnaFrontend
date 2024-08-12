import React from 'react'

const Newsletter = () => {
  return (
    <>
   <div className="mx-auto container   py-4">
        <div className="relative isolate overflow-hidden bg-slate-200 px-6 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-20">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-red sm:text-4xl">Stay Informed with the Latest in Medical Supplies</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-md leading-2 text-gray-600">
            Stay ahead with the latest advancements and updates in medical equipment. Subscribe to our newsletter for exclusive news, product updates, and industry insights.
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-red/5 px-3.5 py-2 text-red shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6" placeholder="Enter your email" />
            <button type="submit" className="flex-none rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-red shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark text-white">Subscribe</button>
          </form>
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" aria-hidden="true">
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7"></circle>
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#7ED321" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

    </>
  )
}

export default Newsletter
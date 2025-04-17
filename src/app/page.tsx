import { ArrowRight, Leaf, Recycle, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      name: 'Sustainable Solutions',
      description: 'We provide eco-friendly technology solutions that help reduce electronic waste.',
      icon: Leaf,
    },
    {
      name: 'Community Driven',
      description: 'Join our community of volunteers and make a difference in the world.',
      icon: Users,
    },
    {
      name: 'Circular Economy',
      description: 'We believe in giving technology a second life through refurbishment and recycling.',
      icon: Recycle,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Giving Technology a Second Life
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us in our mission to reduce electronic waste and make technology accessible to everyone. 
              We refurbish, recycle, and redistribute technology to create a more sustainable future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/get-involved"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get involved
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Our Mission</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Creating a Sustainable Future
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're committed to reducing electronic waste and making technology accessible to everyone through our innovative solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
          <div className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-green-600 to-emerald-500"></div>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to make a difference?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join our community of volunteers and help us create a more sustainable future through technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/get-involved"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Volunteer with us
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

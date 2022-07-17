import {
  HandIcon,
  BookOpenIcon,
  ScissorsIcon,
  HeartIcon,
} from '@heroicons/react/outline'

const OurServices = [
  {
    name: 'Medical Treatment',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HandIcon,
  },
  {
    name: 'Broken Bone Treatment',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BookOpenIcon,
  },
  {
    name: 'Grooming',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScissorsIcon,
  },
  {
    name: 'Vaccination',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: HeartIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-12">
      <div className="mx-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Our Services
          </h2>
          <p className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
            A better way to treat our pets
          </p>
          <p className="mt-4 mb-10 max-w-2xl text-base text-gray-500 md:text-xl lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {OurServices.map((service) => (
              <div key={service.name} className="relative cursor-pointer">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-sm text-gray-500 md:text-base">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

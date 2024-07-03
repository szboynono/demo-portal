import { Link } from "react-router-dom"

const people = [
  {
    name: 'NAJA',
    title: 'Good stuff',
    role: 'XXXX',
  },
  {
    name: 'PAN',
    title: 'Good stuff',
    role: 'XXXX',
  },
]

export default function GridList() {
  return (
    <ul role="list" className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.name} className="cursor-pointer hover:bg-gray-300 h-[200px] col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <Link to='detail/naja'>
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p>
            </div>
          </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

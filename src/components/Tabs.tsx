import { Link, useLocation } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  { name: 'overview', href: 'overview/main', current: true },
  { name: 'test', href: 'test', current: false },
]

function Tabs() {
  const location = useLocation();
  console.log(location)

  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={classNames(
                  location.pathname.includes(tab.name)
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Tabs;

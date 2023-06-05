import { IconBrain, IconFileSearch, IconMail } from "@tabler/icons-react"

const apps = [{
  id: 1,
  name: 'Support assistant',
  description: 'Find the information to solve your customer\'s problem in seconds.',
  icon: IconBrain,
  backgroundColor: 'bg-red-200',
  color: 'text-red-800'
}, {
  id: 2,
  name: 'Sales assistant',
  description: 'During a sales meeting, find the right information to close the deal.',
  icon: IconMail,
  backgroundColor: 'bg-blue-200',
  color: 'text-blue-800'
}, {
  id: 3,
  name: 'Operations assistant',
  description: 'E.g. in insurance, reason about claims on historical data and documents.',
  icon: IconFileSearch,
  backgroundColor: 'bg-green-200',
  color: 'text-green-800'
}]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function HowItWorks() {
  return (
    <div className="">
      <div className="flex flex-col space-y-10 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="flex flex-col space-y-2 text-3xl font-semibold text-gray-900">
            <div>Any large language model (e.g. ChatGPT) connected to your own data.</div>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-row bg-white border border-gray-300 rounded-xl shadow-sm">
            <img
              src="/world-knowledge.png"
              alt="World knowledge"
              className="rounded-l-xl"
            />
            <div className="flex flex-col space-y-6 p-8 w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                World knowledge
              </h3>
              <p className="text-gray-500">
                Any large language model (e.g. ChatGPT) connected to your own data. Any large language model (e.g. ChatGPT) connected to your own data.
              </p>
            </div>
          </div>
          <div className="flex flex-row bg-white border border-gray-300 rounded-xl shadow-sm">
            <div className="flex flex-col space-y-6 p-8 w-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Domain knowledge
              </h3>
              <p className="text-gray-500">
                Any large language model (e.g. ChatGPT) connected to your own data. Any large language model (e.g. ChatGPT) connected to your own data.
              </p>
            </div>
            <img
              src="/domain-knowledge.png"
              alt="Domain knowledge"
              className="rounded-r-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="col-span-1 p-4 rounded-xl border border-gray-300 bg-white shadow-sm"
            >
              <div className="flex flex-col space-y-4">
                <div className={classNames(
                  app.backgroundColor,
                  'flex items-center justify-center w-16 h-16 rounded-lg'
                )}>
                  <app.icon className={classNames(
                    app.color,
                    'w-8 h-8'
                  )} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {app.name}
                </h3>
                <p className="text-gray-500">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

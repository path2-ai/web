import { IconBrain, IconFileSearch, IconMail } from "@tabler/icons-react"

const apps = [{
  id: 1,
  name: 'GPT-You',
  description: 'Generate text from a prompt.',
  icon: IconBrain,
  backgroundColor: 'bg-red-200',
  color: 'text-red-800'
}, {
  id: 2,
  name: 'Input management',
  description: 'Generate text from a prompt.',
  icon: IconMail,
  backgroundColor: 'bg-blue-200',
  color: 'text-blue-800'
}, {
  id: 3,
  name: 'Claims management',
  description: 'Generate text from a prompt.',
  icon: IconFileSearch,
  backgroundColor: 'bg-green-200',
  color: 'text-green-800'
}]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function AppStore() {
  return (
    <div className="">
      <div className="flex flex-col space-y-10 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="flex flex-col space-y-2 text-3xl font-semibold text-gray-900">
            <div>Applications for your business.</div>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="col-span-1 p-4 rounded-lg border border-gray-300 bg-white shadow-md"
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

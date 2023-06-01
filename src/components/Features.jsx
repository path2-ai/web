export function Features() {
  return (
    <div className="">
      <div className="flex flex-col space-y-10 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="flex flex-col space-y-2 text-3xl font-semibold text-gray-900">
            <div>Crafted from AI building blocks.</div>
          </h2>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="grid grid-cols-2 col-span-3 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
            <div className="flex flex-col space-y-4">
              <h3>
                Chat apps
              </h3>
            </div>
            <img
              src="/chat.png"
              alt="Chat"
              className="rounded-lg border border-gray-300"
            />
          </div>
          <div className="col-span-2 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
            <div className="flex flex-col space-y-4">
              <h3>
                Document apps
              </h3>
            </div>
            <img
              src="/documents.png"
              alt="Documents"
              className="rounded-lg border border-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <div className="grid grid-cols-2 col-span-2 p-4 rounded-lg border border-gray-300 bg-white shadow-md">
            <div className="flex flex-col space-y-4">
              <h3>
                Dashboards
              </h3>
            </div>
            <img
              src="/graphs.png"
              alt="Graphs"
              className="rounded-lg border border-gray-300"
            />
          </div>
          <div className="col-span-3 p-4 rounded-lg text-white border border-gray-800 bg-neutral-900 shadow-md">
            <div className="flex flex-col space-y-4">
              <h3>
                Developer platform
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

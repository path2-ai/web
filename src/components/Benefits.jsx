export function Benefits() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-10 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="flex flex-col space-y-4 text-6xl font-semibold text-gray-900">
            <div>Your company's knowledge</div>
            <div>at your fingertips.</div>
          </h1>
        </div>
        <div
          className="border p-6"
          style={{
            borderImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)) 1 100%',
            borderImageSlice: 1
          }}
        >
          <img
            src="/hero.png"
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg border border-gray-300"
          />
        </div>
        <div>
        </div>
      </div>
      <div className="p-20 bg-neutral-900 text-center">
        <div className="flex flex-col space-y-4 text-3xl font-semibold text-white">
          <div>
            "If my company only knew about all the things it knows about ..." - we get you!
          </div>
          <div>
            Time has come that we can finally put this saying aside.
          </div>
          <div>
            Retrieve information from your company's documents and systems via chat.
          </div>
        </div>
      </div>
    </div>
  )
}

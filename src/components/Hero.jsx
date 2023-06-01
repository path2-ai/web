export function Hero() {
  return (
    <div>
      <div className="flex flex-col space-y-10 py-20 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="flex flex-col space-y-4 text-6xl font-semibold text-gray-900">
            <div>Apps that understand human language.</div>
            <div>In your company's own app store.</div>
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
            className="w-full h-auto rounded-2xl shadow-lg border border-green-500"
          />
        </div>
      </div>
    </div>
  )
}

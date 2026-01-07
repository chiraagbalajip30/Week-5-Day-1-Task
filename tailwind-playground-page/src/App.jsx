// function App() {
//   return (
//     <div className="text-center p-6">
//       <h1 className="text-4xl font-bold font-geist">
//         Tailwind Playground
//       </h1>
//       <p className="mt-4 text-lg text-gray-700 font-geist">
//         This is Geist font.
//       </p>
//       <p className="mt-4 text-lg text-gray-700 font-inter">
//         This is Inter font.
//       </p>
//       <p className="mt-4 text-lg text-gray-700 font-roboto">
//         This is Roboto font.
//       </p>
//     </div>
//   );
// }

// export default App;


function App() {
  return (
    <div className="font-inter p-8 bg-gray-50 min-h-screen">
      {/* HEADINGS */}
      <section className="mb-8">
        <h1 className="text-6xl font-bold mb-2 font-geist">Heading 1 (Geist)</h1>
        <h2 className="text-5xl font-semibold mb-2 font-inter">Heading 2 (Inter)</h2>
        <h3 className="text-4xl font-medium mb-2 font-roboto">Heading 3 (Roboto)</h3>
        <h4 className="text-3xl font-medium mb-2">Heading 4 (Default Inter)</h4>
        <h5 className="text-2xl font-medium mb-2">Heading 5 (Default Inter)</h5>
        <h6 className="text-xl font-medium mb-2">Heading 6 (Default Inter)</h6>
      </section>

      {/* PARAGRAPHS / TEXT STYLES */}
      <section className="mb-8">
        <p className="text-lg mb-2 font-geist text-gray-800">
          This is a paragraph using Geist font.
        </p>
        <p className="text-base mb-2 font-inter text-gray-700">
          This is a paragraph using Inter font.
        </p>
        <p className="text-sm mb-2 font-roboto text-gray-600">
          This is a paragraph using Roboto font.
        </p>
      </section>

      {/* BACKGROUND COLORS */}
      <section className="mb-8">
        <div className="bg-blue-500 text-white p-4 mb-2 rounded">Blue Background</div>
        <div className="bg-green-500 text-white p-4 mb-2 rounded">Green Background</div>
        <div className="bg-red-500 text-white p-4 mb-2 rounded">Red Background</div>
        <div className="bg-yellow-400 text-gray-800 p-4 mb-2 rounded">Yellow Background</div>
      </section>

      {/* BUTTONS */}
      <section className="mb-8 flex gap-4 flex-wrap">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Primary
        </button>
        <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition">
          Success
        </button>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          Danger
        </button>
        <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded hover:bg-yellow-500 transition">
          Warning
        </button>
      </section>

      {/* SPACING EXAMPLES */}
      <section className="mb-8">
        <div className="bg-gray-200 p-2 mb-2">Padding p-2</div>
        <div className="bg-gray-300 p-4 mb-2">Padding p-4</div>
        <div className="bg-gray-400 p-8 mb-2">Padding p-8</div>
        <div className="bg-gray-500 p-12 mb-2">Padding p-12</div>
      </section>
    </div>
  );
}

export default App;


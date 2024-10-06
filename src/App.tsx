import "./App.css";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </nav>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">Widget 1</div>
          <div className="bg-white p-4 rounded shadow">Widget 2</div>
          <div className="bg-white p-4 rounded shadow">Widget 3</div>
        </div>
      </div>
    </div>
  );
}

export default App;

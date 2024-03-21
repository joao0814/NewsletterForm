import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-slate-900">
      <h1 className="font-bold text-5xl text-white">Subscribe</h1>
      <p className="text-white">
        Subscribe to our newsletter and stay informed.
      </p>
      <div className="w-1/3 mt-4 bg-stone-200 py-4 px-4 rounded-lg">
        <Form />
      </div>
      <p className="text-slate-100 text-sm w-1/4 mt-2 text-center">
        When you subscribe, you will start receiving our emails with the best
        tips, updates, and offers.
      </p>
    </div>
  );
}

export default App;

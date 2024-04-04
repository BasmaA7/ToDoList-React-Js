import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Auth/login';
import Tasks from './components/Tasks';
import Create from './Tasks/Create';


const App = () => {

  return (
    <>
      <Navbar />
      
      <div className="bg-gray-900 text-white py-20 px-10 text-center">
        <div className="bg-gray-700 py-8 rounded-lg">
          <h1 className="text-4xl  bg-gray-700font-bold mb-4">Welcome to Taskify</h1>
          <p className="text-lg mb-8">Organize your tasks efficiently with Taskify</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
      </div>
      <Create />

      <Tasks />
      <Footer />
     

    </>
  )
}

export default App;

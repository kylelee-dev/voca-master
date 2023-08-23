import Sidebar from '../components/Sidebar';
import WordList from '../components/WordList';


export default function Study() {
  return (<div>
    <div className='text-xl text-black bg-gray-200 w-full h-screen text-slate-700'>
      <div className="max-w-5xl w-full h-screen m-auto pt-4 flex">
        <Sidebar />
        {/* <WordList /> */}
      </div>
    </div>
  </div>)


}
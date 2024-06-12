import noProjectImage from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-24 text-center w-2/3 " >
            <img src={noProjectImage} alt="An empty task list"
                className='w-16
            h-16 object-contain mx-auto'/>
            <h2 className='txt-xl font-bold text-stone-500 my-4'>No Project selected</h2>
            <p className='mb-4  text-stone-400'>Select a Project or get started with a new one</p>
            <p className='text-stone-400 mb-4'>
                <Button onClick={onStartAddProject} >Create a new project</Button>
            </p>
        </div>
    );
}
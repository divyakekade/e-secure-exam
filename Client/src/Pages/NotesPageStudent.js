import './NotesPageFaculty.css';
import { useLocation } from 'react-router-dom';
import {Link} from "react-router-dom"
import Navbar2 from '../Components/Navbar2';
// import {ReactComponent as DeleteIcon} from "../Icons/delete-icon.svg";
export default function NotesPageStudent(){
    const role=useLocation().state
    return(
        <>
        <div className='noteslist-page'>
    <Navbar2 role={role.role.role}/>
    <div className='noteslist-outer-box'>
    <div className='noteslist-title'><p className='noteslist-name'>Notes</p></div>
        <Link to="/viewfile"><div className='notes-file'><p className='notes-file-name'>Notes 1</p></div></Link>
        <div className='notes-file'><p className='notes-file-name'>Notes 2</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 3</p></div>
        <div className='notes-file'><p className='notes-file-name'>Notes 4</p></div>
    </div>
    </div>
        </>
    )
}
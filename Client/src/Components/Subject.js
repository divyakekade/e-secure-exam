import "./subject.css";
import {ReactComponent as Noteicon} from "../Icons/note-icon.svg";
export default function Subject()
{
    return(
        <input className="button" type="file">
                <Noteicon className="note-icon"/>
                <h1>
                Subject
                </h1>
        </input>
    )
}
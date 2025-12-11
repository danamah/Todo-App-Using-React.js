import check from "../../assets/images/icon-check.svg";
import cross from "../../assets/images/icon-cross.svg";
export default function Task({todo,isCompleted,handleDelete,handleComplete,id}) {
    return <>
        <li className="d-flex justify-content-between align-items-center py-1">
            <div className="right d-flex pt-2">
                <div className="image d-flex justify-content-center align-items-center" onClick={()=>{
                    handleComplete(id)
                }}>
                    {isCompleted===true ? <img className="img-fluid w-50" src={check} alt="" /> : ""}
                </div>
                {isCompleted === true ? <p className="ps-2 text-decoration-line-through">{todo}</p> : <p className="ps-2">{todo}</p>}
            </div>
            <div className="left pb-2">
                <button onClick={()=>{
                    handleDelete(id)
                }}><img className="img-fluid w-100" src={cross} alt="" /></button>
            </div>
        </li>
    </>
}

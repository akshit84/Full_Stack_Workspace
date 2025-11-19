
const TodoListItem = ({ item, onDelete }) => {
    
    return (
        <div>
            {
                item.map((item, index) => (<>
                <br />
                    <div key={index}>{index+1}.) {item} <button className="deletebtn" onClick={() => onDelete(index)}>Delete</button></div>
                    
                </>))
            }
        </div>

    )
}

export default TodoListItem
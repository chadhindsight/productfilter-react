import { useAppContext } from '../context/globalState';


export function SidePanel(){
    const { state, dispatch } = useAppContext();

    const onCategoryClick = () =>{
        // dispatch: filtering the list being displayed by what option the user clicks
        dispatch({type: "TOGGLE_CATEGORY", payload}) // TODO: decide what should the payload be
    }

    return (
        <>
        
        </>
    )
}
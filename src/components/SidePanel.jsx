import { useAppContext } from '../context/globalState';


export function SidePanel(){
    const { state, dispatch } = useAppContext();
    const onCategoryClick = (e) =>{
        
        // dispatch: filters the product list being displayed by what option the user clicks
        dispatch({type: "TOGGLE_CATEGORY", payload: e.target.name}) // TODO: decide what should the payload be
    }
    console.log("buns")
    
    return (
        <section className="space-y-4 p-2 w-full md:max-w-[10rem]">
            {
                Object.keys(state.selectedCategories).map((cat, i)=> (

                    <div key={i}>
                    <input type="checkbox"
                     name={cat}
                     checked={state.selectedCategories[cat]} 
                     onChange={onCategoryClick}
                     id={cat} />
                    <label htmlFor={cat}>{cat}</label>
                  </div>))
            }
        </section>
    )
}
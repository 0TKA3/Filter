import '../../style.css'

const FilterInput = ({nameFilter,setNameFilter}) => {

    function filterHandeler() {
        setNameFilter(event.target.value)
    }

    return (
        <input type="text" placeholder="Фильтр" onChange={filterHandeler}/>
    );
}
 
export default FilterInput;
import './searchBox.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {InputField} from "../../atoms/IndexAtom";

const SearchBox = () => {

    const iconStyle = {
        color: "var(--color6)",
        fontSize: "30px",
    }

    return <div className="searchBox">
        <span className="searchBox__iconContainer">
            <SearchRoundedIcon style={iconStyle}/>
        </span>
        <InputField
            inputType="text"
            labelText={null}
            name="searchInput"
            onChangeCallback={() => {}}
            inputValue=""
            inputFieldStyle="searchInput"
            placeholder="Search"
            showError={false}
            inputContainerStyle="searchBoxInputContainer"
        />
    </div>
}

export default SearchBox;
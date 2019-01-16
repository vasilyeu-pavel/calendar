import AddButton from "./AddButton";
import UpdateButton from "./UpdateButton";
import SearchInput from "./SearchInput";
import Search from 'react-feather/dist/icons/search'
import React from "react";

const SectionButtons = props => {
    return (
        <section className='section-buttons'>
            <div className='section-buttons_left'>
                <AddButton />
                <UpdateButton />
            </div>
            <div className='section-buttons_right'>
                <span className='search-icon'>
                    <Search width={16} height={16}/>
                </span>
                <SearchInput />
            </div>
        </section>
    );
};

export default SectionButtons;

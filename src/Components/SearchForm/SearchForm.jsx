import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../Hooks/context'

export default function SearchForm() {

    const { setSearchTerm } = useGlobalContext()
    const searchValue = useRef('')
    useEffect(() => {
        searchValue.current.focus()
    }, [])
    function searchCocktail() {
        setSearchTerm(searchValue.current.value)
    }
    function handleSubmit(e) {
        e.preventDefualt()
    }
    return (
        <section className='section search'>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="">Search your favorite Cocktail</label>
                    <input type="text"
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}


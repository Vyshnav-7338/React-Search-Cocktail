import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../../Hooks/context'
import Loading from '../Loader/Loading'

function CocktailList() {
    const { loading, cocktails } = useGlobalContext()
    // console.log(cocktails)
    if (loading) {
        return (
            <Loading />

        )
    }
    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>No cocktails Found</h2>
        )
    }

    return (
        <section className="section">
            <h2 className='section-title'>Cocktails</h2>
            <div className="cocktails-center">
                {
                    cocktails.map((item) => (

                        <Cocktail key={item.id}{...item} />
                    ))
                }
            </div>
        </section>
    )
}

export default CocktailList

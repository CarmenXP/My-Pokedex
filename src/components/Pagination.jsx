import React from 'react'

const Pagination = ({cardsPerPage, cards, paginate}) => {
    const pageNumbers = []
    const totalCards = cards.length
    
        for(let i = 1; i <= (totalCards/cardsPerPage); i++){
            pageNumbers.push(i)
        } 
    
   


console.log("longitud del array....",totalCards)
console.log("CARDS en pag.....",cards)
console.log("páginas",pageNumbers)
  return (
    <nav>
  
       {
            pageNumbers.length !== 0
                ?(<ul className="pagination">
                    {pageNumbers.map(number =>(
                        <li key={number}>
                            <button className ='pagination_btn' onClick={()=>paginate(number)}>
                                {number}
                            </button>
                        </li>
                 ))}
                  </ul>)
                : ""
        } 
    </nav> 
  )
}

export default Pagination
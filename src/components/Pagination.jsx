import React from 'react'

const Pagination = ({cardsPerPage, cards, paginate}) => {
    const pageNumbers = []
    const totalCards = cards.length
    
        for(let i = 1; i <= (totalCards/cardsPerPage); i++){
            pageNumbers.push(i)
        } 
    
   

console.log(cardsPerPage)
console.log("length del arra",totalCards)
console.log("CARDS.....",cards)
console.log("páginas",pageNumbers)
  return (
    <nav>
  
       {
            pageNumbers.length !== 0
                ?(<ul className="pagination">
                    {pageNumbers.map(number =>(
                        <li key={number}>
                            <button onClick={()=>paginate(number)}>
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
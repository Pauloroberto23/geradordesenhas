

const CarDetails = ({brand, km , color}) => {
  return (
    <div>
        <ul>
            <li>marca:{brand} </li>
            <li>kilometragem:{km} </li>
            <li>cor:{color} </li>
        </ul>
    </div>
  )
}

export default CarDetails
import './Square.css'

export const Square = ({color}) => {
    return (
        <div className='square' style={{ backgroundColor: color}}></div>
    )
}
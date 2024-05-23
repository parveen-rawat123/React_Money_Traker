import { useState } from 'react'
import styled from 'styled-components'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../context/GlobalContext'
const Form = () => {
    const  {addIncome}= useGlobalContext()

    const [inputState, setinputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState

    const handleInput = (e) => {
        setinputState({ ...inputState, [name]: e.target.value })
    }


const handleSubmit = async (e) =>{
          e.preventDefault()
          addIncome(inputState)
}

    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="input-control">
                <input
                    type="text"
                    value={title}
                    name="title"
                    placeholder='Salary Title'
                    onChange={handleInput('title')}
                />
            </div>

            <div className="input-control">
                <input
                    type="number"
                    value={amount}
                    name="amount"
                    placeholder='Salary Title'
                    onChange={handleInput('amount')}
                />
            </div>

            <div className="input-control">
                <DatePicker
                    id="date"
                    placeholder="enteer a date"
                    selected={date}
                    dateFormate="dd/MM/yyyy"
                    onChange={(date) => {
                        setinputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className=' select input-control'>
                <select required value={category} name='category'
                    id='category' onChange={handleInput('category')}
                >
                    <option value="" disabled>select option</option>
                    <option value="salary">salary</option>
                    <option value="freelancing">freelancing</option>
                    <option value="investment">investment</option>
                    <option value="stocks">stocks</option>
                    <option value="bitcoin">bitcoin</option>
                    <option value="bank">bank</option>
                    <option value="youtube">youtube</option>
                    <option value="other">other</option>
                </select>
            </div>

            <div className="submit-btn">
                <button>add income</button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.div`
    


`

export default Form

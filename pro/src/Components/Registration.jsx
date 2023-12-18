import {useState} from 'react'

function Registration() {

    const[field, setField] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    })

    const[submitted, setSubmitted]=useState(false)
    const[validate,setValidate]=useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitted(true)
        if(field.firstName && field.lastName && field.phoneNumber && field.email){
            setValidate(true)
        }
        
    }
  return (
    <div>
        <h1>Form</h1>

        <form onSubmit={handleSubmit}>

            {submitted && validate ? <div>Registration Succesfull</div> : null}
            <input type="text" placeholder='FirstName' value={field.firstName} onChange={(event)=>setField({...field, firstName:event.target.value})}/>
            {submitted && !field.firstName ? <span>Enter your FirstName</span> : null}
            <input type="text" placeholder='LastName' value={field.lastName} onChange={(event)=>setField({...field, lastName:event.target.value})}/>
            {submitted && !field.lastName ? <span>Enter your LastName</span> : null}
            <input type="email" placeholder='Email' value={field.email} onChange={(event)=>setField({...field, email:event.target.value})}/>
            {submitted && !field.email ? <span>Enter your Email</span> : null}
            <input type="number" placeholder='PhoneNumber' value={field.phoneNumber} onChange={(event)=>setField({...field, phoneNumber:event.target.value})}/>
            {submitted && !field.phoneNumber ? <span>Enter your PhoneNumber</span> : null}

            <button type='submit'>Register Here</button>

        </form>
      
    </div>
  )
}

export default Registration
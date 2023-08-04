import React, { useEffect, useState } from 'react'
import useValidate from '../Hooks/useValidate'
import './Form.css'
function Form() {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: 'xyz@gmail.com',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        town: '',
        region: '',
        zip: '',
        country: ''
    })

    const { validateForm, errors } = useValidate();
    const [isClicked ,setIsClicked] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, id: new Date().getMilliseconds().toString(), [e.target.name]: e.target.value })
        console.log(formData)
    }

    useEffect(()=>{
            validateForm(formData);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm(formData)
        setIsClicked(true)
        console.log(errors)
        if (Object.keys(errors).length === 0) {
            alert('success');
        }
    }


    return (
        <div className='container col-5 my-5'>
            <h1>Registration</h1>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label> : {isClicked && <span>{errors.email}</span>} 
                <input type="email" className="form-control" id="email" placeholder="name@example.com" name='email' value={formData.email} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label> : {isClicked && <span>{errors.password}</span>}
                <input type="password" className="form-control" id="password" name='password' value={formData.password} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>: {isClicked && <span>{errors.confirmPassword}</span>}
                <input type="password" className="form-control" id="confirmPassword" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="fName" className="form-label">First Name</label> : {isClicked && <span>{errors.fName}</span>}
                <input type="text" className="form-control" id="fName" name='fName' value={formData.fName} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="lName" className="form-label">Last Name</label> : {isClicked && <span>{errors.lName}</span>}
                <input type="text" className="form-control" id="lName" name='lName' value={formData.lName} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label> : {isClicked && <span>{errors.phone}</span>}
                <input type="tel" className="form-control" id="phone" name='phone' value={formData.phone} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label> : {isClicked && <span>{errors.address}</span>}
                <textarea className="form-control" id="address" rows={3} name='address' value={formData.address} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="town" className="form-label">Town</label> : {isClicked && <span>{errors.town}</span>}
                <input type="text" className="form-control" id="town" name='town' value={formData.town} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="region" className="form-label">Region</label> : {isClicked && <span>{errors.region}</span>}
                <input type="text" className="form-control" id="region" name='region' value={formData.region} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="zip" className="form-label">Postalcode/Zip</label> : {isClicked && <span>{errors.zip}</span>}
                <input type="number" className="form-control" id="zip" name='zip' value={formData.zip} onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="country" className="form-label">Country</label> : {isClicked && <span>{errors.country}</span>}
                <select name="country" id="country" className='form-select' value={formData.country} onChange={handleChange}>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                </select>
            </div>
            <div className="mb-3">
                <button className='btn btn-success' type='submit' onClick={handleSubmit}>Register</button>
            </div>
        </div>

    )
}

export default Form
import { useState } from 'react';
import './App.css';
import IsModel from './components/IsModel';

export default function MyForm() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: 0,
    employee: null as boolean | null,
    salary: ''
  });
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (inputValidation()) {
      setShowModal(true);
      setMessage('Successfully submitted!');
    }
    else {
      setShowModal(true);
      setMessage('Please fill in all fields correctly.');
    }
  }

  function isFormValid() {
    if (formData.name.trim() !== '' && formData.phone.trim() !== '' && formData.age !== 0 && formData.employee !== null && formData.salary !== '') {
      return true;
    }
    return false;


  }
  function inputValidation() {
    if (formData.name.trim().length > 3 &&
      (typeof formData.age === 'number' && formData.age > 10 && formData.age < 100) &&
      formData.phone.trim().length > 11 &&
      formData.salary.trim().length > 0) {
      return true;
    }
    else {
      return false;
    }


  }
  return (
    < div className="my-form-page" >
      <form className="my-form-card" onSubmit={handleSubmit}>
        <div className="my-form-header">
          <h1>Personal Information</h1>
          <p>Please fill in your information below</p>
        </div>

        <div className="my-form-group">
          <label htmlFor="name">Full Name</label>
          <input
            className="my-form-input"
            type="text"
            id="name"
            name="formData.name"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="my-form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="my-form-input"
            type="tel"
            id="phone"
            name="formData.phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="my-form-row">
          <div className="my-form-group">
            <label htmlFor="age">Age</label>
            <input
              className="my-form-input"
              type="number"
              id="age"
              name="formData.age"
              onChange={(e) =>
                setFormData({ ...formData, age: Number(e.target.value) })
              }
              placeholder="Age"
              min="1"
              max="120"
              required
            />
          </div>

          <div className="my-form-group">
            <label>Employment</label>

            <div className="my-form-checkbox">
              <input
                type="checkbox"
                id="employee"
                checked={formData.employee === true}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    employee: event.target.checked,
                  });
                }}
              />

              <label htmlFor="employee">
                I am employed
              </label>
            </div>
          </div>
        </div>

        <div className="my-form-group">
          <label htmlFor="salary">Salary</label>
          <select
            className="my-form-input"
            id="salary"
            name="formData.salary"
            onChange={(e) =>
              setFormData({ ...formData, salary: e.target.value })
            }
            required
          >
            <option value="" disabled>
              Select your salary
            </option>
            <option value="under-1000">Less than $1,000</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-plus">$5,000+</option>
          </select>
        </div>

        <button className="my-form-button" type="submit" disabled={!isFormValid()}>
          Submit
        </button>
      </form>
      <IsModel setShowModal={setShowModal} setMessage={message} showModal={showModal} />

    </div >

  );
}
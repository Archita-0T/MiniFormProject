import { useState } from 'react';
import './App.css';

function App() {
  const[formData, setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    country:'India',
    streetAddress:'',
    city:'',
    state:'',
    zip:'',
    comments:false, candidates:false, offers:false,
    pushNotification:'',

  })
  function changeHandler(event){
    const{name, value, type, checked}=event.target;
    setFormData((prev)=>({...prev,[name]:type==="checkbox" ? checked : value}))
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Printing entire form data");
    console.log(formData);

  }
  return (
    <div className='outer'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <br/>
        <input
        className='first'
        type='text'
        name='firstName'
        id='firstName'
        placeholder='Radhi'
        value={formData.firstName}
        onChange={changeHandler}/>
<br/>
<label htmlFor='lastName'>Last Name</label>
        <br/>
        <input
        className='first'
        type='text'
        name='lastName'
        id='lastName'
        placeholder='Shetty'
        value={formData.lastName}
        onChange={changeHandler}/>
<br/>
<label htmlFor='email'>Email Address</label>
        <br/>
        <input
        className='first'
        type='text'
        name='email'
        id='email'
        placeholder='radhi876@abcd.com'
        value={formData.email}
        onChange={changeHandler}/>
<br/>
<label htmlFor='country'>Country</label>
<br/>
<select
className='first'
id='country'
name='country'
value={formData.country}
onChange={changeHandler}>
  <option>India</option>
  <option>United States</option>
  <option>Canada</option>
  <option>Australia</option>
</select>
<br/>
<label htmlFor='streetAddress'>Street Address</label>
        <br/>
        <input
        className='first'
        type='text'
        name='streetAddress'
        id='streetAddress'
        placeholder='1234 Main St'
        value={formData.streetAddress}
        onChange={changeHandler}/>
<br/>
<label htmlFor='city'>City</label>
        <br/>
        <input
        className='first'
        type='text'
        name='city'
        id='city'
        placeholder='Dehradun'
        value={formData.city}
        onChange={changeHandler}/>
<br/>
<label htmlFor='state'>State/ Province</label>
        <br/>
        <input
        className='first'
        type='text'
        name='state'
        id='state'
        placeholder='Uttarakhand'
        value={formData.state}
        onChange={changeHandler}/>
<br/>
<label htmlFor='zip'>Zip/ Postal Code</label>
        <br/>
        <input
        className='first'
        type='text'
        name='zip'
        id='zip'
        placeholder='110077'
        value={formData.zip}
        onChange={changeHandler}/>

<br/>
  <br/>
<fieldset>
  <legend>By Email</legend>
  <div className='checks'>
  <input
  type="checkbox"
  name='comments'
  id='comments'
  checked={formData.comments}
  onChange={changeHandler}/>
  <div>
    <label htmlFor='comments'>Comments</label>
    <p>Get notified when someone posts a comment on a posting</p>
  </div>
  </div>

  <div className='checks'>
  <input
  type="checkbox"
  name='candidates'
  id='candidates'
  checked={formData.candidates}
  onChange={changeHandler}/>
  <div>
    <label htmlFor='candidates'>Candidates</label>
    <p>Get notified when a candidate applies for a job</p>
  </div>
  </div>


  <div className='checks'>
  <input
  type="checkbox"
  name='offers'
  id='offers'
  checked={formData.offers}
  onChange={changeHandler}/>
  <div>
    <label htmlFor='offers'>Offers</label>
    <p>Get notified when a candidate accepts or rejects an offer</p>
  </div>
  </div>
  </fieldset>
  <br/>
  <br/>

  <fieldset>
    <legend>Push Notifications</legend>
    <p>These are delivered via SMS to your mobile phone.</p>

    <input
    type='radio'
    id='pushEverything'
    name='pushNotification'
    value="Everything"
    onChange={changeHandler}/>
    <label htmlFor='pushEverything'>Everything</label>
    <br/>

    <input
    type='radio'
    id='pushEmail'
    name='pushNotification'
    value="Same as email"
    onChange={changeHandler}/>
    <label htmlFor='pushEmail'>Same as email</label>
    <br/>

    <input
    type='radio'
    id='pushNothing'
    name='pushNotification'
    value="No Push Notifications"
    onChange={changeHandler}/>
    <label htmlFor='pushNothing'>No Push Notifications</label>
    <br/>

  </fieldset>
  <button>Save</button>
      

      </form>
      
     
    </div>
  );
}

export default App;

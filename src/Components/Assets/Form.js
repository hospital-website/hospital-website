import './Form.css'

const Form = () => {
  return <form action="" className='grid' >
    
    <div className='grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-2'>
        <input type="text" name="name" id="name" placeholder='Name' className='rounded-t-lg md:rounded-tr-none ' />

        <select name="gender" id="gender" placeholder='Gender' className='rounded-none md:rounded-tr-lg'>
            <option value="--">Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
        </select>

        <input type="email" name="email" id="email" placeholder='Email' />

        <input type="tel" name="phone" id="phone" placeholder='Phone' />

        <input type="date" id="date" name="date" placeholder="Select a date" />

        <input type="time" name="time" id="time" placeholder='Time' />

        <select name="doctor" id="doctor" placeholder='Doctor'>
            <option value="--">Doctor</option>
            <option value="doctor">doctor</option>
            <option value="doctor">doctor</option>
            <option value="doctor">doctor</option>
            <option value="doctor">doctor</option>
        </select>

        <select name="department" id="department" placeholder='Department'>
            <option value="--">Department</option>
            <option value="cardio">cardio</option>
            <option value="ortho">ortho</option>
            <option value="physician">physician</option>
        </select>
    </div>

    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' />

    <button type="submit" className='rounded-b-lg bg-accent text-center text-primary uppercase font-work py-2'>submit</button>

  </form>
}

export default Form
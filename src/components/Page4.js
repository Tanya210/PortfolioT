import React from 'react'
import emailjs from 'emailjs-com'

const Page4 = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_54p5m6l','template_syw15xt', e.target,'AM_y1AOwKpuyt5ysC').then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }
  return (
    <div className='content4' id='contact'>
      <h1 style={{textAlign:"center", paddingTop:"2em" , fontWeight:"700", fontSize:"2.5rem"}}>CONTACT</h1><br/>
      <span><p className='contact'>Feel free to Contact me by submitting the form below
       and I will get back to you as soon as possible</p></span>
       <br/>
       <br/>
       <br/>
       <div class="Contact_form-container">
        <form action="#" class="contact_form" method='post' onSubmit={sendEmail}>
        <div class="Contact_form-field">
  <label for="Name" class="contact_form-label">Name</label>
  <input type="text" class="form-control" name="name" id="Name" placeholder="Enter Your Name"></input>
</div>
<div class="Contact_form-field">
  <label for="Input2" class="form-label">Email</label>
  <input type="Email" class="form-control" name="email" id="Input2" placeholder="Enter Your Email"></input>
</div>
<div class="Contact_form-field">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="4" placeholder='Enter your message'></textarea>
</div><br/>
<button type='Submit' class="btn btn--theme btn-lg contact__btn" id='button'>Submit</button>

</form>
</div>
    </div>
  )
}

export default Page4

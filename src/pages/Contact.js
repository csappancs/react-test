import React from 'react'

export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='contact'>
            <h2>Contact</h2>
            <div className='contact-blocks'>
              <div>
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                    <label htmlFor="country">Country</label>
                    <select id="country" name="country">
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    <input type="submit" value="Submit"/>
                </form>
              </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.8437645776953!2d19.0211847761381!3d47.49295689581863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741de9d5ccc3833%3A0x1e0a210415fd640a!2sAdaptive%20Recognition!5e0!3m2!1shu!2shu!4v1697732034937!5m2!1shu!2shu" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </div>
    </div>
  )
}

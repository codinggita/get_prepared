import React from 'react'

function Refer() {
  return (
    <div>
        <section class="sugg">
        <h1>Motivate Your Friend To Become The Part Of Donation .</h1>
    </section>
    <section class="email">
        <form method="POST" name="myform" onsubmit="refer()">
            <input type="email" name="email" class="email_id" placeholder="Enter Their Email Address"/>
            <button type="submit" class="btn"> Invite Now </button>
        </form>
    </section>
    </div>
  )
}

export default Refer
import React from 'react';
import wallet from '@starport/vuex/lib/modules/common/wallet/wallet';

export default function Check() {
    console.log('DEFAULTS IS' , wallet)
    const handleClick = ()=>{
      
      let v= wallet.state()
      console.log("Hrllo -------->",v)
      console.log(wallet.getters.gasPrice(v))
      // console.log(wallet.getters.nameAvailable())  
      console.log(wallet.actions.connectWithKeplr("popular hard plastic thrive giggle join door gorilla canoe cruise rabbit shoulder"))        
    }
  return <div>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">/Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<button onClick={handleClick}> chick</button>

  </div>
}

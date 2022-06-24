import AbstractView  from "./AbstractView";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Login");

    }

    async getHtml(){
        return `
  
        <div class="containerlog">
        <div class="window">
          <div class="content">
            <div class="welcome">Hello There!</div>
            <div class="subtitle">We're almost done. Before using our services you need to create an account.</div>
            <div class="input-fields">
              <input type="email" placeholder="Email" class="input-line full-width"></input>
              <input type="password" placeholder="Password" class="input-line full-width"></input>
      
            </div>
            <div class="spacing">
              <div class="form-check" id="check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
               remembre me 
              </label>
              </div>
              <div id="logforgive">
                <h5 class="card-title" ><a href="#"> Forgot password</a></h5>
                <h5 class="card-title"> not a member <a href="register.html">register</a></h5>
              </div>
            </div>
            
      
            <div><button class="ghost-round full-width">Create Account</button></div>
            <div class="bold-line"></div>
          </div>
        </div>
      </div>

        `;
    }
}
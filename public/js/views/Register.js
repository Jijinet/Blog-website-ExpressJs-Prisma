import AbstractView  from "./AbstractView";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Register");

    }

    async getHtml(){
        return `
        
        <div class="containerlog">
        <div class="window">
          <!-- <div class="overlay"></div> -->
          <div class="content">
            <div class="welcome">Hello There!</div>
            <div class="subtitle">We're almost done. Before using our services you need to create an account.</div>
            <div class="input-fields">
              <!-- <input type='email' placeholder='Email' class='input-line full-width'></input>
              <input type='password' placeholder='Password' class='input-line full-width'></input> -->
              <label for="username">Username</label>
              <input class=" input-line full-width" type="text" name="username" id="username" placeholder="james.bond" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input class=" input-line full-width" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input class=" input-line full-width" type="password" name="password" id="password" placeholder="********" required />
            </div>
            <div class="form-group">
              <label for="passwordRepeat">Repeat Password</label>
              <input class=" input-line full-width" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
            </div>
       
      
            <div><button class="ghost-round full-width"> Register</button></div>
      
            <div class="spacing">
              <h5 class="card-title">already a member<a href="login.html"> login</a></h5>
            </div>
            <div class="bold-line"></div>
          </div>
      
         
        </div>
       </div>
        
        
        `;
    }
}
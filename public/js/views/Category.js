import { json } from "express";
import AbstractView  from "./AbstractView";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Categories");

    }


    async getHtml(){
      
      fetch('http://localhost:3000/categories',{method:'GET',headers:{'Content-Type':'application/json','Accept':'application/json'}})
      .then(result=>result.json())
      .then(
        data=>console.log(data)
      )
        return `
        
        <div id="body1">
  
        <div id="titles">
          <h2> Categories </h2>
        </div>
      <div class="card-group" id="cardgrcat">
    
        <div class="cardcat">
          <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><a href="#">Card title</a></h5>
          </div>
        </div>
        <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
        </div>
        <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          <div class="cardcat">
            <img src="images/card1 (1).jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title"><a href="#">Card title</a></h5>
            </div>
          </div>
          
        
      </div>
      <nav aria-label="..." id="pagination">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item ">
            <span class="page-link">
              2
              <span class="sr-only"></span>
            </span>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
        
        
        `;
    }
}
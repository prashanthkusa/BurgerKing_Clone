import React, { Component } from "react";
class Home extends Component{
    render(){
        return(
            <div id="home">
                <div id="home-1">
                <h1  class="home1-head">Start your BK® order.</h1>
                <div class="button-container">
    <button class="order-pickup">
       Order Pickup
    </button>
    <button class="order-delivery">
      Order Delivery
    </button>
  </div>
            


                </div>
                <div id="home-2">
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/97876c636e357c965a26f603f0a10bf3dd0d3f29-800x450.png?w=1300&q=90&fit=max&auto=format" alt="" />

                </div>





            </div>



        )
    }
}
export default Home
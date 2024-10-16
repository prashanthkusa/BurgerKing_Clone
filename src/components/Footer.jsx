import React, { Component } from "react";
import "./Style.css"
class Footer extends Component{
    render(){
        return(
            <div id="footer">
                <ul id="footer-ul" > 
                    <li>
                        <div className="image">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyCAYAAAAnWDnqAAAACXBIWXMAAB7CAAAewgFu0HU+AAAB5ElEQVR4nO2ZO0sDQRCAt7AQRNHMmFh53kx8NNpZWykWiTsRbBS0E/0VamdrIaKdir/A0v+gIEgstbfSIJEUyirBB0o2udztBXdgqmPnPma/3b2HUv89FkezJCEWTBbHcqFKaywGMKEZzoXx9WtqhnNzTaUpFjizKgSVn7DyCf0sjOuuOdVaEHRrhr2/QOVnEp7MTuV6nMCaaRaGa2tYrncby5qyk6lSoDE0JKNI0wqwQ0VaVUBcKBJVAUlKkbYrwDEqEpcCEocicSsg7VIkcQU4giKuFJBWFJF8Zk4TPLmGk7+gCZ5KYWb2o7Mj/YEQPrqGkoZ6QMU8uirNeOAchm2hcV8J471zELZUg/FOCWGtgzpcU6kAYfv0wOI7jF6JV7/o2O8S6PdhSfTgIKhqwlNh3P0ttblGUE3HSUdQLYUw3ehtphTCdDugIwOb7tm+KwrjmXtghh1bYM2wkwbg7SaAtz2w+A5/hldC/KL7Hl4J8UrEoIQmfOmYk46gar6tlTsHGG8iF0kYeEvN5zN9wngbYZo2bIGFYLP1xmB5YRx63wsVaGBYCK6aLkL4UAyzOVvgpWBwyIxpoSmXhvFbsZkZ1VUKYcX8VxDGC4s8LPJg3ha2HmaMJjiyugfhsSZYNmz1Am+atZQReCld9wAAAABJRU5ErkJggg==" alt="" class="footer-img"/>
                        </div>
                        <div className="ids">Home</div>
                     </li>
                    <li>
                        <div className="image">
                            <img src="https://www.bk.com/static/media/4f5f9366a38571baec86febd55f0769bc348f9d7-22x22.928445c72424e3a06f12.png" alt="" class="footer-img"/>
                        </div>
                     <div className="ids">   menu</div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAABuvAAAbrwFeGpEcAAACjklEQVR4nNXaO28UMRAAYPMQP+BmktTrSRpKJNoEJCSq3EyE0sE/oAhCIrxEEBI1He+XQoEA0SKQaOBvUFDRUUBxDUKAvJeE6Hbt9d7aXp+lrc573m/HM+vzrVI7jQlECD4LwUgI/wY5NP5kgndMcEKlaKLhdrCLrz/+MOHVqAguIxEVsT9CW9EgUk6nRJAx5kYsyCgpJBZGagYK9NUHmPBeMozEg6TFiAdktZhfkEU4yxo3hku43Ob7t5Q6KATPHJjrSSBMc6dZ4/f9nzPh2/Wj6kgbDBM+d+TNtaiQ1WJ+YRLx/4BbbcZpwnR+zogDwgTn7FMCvrQdqzEyusM0c0GGi3jBcQd/TDPeulKHROO2fZoNroSHLOGyY15/nGpAH4yGy0EhppnErkRD4681wmPTQnYxrPGFNeIaNoNCTHUyiW1ywkwnE4muiBaYS8EgsVvTNGPfatY3JBhGMoAEwUgmEJ+cEVdpzgnSCZMbZGpMjhAvzORDs66TWROpDNrKijrMGl7ZMGYJtdfZbNlUKwQ8mRWM0OB82ZE1fqgvd7OBYcLfawUcV8NicMrsO1nm4ePMMK8tN/1l2cn8QnMk1aOcMKLhTfU64eteJya4OQsYJrhYvT78NtnJimEND82uSG8CVebzhuVGv692dkWG8EFfGLYhxjki9SdlhmEnAu82nAybjpxJVs3YgRCCp17X0YCJXgA4BKJvDIdE9IXhGAgfjCnNoTAcE+GL6VrNOAUiNiYpIhamF4RXAWjx0OwVEQqTBaIrJiuEJ+b+JCZLRFtM1gi/VTPcaViKZ7NH4BOZvCPRDZMpoh0mc8RuM38F2LaazBsRM4FQO21IcNK8fDbe0YSRaPjExdyZ0AP9AyLFp7XcRqWkAAAAAElFTkSuQmCC" alt=""class="footer-img" />
                        </div>
                       <div className="ids"> offers</div>

                    </li>
                    <li>
                        <div className="image">
                            <img src="https://www.bk.com/static/media/daf5c681f2f8aafb1000074e9fa60c327055d59d-22x15.8999aa31fe345e72cf99.png" alt="" class="footer-img"/>
                        </div>
                        <div className="ids">rewards</div>
                    </li>
                </ul>
               

            </div>




        )
    }
}
export default Footer
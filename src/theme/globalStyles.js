import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 


    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text}; 
        background-repeat: no-repeat;
        background-size:100% ;
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    .tema{
        background: ${(props) => props.theme.btnTema};
        color: ${(props) => props.theme.btnTemaColor};
        border-radius: 30px;
        margin-bottom:5px;
    }
 
    h3, .id {
        margin-left: 10px;
        color: ${props => props.theme.name};
    }
   
    .imgNav{
        background: ${props => props.theme.capaUrl};
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
        display: inline-flex;  

        width: 550px;
        color: ${props => props.theme.text};        
    }

    // Pesquisa

    .search-btn{
        background:${props => props.theme.btnSrch};   
        border-radius: 10px;
        color: ${props => props.theme.btnSrchColor};        
    }

    .search{
        border-radius: 10px;
        background:${props => props.theme.btnSrch};   
        color: ${props => props.theme.btnSrchColor};        
        width: 400px;
    }

    .srch{
        background-color: rgb(17, 16, 16);
        width: 380px;
        margin-left: 50px;
        margin-top: 80px;
        margin-bottom: 100px;
        padding-bottom: 10px;
        border: double rgb(0, 0, 0);
        border-radius: 30px;
        box-shadow: 2px 2px 9px 7px rgba(2, 26, 24, 0.616);
        display: inline-flex;
    }

    .pagination-container{
        display: inline-flex;
        margin-bottom: 5px;
    }

    // Detalhes Pokemon
    .details{
        margin: auto;
        width: 500px;
        background-color: rgba(250, 10, 10, 0.623);
        background: ${props => props.theme.backdetails};   
         background-repeat: no-repeat;
        background-size: cover;
    }

    .type-details{
        padding-top: 25px;
    }

    .type-details, .bio-details{
        color: white;
        background-color: rgba(1, 14, 1, 0.966);
        height: 65px;
        align-items: flex-end;
    }

    .pokemon-type{
        border-radius: 20px;
        padding: 5px  8px;
        display:inline;
    }

    .img-details{
    width: 450px;
    }

    // Botoes
    .back{
    margin-left: 470px;
    background-color: black;
    color: white;
    }

    a{
        text-decoration: none;
    }

    .btn{
        border-radius: 20px;
        box-shadow: 2px 2px 9px 7px rgba(2, 26, 24, 0.616);
        margin-left: 15px;
        margin-right: 15px;
    }

    .img-btn{
        width: 40px;
    }

    // Cards
    .pokemon-card {
        background: ${props => props.theme.cardImg};
        background-repeat: no-repeat;
        background-size: cover;
        color: ${props => props.theme.text};
        box-shadow: ${props => props.theme.boxShadow};
        float: left;
        width: 370px;
        margin-left: 50px;
        margin-bottom: 15px;
        padding-bottom: 10px;
        padding-top: 10px;
        border:  rgb(0, 0, 0);
        border-radius: 30px;
        display: inline-flex;  
    }


    .card-top{
        text-align: end;    
    }
        
        
    .card-bottom{
        margin-top: 80px;
    }

    .img-card{
        margin-left:20px;
        width: 100px;
    }
    
    
//    Tipoas Pokemon
    
    .grass{
        background-color: rgb(0, 255, 42);
        color: black;
    }

    .fire{
        background-color: rgb(255, 0, 0);
        color: rgb(255, 255, 255);
    }
    
    .poison{
        background-color: blueviolet;
        color: white;
    }

    .water{
        background-color: aqua;
        color: black;
    }

    .bug{
        background-color: purple;
        color: rgb(255, 255, 255);
    }

    .fairy{
        background-color: rgba(189, 167, 189, 0.726);
        color: rgb(255, 255, 255);
    }

    .ghost{
        background-color: rgb(21, 13, 141);
        color: rgb(255, 255, 255);
    }

    .ice{
        background-color: rgb(33, 17, 252);
        color: rgb(255, 255, 255);
    }
    
    .steel{
        background-color: rgb(70, 71, 71);
        color: rgb(255, 255, 255);
    }
    
    .dark{
        background-color: rgb(0, 0, 0);
        color: rgb(255, 255, 255);
    }
    
    .dragon{
        background-color: rgb(253, 0, 0);
        color: rgb(0, 0, 0);
    }
    
    .rock{
        background-color: rgb(236, 252, 17);
        color: rgb(0, 0, 0);
    }

    .psychic{
        background-color: rgb(236, 252, 17);
        color: rgb(0, 0, 0);
    }

    .fighting{
        background-color: rgb(17, 52, 252);
        color: rgb(255, 255, 255);
    }

    .ground{
        background-color: rgb(170, 131, 3);
        color: rgb(255, 255, 255);
    }
    
    .flying{
        background-color: antiquewhite;
        color: black;
    }

    .electric{
        background-color: yellow;
        color: black;
    }

    .normal{
        background-color: blanchedalmond;
        color: rgb(0, 0, 0);
    }
    
 
`
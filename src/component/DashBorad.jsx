import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { fetchfood, handleDeleteFoodItem } from "../services/fetchfoodservices";
// import Container from "react-bootstrap/esm/Container";
import { Button, Card, Container } from 'react-bootstrap';
import Addfood from "./Addfood";

export  function DashBorad(){


  const [ foodlist , setFoodlist ] = useState([]);

   async function populatefoodlist(){
    try {
      const list = await fetchfood();
      console.log( list.foods );
      setFoodlist( list.foods ) ;
    } catch (error) {
      console.log( error );
    }
  }

  useEffect( ()=>{
       populatefoodlist()
  }, []
  )


    return(
      <Container>

        <Addfood></Addfood>
      {
      foodlist.map( (f)=>{
              return(
    //    <Card style={{ width: '18rem' }}>
      
    //   <Card.Body>
    //     <Card.Title>{f.name}</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>



                <div className="food-card">
            <div className="food-name">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 ><strong>{f.name}</strong></h4>
                    {/* <MdDeleteForever
                        onClick={() => handleDeleteFoodItem(food.id)}
                        className="delete-icon"
                        size="1.3em"
                        color="rgb(249, 152, 152)"
                    /> */}


                    <Button variant="primary"   onClick={() => handleDeleteFoodItem(f.name)}>Delete</Button>
                </div>
                <p><small>Per <b>{f.serving}g </b>serving </small></p>
            </div>

            {/* <img className="small" src={food.image} alt={food.name}></img> */}
            <div className="food-nutrients">
                <p><small>Protein</small> <b>{f.protein}g</b>  </p>
                <p><small>Calories</small>{f.calories}</p>
                <p><small>Sugar</small>{f.sugar}</p>
            </div>

            {/* <div>
                {item ? (
                    <div>
                        <button onClick={() => onRemove(item)} className="food-remove">-</button>
                        &nbsp;&nbsp;
                        <span>{item.qty}</span>
                        &nbsp;&nbsp;
                        <button onClick={() => onAdd(item)} className="food-add">+</button>
                    </div>
                ) : (
                    <button onClick={() => onAdd(food)} className="add-btn">Add meal</button>
                )}
            </div> */}
        </div>
              )
            })
          }
       
     

      </Container>


        
    );

}

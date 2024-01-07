import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Image, Button } from "semantic-ui-react";
import ProductService from "../services/productService";



export default function ProductDetail() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  
  useEffect(() => {
    let productService = new ProductService();
    productService.getByProductId(id).then(result => setProduct(result.data));
  }, [id]);

  return (
    <div>
      <Card.Group>
        <Card fluid> 
          <Card.Content>
            <Image
              floated="right"
              size="small"
              src={product.thumbnail}
            />
            <Card.Header >{product.title}</Card.Header>
            <Card.Meta>{product.category}</Card.Meta>
            <Card.Description>
              <strong>{product.description}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Sepetten Çıkart
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

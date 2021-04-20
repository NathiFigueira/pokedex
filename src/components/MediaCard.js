import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'
const StyledCard = styled(Card)`
  width: 200px;
  height: 300px;
  border: 1px  2px solid blue;
  box-shadow: 2px 4px 10px blue;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
export default function MediaCard() {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          image=""
          title="Pokemon.name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pokemon
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary" >
          Remover Pokemon
        </Button>
        <Button variant="contained" size="small" color="primary">
          Ver Detalhes
        </Button>
      </CardActions>
    </StyledCard>
  );
}
import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <Card className="mt-2">
      <CardHeader><CardTitle>{props.name}</CardTitle></CardHeader>
      <div className="cardContent">
        <CardImg className="h-auto w-50" top src={props.image} />
        <CardBody>
          <CardText>Status: {props.status}</CardText>
          <CardText>Species: {props.species}</CardText>
          <CardText>Gender: {props.gender}</CardText>
          <CardText>Episodes: {props.episode}</CardText>
        </CardBody>
      </div>
    </Card>
  )
}

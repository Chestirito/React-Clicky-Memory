import React, { Component } from "react";
import { Col, Row, Container } from "./Grid";
import Header from './Header';
import Introduction from './Introduction';
import Card from './Card';


class GameContainer extends Component {
  state = {
    score: {
      current: 0,
      top: 0
    },
    imgs: [],
    message: {
      text: "Click an image to begin!",
      color: "normal"
    }
  };

  componentDidMount = () => {
    this.setupCards();
  }

  handleOnClick = (src) =>{
    //console.log(src);
    let imgs = this.state.imgs;
    const index = imgs.findIndex(function(element) {
      return element.src === src;
    });

    if(imgs[index].isClick === true){
      this.resetGame();
    }
    else{
      let score = this.state.score;
      score.current += 1;
      imgs[index].isClick = true;
      this.setState({
        imgs : imgs,
        score : score,
        message: {text: "Correct", color: "green"}
      });
      this.shuffleCards();
    }
  }

  resetGame = () =>{
    let score = this.state.score;
    if(score.top < score.current){
      score.top = score.current;
    }
    score.current = 0;
    this.setState({
      score : score,
      message : {text: "Wrong!", color: "red"}
    });
    this.setupCards();
  }

  setupCards = () =>{
    
    let imgSrc = [
      "./Images/1.png",
      "./Images/2.png",
      "./Images/3.png",
      "./Images/4.png",
      "./Images/5.png",
      "./Images/6.png",
      "./Images/7.png",
      "./Images/8.png",
      "./Images/9.png",
      "./Images/10.png"
    ];

    imgSrc = this.randomizeArray(imgSrc);

    let objArr = []
    imgSrc.map(element => {
      return (objArr.push({
        isClick: false,
        src: element
      }));
    });

    //console.log(objArr);
    this.setState({
      imgs : objArr
    });
  }

  shuffleCards = () =>{
    let imgs = this.state.imgs
    imgs = this.randomizeArray(imgs);
    //console.log(imgs);
    this.setState({
      imgs : imgs
    });
  }
  randomizeArray = (array) =>{
    //let imgs = this.state.imgs;
    //console.log(this.state.imgs);
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    //console.log(imgs);

    return array;
  }

  reloadPage = () =>{
    window.location.reload();
  }
  

  render() {
    return (
      <Container fluid>
        <Header
          score={this.state.score}
          message={this.state.message}
          reloadPage={() => this.reloadPage()}
        />
        <Introduction/>
        <Row>
          <Col size="md-12">
            {this.state.imgs.map(element => {
              return(
                <Card
                  key={element.src}
                  src={element.src}
                  handleOnClick={() => this.handleOnClick(element.src)}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
      )
    }
}

export default GameContainer;

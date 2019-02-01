
const PhotoCard = (props) => {
  render(){
    return
    (<Card>
    <Image src={this.props.photo.img} />
    <Card.Content>
      <Card.Header>{this.props.photo.title}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>{this.props.photo.bio}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>)
  }
}

export default PhotoCard

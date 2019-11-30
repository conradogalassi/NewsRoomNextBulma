import React from 'react';

class Noticia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {datos} = this.props;
    console.log(datos);

    return (
        <div className="card">
            <div className="card-image">
            <figure className="image is-4by3">
                <a href={datos.url} target="_blank"><img src={datos.img_url} alt="Placeholder image"/></a>
            </figure>
            </div>
            <div className="content">
                <p>{datos.title}</p>
            </div>
        </div>
    );
  }
}

export default Noticia;
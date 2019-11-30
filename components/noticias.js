import React from 'react';
import Noticia from '../components/noticia';

class Noticias extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {hayNoticias} = this.props;

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {hayNoticias ? (
              hayNoticias.map((value, index) => (
                <div className="column is-one-quarter" key={index}>
                  <Noticia datos={value}/>
                </div>
              ))
            ) : (
              <article className="message is-warning">
                <div className="message-body">
                  No se han encontrado noticias con los criterios definidos
                </div>
              </article>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Noticias;

import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://instagram.faju16-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106262818_285961042515368_162135553127505832_n.jpg?_nc_ht=instagram.faju16-1.fna.fbcdn.net&_nc_ohc=nGRFi7G67X0AX_7EZ0A&oh=6f11e85c821ce853109fcbff7e1ed791&oe=5F5873EF" alt="Márcio Alves" />
        <div>
          <strong>Márcio Alves</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur.
            <br /> <br />
            adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu,
            lectus. Nam mattis, felis ut adipiscing.
          </p>
      <footer>
        <p>
          Preço/hora
            <strong>R$ 120,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
      </footer>
    </article>
  )
}
export default TeacherItem;
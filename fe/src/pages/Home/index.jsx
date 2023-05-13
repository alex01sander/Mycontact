import { FaLongArrowAltUp, FaEdit, FaTrash } from 'react-icons/fa';
import {
  Card,
  Container, Header, ListContainer, InputSearchContainer,
} from './styles';

export default function ContactsList() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos </strong>
        <a href="/">Novo Contato</a>
      </Header>
      <ListContainer>
        <Header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <FaLongArrowAltUp size="20" color="#5061fc" />
          </button>
        </Header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>
                Alex Sander
              </strong>
              <small>Instagram</small>
            </div>
            <span>alexsander@academy.com.br</span>
            <span>51 9999-9999</span>
          </div>
          <div className="actions">
            <a href="/">
              <FaEdit size="20" color="#5061fc" />
            </a>
            <button type="button">
              <FaTrash size="20" color="ff312e" />
            </button>
          </div>

        </Card>

      </ListContainer>
    </Container>
  );
}

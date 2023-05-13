/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {FaLongArrowAltLeft} from 'react-icons/fa';
import PropTypes from 'prop-types'


import { Container } from './styles';



export default function PageHeader({title}) {
  return (
    <Container>
        <Link to='/'> <FaLongArrowAltLeft/> Voltar</Link>
        <h1>{title}</h1>
    </Container>
  );

  
}

PageHeader. prototype = {
  title: PropTypes.string.isRequired,
}

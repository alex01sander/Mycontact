import FormGroup from "../FormGroup/FormGroup"
import { Form, ButtonContainer  } from "../ContactForm/styles"
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import PropTypes from 'prop-types'



export default function ContactForm({buttomLabel}) {
    return(
        <Form> 
            <FormGroup >
                <Input placeholder="Nome..."/>
            </FormGroup>
            <FormGroup >
                <Input placeholder="E-mail..."/>
            </FormGroup>
            <FormGroup >
                <Input placeholder="Telefone..."/>
            </FormGroup>

            <FormGroup >
                <Select>
                    <option value="Instagrem">Instagram</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttomLabel} </Button>
            </ButtonContainer>
        </Form>
    )
}

ContactForm.propTypes = {
    buttomLabel: PropTypes.string.isRequired,
}
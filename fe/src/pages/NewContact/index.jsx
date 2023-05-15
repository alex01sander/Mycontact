import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato"/>
        
      
      <ContactForm 
      buttomLabel='Cadastrar'/>
    </>
  );
}

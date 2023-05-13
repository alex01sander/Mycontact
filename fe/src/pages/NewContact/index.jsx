import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select.js';
import Input from '../../components/input';

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato"/>
        
      <Input placeholder='Nome...'/>
      <Select> 
      <option value="">Selecione uma opção</option>
      <option value="123">Instagram</option>
      <option value="123">Facebook</option>
      <option value="123">Twitter</option>
      <option value="123">Email</option>


      </Select>
    </>
  );
}

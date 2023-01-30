
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const DropdownFilter = ({option, setOption}) => {
  

  return (
    <DropdownButton  title={option} onSelect={(e) => setOption(e)}>  
      <Dropdown.Item eventKey='All'>All</Dropdown.Item>
        <Dropdown.Item eventKey="Women's Clothing">Women's Clothing</Dropdown.Item>
        <Dropdown.Item eventKey="Men's Clothing">Men's Clothing</Dropdown.Item>
        <Dropdown.Item eventKey="Jewelery">Jewelery</Dropdown.Item>
        <Dropdown.Item eventKey='Electronics'>Electronics</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownFilter;
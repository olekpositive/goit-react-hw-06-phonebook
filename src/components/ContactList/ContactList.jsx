import { useDispatch, useSelector } from 'react-redux';
import { getContactFilter, getContacts } from '../redux/selectors';
import { deleteContact } from '../redux/contactsSlice';
import {
  Btn,
  Contacts,
  ContactsItem,
  Name,
  Number,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ContactsItem>
          );
        })}
      </Contacts>
    </>
  );
};

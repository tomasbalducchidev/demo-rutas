import React from 'react'
import { useMemo } from 'react';
import { useParams } from 'react-router-dom'
import { getContact } from '../data/items';

const Contacts = () => {
  const params = useParams();

  const contact = useMemo(() => getContact(params.contactid), [params.contactid]);

  if(!contact) {
    throw new Error('Conact does not exist')
  }
  return (
    <div className='contactContainer'>
        <h1>{contact.name}</h1>
        <p>{contact.telephone}</p>
        <p>{contact.favorite ? 'favorite' : 'regular contact'}</p>
    </div>
  )
}

export default Contacts
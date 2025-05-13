
import { useLoaderData, useNavigation, useParams } from "react-router";
import { ContactInformation } from "./ContactInformation"
import { ContactInformationSkeleton } from "./ContactInformationSkeleton"
import { NoContactSelected } from "./NoContactSelected"
import type { Client } from "~/chat/interfaces/chat.interface";

interface Props {
  client?: Client;
}


export const ContactInformationCard = ({ client }: Props) => {

  const {id} = useParams();
  //useLoaderData recupera info desde el loader padre, si no se ha ejecutado un loader, esto no dará nada.
  const { clients = [] } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === 'loading';

  if ( client ) return <ContactInformation client={client}/>

  if (isPending) {
    return <ContactInformationSkeleton />
  }

  if (!id) {
    return <NoContactSelected />
  }
  //Depreciado.
  // const client = clients.find((client: Client) => client.id === id);

  if (!client) return <NoContactSelected/>

  return <ContactInformation client={client}/>
}

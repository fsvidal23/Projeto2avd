import React, {useEffect, useState} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo } from './styles';
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';

interface RepositoryParams {
  id: string;
}

interface Repository {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  gender: string;
  location: {
    name: string;
  }
  origin: {
    name: string;
  }
  created: string;
};



const Repository: React.FC = () => {

  const [detalhes, setRepository] = useState<Repository | null>(null);
  const { params } = useRouteMatch<RepositoryParams>();

useEffect(() => {
  async function loadData(): Promise<void> {
    const [repositorios] = await Promise.all([
      await api.get(`/character/${params.id}`),
    ]);
    setRepository(repositorios.data);
  }
  loadData();
}, [params.id]);

  return (
    <>
    <Header>
      <Link to="/">
        <FiChevronLeft size={20} />
        Voltar
      </Link>
    </Header>
      {detalhes && (
        <RepositoryInfo>
        <header>
          <img src={detalhes.image} alt={detalhes.name}></img>
          <div>
            <strong>{detalhes.name}</strong>
            <p>{detalhes.species}</p>
          </div>
        </header>

        <ul>
          <li>
          <span>Id</span>
          <strong>{detalhes.id}</strong>
          </li>
          <li>
          <span>Origem</span>
          <strong>{detalhes.origin.name}</strong>
          </li>
          <li>
          <span>Localização Atual</span>
          <strong>{detalhes.location.name}</strong>
          </li>
        </ul>

        <ul>
        <li>
          <span>Gênero</span>
          <strong>{detalhes.gender}</strong>
          </li>
          <li>
          <span>Data de Criação</span>
          <strong>{detalhes.created}</strong>
          </li>
          <li>
          <span>Status</span>
          <strong>{detalhes.status}</strong>
          </li>

        </ul>

        </RepositoryInfo>
      )}
    </>
  );
};

export default Repository;
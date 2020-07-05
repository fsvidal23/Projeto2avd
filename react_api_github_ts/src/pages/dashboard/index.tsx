import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';
import {Link} from 'react-router-dom';

interface Repository {
      id: number;
      image: string;
      name: string;
      species: string;


  };

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositorios = localStorage.getItem(
    '@GithubExplorer:repositories',
    );

  if (storagedRepositorios) {
    return JSON.parse(storagedRepositorios);
  }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories),);
  }, [repositories])

  async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();

    if (!newRepo) {
      setInputError('Digite o id de um personagem');
      return;
    };

    try {
      const response = await api.get<Repository>(`/character/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch(error)
     {
      setInputError('Id inexistente! Digite um id entre 1 e 591!');
    }

  }
  return (
    <>
  <Title>Explorer Rick & Morty</Title>
  <Form hasError={!!inputError} onSubmit={handleAddRepository}>
    <input
    value={newRepo}
    onChange={e => setNewRepo(e.target.value)}
    placeholder="Digite o id de um personagem de 1 a 591" />
    <button type="submit">Pesquisar</button>
  </Form>

  {inputError && <Error>{inputError}</Error>}

  <Repositories>
    {repositories.map((repository => (
        <Link key={repository.id} to={`/repository/${repository.id}`}>
        <img src={repository.image} alt={repository.name} />
        <div>
          <strong>{repository.name}</strong>
        <p>Clique aqui para mais detalhes!</p>
        </div>
        <FiChevronRight size={20} />
        </Link>
    )))}

  </Repositories>
  </>
  )
};

export default Dashboard;
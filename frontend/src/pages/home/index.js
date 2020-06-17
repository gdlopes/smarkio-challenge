import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, InputComment, ReadComment } from './styles';

const Home = () => {
  const [newComment, setNewComments] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function loadComments() {
      const response = await api.get('comments');

      setComments(response.data);
    }

    loadComments();
  }, []);

  async function handleAddComment(event) {
    event.preventDefault();

    if (!newComment) return;

    try {
      const body = { comment: newComment };
      const response = await api.post('comments', body);

      const comment = response.data;

      setComments([...comments, comment]);
      setNewComments('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <InputComment>
        <form onSubmit={handleAddComment}>
          <h1>Comentários</h1>
          <input
            value={newComment}
            onChange={e => setNewComments(e.target.value)}
            placeholder="Digite algum texto aqui..."
          />
          <button type="submit">Cadastrar</button>
        </form>
      </InputComment>

      <ReadComment>
        <h1>Comentários</h1>
        <div>
          {comments.map(item => (
            <div key={item.id}>
              <p>{item.comment}</p>
              <button>Ouvir</button>
            </div>
          ))}
        </div>
      </ReadComment>
    </Container>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, InputComment, ReadComment } from './styles';

const Home = () => {
  const [newComment, setNewComments] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get('comments').then(response => {
      setComments(response.data);
    });
  }, []);

  async function handleAddComment(event) {
    event.preventDefault();

    const body = { comment: newComment };
    const response = await api.post('comments', body);

    const comment = response.data;

    setComments([...comments, comment]);
    setNewComments('');
  }

  async function handlePlayAudio(comment) {
    const audio = document.getElementById(`${comment.id}`);
    audio.play();
  }

  return (
    <Container>
      <InputComment>
        <form onSubmit={e => handleAddComment(e)}>
          <h1>Comentários</h1>
          <textarea
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

              <audio controls="controls" id={item.id}>
                <source src={`./tmp/${item.file_name}.wav`} type="audio/wav" />
              </audio>

              <button onClick={() => handlePlayAudio(item)}>Ouvir</button>
            </div>
          ))}
        </div>
      </ReadComment>
    </Container>
  );
};

export default Home;

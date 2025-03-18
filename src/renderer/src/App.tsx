import { useEffect, useState } from 'react';


function App(): JSX.Element {
  const [users, setUsers] = useState<{ id: number; name: string; email: string; telefone: string }[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState<string | null>(null);

  const fetchUsers = async () => {
    const result = await  (window as any).api.user.getUsers();
    setUsers(result);
  };
  
  const handleCreateUser = async () => {
    try {
      const user = await  (window as any).api.user.createUser({ name, email }); // Chama a função exposta no preload
      
      setResponse(`Usuário criado: ${user.name} (${user.email})`);
      fetchUsers();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setResponse('Erro ao criar usuário.');
    }
  };

  useEffect(() => {
    fetchUsers(); // Carrega os usuários ao iniciar
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1 className='text-blue-500 text-2xl'>Electron + React + Sequelize</h1>
    <input
      type="text"
      placeholder="Nome"
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={{ color:'black', margin: '10px', padding: '10px' }}
    />
    <input
      type="email"
      placeholder="E-mail"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{ color:'black', margin: '10px', padding: '10px' }}
    />
    <button onClick={handleCreateUser} style={{ padding: '10px', fontSize: '16px' }}>
      Criar Usuário
    </button>
    {response && <p>{response}</p>}

    <div>
      <h2>Usuários</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default App

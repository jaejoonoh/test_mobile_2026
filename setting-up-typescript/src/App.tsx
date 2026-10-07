import Greeting from './Greeting';
import UserCard from './UserCard';

function App() {
  return (
    <div>
      <Greeting name="TypeScript" />
      <UserCard user={{ name: 'John Doe', email: 'john.doe@example.com' }} />
    </div>
  );
}

export default App;
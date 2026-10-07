import Greeting from './Greeting';
import UserCard from './UserCard';
import Button from './Button';

function App() {
  return (
    <div>
      <Greeting name="TypeScript" />
      <UserCard user={{ name: 'John Doe', email: 'john.doe@example.com' }} />
      <Button>Click me!</Button>
      <Button disabled>Don't click me!</Button>
    </div>
  );
}

export default App;
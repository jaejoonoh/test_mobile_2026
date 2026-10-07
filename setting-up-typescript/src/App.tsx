import Greeting from './Greeting';
import UserCard from './UserCard';
import Button from './Button';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Greeting name="TypeScript" />
      <UserCard user={{ name: 'John Doe', email: 'john.doe@example.com' }} />
      <Button>Click me!</Button>
      <Button disabled>Don't click me!</Button>
      <Counter />
    </div>
  );
}

export default App;
type UserProps = {
    user: {
        name: string;
        email: string;
    }
}

const UserCard = ({ user }: UserProps) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>    
    );
};

export default UserCard;